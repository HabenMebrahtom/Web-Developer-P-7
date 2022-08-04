const Comment = require('../models/comment');



exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).send(comments);
    } catch (error) {
        res.status(404).send(error.message);
    }
}



exports.createComment = async (req, res) => {
    const { comment } = req.body;
    const { id } = req.params;
    
    try {
        const newComment = await Comment.create({
            postId: id,
            comment: comment,
        });

        res.status(201).send(newComment);

    } catch (error) {
        res.status(400).send(error.message)
    }
}

