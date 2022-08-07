const Comment = require('../models/comment');



exports.createComment = async (req, res) => {
    const { comment } = req.body;
    const { id } = req.params;
    
    try {
        let newComment = await Comment.create({
            comment: comment, 
            postId: id
        });

        console.log(newComment);
        res.status(201).json(newComment);

    } catch (error) {
        res.status(400).send(error.message)
    }
}

