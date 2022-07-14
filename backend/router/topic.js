const express = require('express');
const topicRouter = express.Router();
const topicControllers = require('../controllers/topic');
const auth = require('../middleware/auth');
const upload = require('../middleware/multerConfig')


topicRouter.get('/', topicControllers.getAllTopics);
topicRouter.get('/:id', topicControllers.getSingleTopic);
topicRouter.post('/',  topicControllers.createTopic);
topicRouter.put('/:id',  upload, topicControllers.updateTopic);
topicRouter.delete('/:id', topicControllers.deleteTopic);

module.exports = topicRouter;