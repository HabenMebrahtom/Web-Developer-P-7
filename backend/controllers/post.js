const Post = require('../models/post');


exports.getSinglePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({ where: { id: id } });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getAllPosts = async(req, res) => {
    try {
        const post = await Post.findAll();
        res.status(200).json(post)
    } catch (error) {
        res.status(404).send(error.message);
    }
}


exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const url = req.protocol + '://' + 'localhost:4000';

    try {
        const post = new Post({
            title: title,
            content: content,
            imageUrl : url + '/images/' + req.file.filename
        });
        const newPost = await post.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, imageUrl } = req.body;
    let post = new Post({ where: { id: req.params.id } });

    if (req.file) {
        const url = req.protocol + '://' + 'localhost:4000';
        post = {
           id: id,
           title: title,
           content: content,
           imageUrl: url + '/images/' + req.file.filename
        }
    } else {
        post = {
            id: id,
            title: title,
            content: content,
            imageUrl: imageUrl
         }
    }
    
    try {
        const updatedPost = await Post.update(post, { where: { id: id} });
        res.status(201).json(updatedPost);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);

    }
}


exports.deletePost = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedPost = await Post.destroy({ where: { id: id } });
        res.status(200).json(deletedPost)

    } catch (error) {
        res.status(500).send(error.message)
    }

}