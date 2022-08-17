const Comment = require('../models/comment');



exports.createComment = async (req, res) => {
    const { comment, username } = req.body;
    const { id } = req.params;
     console.log(comment);
    
    try {
        const newComment = await Comment.create({
            comment: comment, 
            username: username,
            postId: id
        });

        console.log(newComment);
        res.status(201).json(newComment);

    } catch (error) {
        res.status(400).send(error.message)
    }
}

