const express = require('express');
const router = express.Router();
const trendingNewsController = require('../controller/trendingNews'); // Replace with the correct path to the controller file

// GET /trending-news
router.get('/', trendingNewsController.getTrendingNews);

// POST /trending-news
router.post('/', trendingNewsController.createTrendingNews);


router.get('/:id', trendingNewsController.getbyIdTrendingNews);

// PUT /trending-news/:id
router.put('/:id', trendingNewsController.updateTrendingNews);

// DELETE /trending-news/:id
router.delete('/:id', trendingNewsController.deleteTrendingNews);


router.get('/view/count', trendingNewsController.getNewsSortedByCount)


router.get('/view/News/:newsId', trendingNewsController.viewNews)


router.get('/view/getNewsSortedByDate', trendingNewsController.getNewsSortedByDate)

module.exports = router;
