const UserPost = require('../models/userPost');



exports.addUserId = async (req, res) => {
    const { userId } = req.body;
    const { id } = req.params;
    
    try {
        const newUserId = await UserPost.create({
            userId: userId,
            postId: id
        });

        res.status(201).json(newUserId);

    } catch (error) {
        res.status(400).send(error.message)
    }
}