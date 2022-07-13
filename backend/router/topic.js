const express = require('express');
const topicRouter = express.Router();
const topicControllers = require('../controllers/topic');
const auth = require('../middleware/auth');
const upload = require('../middleware/multerConfig')


topicRouter.get('/', auth, topicControllers.getAllTopics);
topicRouter.get('/:id', auth, topicControllers.getSingleTopic);
topicRouter.post('/', auth, upload, topicControllers.createTopic);
topicRouter.put('/:id', auth, upload, topicControllers.updateTopic);
topicRouter.delete('/:id', auth, topicControllers.deleteTopic);

module.exports = topicRouter;