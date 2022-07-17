const Post = require('../models/post');

exports.getAllPosts = async(req, res) => {
    try {
        const post = await Post.findAll();
        res.status(200).json(post)
    } catch (error) {
        res.status(404).send(error.message);
    }
}


exports.createPost = async (req, res) => {
    console.log(req.body)
    const { title, content } = req.body;

    try {
        const newPost = await Post.create({
            title: title,
            content: content
        });
        console.log(newPost)
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updatePost = async(req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    const post = {
        title: title,
        content: content
    }
    
    try {
        const updatedPost = await Post.updateOne({where: {id: id}}, post)
        res.status(201).json(updatedPost);

    } catch (error) {
        res.sendStatus(500)
    }
}


exports.deletePost = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedPost = await Post.destroy({ where: { id: id } });
        res.status(201).send(deletedPost)

    } catch (error) {
        res.sendStatus(500)
    }

}