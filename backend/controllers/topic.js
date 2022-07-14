const db = require('../models/index');

const Topic = db.topic;


exports.getAllTopics = async (req, res) => {
    
    try {
        const topics = await Topic.findAll();
        res.status(200).send(topics);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

exports.getSingleTopic = async (req, res) => {
    const { id } = req.params;
    try {
        const topic = await Topic.findOne({ where: { id: id } });
        res.status(200).send(topic);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

exports.createTopic = async(req, res) => {
    try {
        const { title, content } = JSON.parse(req.body.topic);
        const url = req.protocol + '://' + 'localhost:4000';
        const newTopic = await Topic.create({
            title: title,
            content: content,
            //imageUrl: url + '/images/' + req.file.filename
        })

        res.status(201).send(newTopic);
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.updateTopic = async(req, res) => {
   
    const { userId, title, content, imageUrl } = JSON.parse(req.body.topic);  
    let topic = new Topic({ where: { id: req.params.id } });
    
    if (req.file) {
        const url = req.protocol + '://' + 'localhost:4000';
        topic = {
            userId: userId,
            title: title,
            content: content,
            imageUrl: url + '/images/' + req.file.filename
        }
    } else {
        topic = {
            userId: userId,
            title: title,
            content: content,
            imageUrl: imageUrl
        }
    }
    try {
        const updatedTopic = await Topic.updateOne({ where: { id: req.params.id }}, topic);
        res.status(201).send(updatedTopic)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


exports.deleteTopic = async (req, res) => {
    const { id } = req.params;
   
    try {
        const deletedTopic = await Topic({ where: { id: id } });
        res.status(204).send(deletedTopic);
    } catch (error) {
        res.status(400).send(error.message)
    }
}