const { fn, col, literal } = require('sequelize');
const Transaction = require('../models/Transaction');
const NodeCache = require('node-cache');

// Cache data for 60 seconds (1 minute)
const cache = new NodeCache({ stdTTL: 60 });

const dashboardAnalytics = async (req, res) => {
  try {
    let targetUserId = req.user.id;

    // Allow admin to request analytics for a specific user
    if (req.user.role === 'admin' && req.query.userId) {
      targetUserId = req.query.userId;
    }

    const cacheKey = `analytics_${targetUserId}`;

    // 1. Check if we have cached data for this user
    if (cache.has(cacheKey)) {
      console.log(`[Cache Hit] Serving analytics for user ${targetUserId}`);
      return res.json(cache.get(cacheKey));
    }

    console.log(`[Cache Miss] Calculating analytics for user ${targetUserId}`);

    const whereExpense = { userId: targetUserId, type: 'expense' };
    const whereAll = { userId: targetUserId };

    // Changed col('date') to col('createdAt') in attributes, group, and order
    const monthlySpending = await Transaction.findAll({
      where: whereExpense,
      attributes: [
        [fn('DATE_TRUNC', 'month', col('createdAt')), 'month'],
        [fn('SUM', col('amount')), 'total']
      ],
      group: [fn('DATE_TRUNC', 'month', col('createdAt'))],
      order: [[fn('DATE_TRUNC', 'month', col('createdAt')), 'ASC']]
    });


    const categoryBreakdown = await Transaction.findAll({
      where: whereExpense,
      attributes: ['category', [fn('SUM', col('amount')), 'total']],
      group: ['category']
    });


    const incomeExpense = await Transaction.findAll({
      where: whereAll,
      attributes: ['type', [fn('SUM', col('amount')), 'total']],
      group: ['type']
    });

    // 4. Format Data
    const result = {
      monthlySpending: monthlySpending.map(i => ({
        month: i.dataValues.month,
        total: parseFloat(i.dataValues.total) || 0
      })),
      categoryBreakdown: categoryBreakdown.map(i => ({
        category: i.dataValues.category || 'Uncategorized',
        total: parseFloat(i.dataValues.total) || 0
      })),
      incomeExpense: incomeExpense.map(i => ({
        type: i.dataValues.type,
        total: parseFloat(i.dataValues.total) || 0
      }))
    };

    // 5. Store in cache before sending
    cache.set(cacheKey, result);

    res.json(result);

  } catch (err) {
    console.error('Dashboard Analytics Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch analytics' });
  }
};

module.exports = { dashboardAnalytics };