const db = require('../models/index');
const Reply = db.reply;



exports.getAllReply = async (req, res) => {
    try {
        const replies = await Reply.findAll();
        res.status(200).send(replies);
    } catch (error) {
        res.status(404).send(error.message);
    }
}


exports.getSingleReply = async(req, res) => {
    const { id } = req.params;
    try {
        const reply = await Reply.findOne({ where: { id: id } });
        res.status(200).send(reply);
    } catch (error) {
        res.status(404).send(error.message)
    }
}


exports.createReply = async (req, res) => {
    const { userId, content } = JSON.parse(req.body);
    const url = req.protocol + '://' + 'localhost:4000';
    try {

        const newUser = await Reply.create({
            userId: userId,
            content: content,
            imageUrl: url + '/images/' + req.file.filename
        });

        res.status(201).send(newUser);

    } catch (error) {
        res.status(400).send(error.message)
    }
}


exports.updateReply = (req, res) => {
     const { userId, content, imageUrl } = JSON.parse(req.body);
    const url = req.protocol + '://' + 'localhost:4000';
    const reply = new Reply({ id: req.params.id });

    if (req.file) {
        reply = {
            userId: userId,
            constent: content,
            imageUrl: url + '/images/' + req.file.filename
        }
    } else {
        reply = {
            userId: userId,
            content: content,
            imageUrl: imageUrl
        }
    }

    try {
        const updatedReply = await Reply.updateOne({ where: { id: req.params.id } }, reply);
        res.status(201).send(updatedReply)

    } catch (error) {
        res.status(400).send(error.message)
    }
}


exports.deleteReply = async(req, res) => {
    const { id } = req.params;
    try {
        const deletedReply = await Reply.destroy({ where: { id: id } });
        res.status(204).send(deletedReply);
    } catch (error) {
        res.status(400).send(error.message);
    }
}