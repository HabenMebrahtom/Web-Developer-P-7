const Post = require('../models/post');
const Comment = require('../models/comment');

//get a single post
exports.getSinglePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({
            include: [{
            model: Comment,
            as: 'comment'
        }], where: { id: id } });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//get all posts

exports.getAllPosts = async(req, res) => {
    try {
        const post = await Post.findAll({
            include: [{
                model: Comment,
                as: 'comment'
            }],
        });
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//create a new post
exports.createPost = async (req, res) => {
    const { title, content, userId, isRead } = req.body;
    const url = req.protocol + '://' + 'localhost:4000';

    try {
        if (req.file) {
            const post = new Post({
            title: title,
            content: content,
            imageUrl: url + '/images/' + req.file.filename,
            userId: userId,
            isRead: isRead
            });
        const newPost = await post.save();
         res.status(201).send(newPost);
        } else {
          const post = new Post({
            title: title,
            content: content,
            userId: userId,
            isRead: isRead
        });
        const newPost = await post.save();
        res.status(201).send(newPost);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

//updating a post
exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, imageUrl, isRead } = req.body;
    let post = new Post({ where: { id: req.params.id } });

    if (req.file) {
        const url = req.protocol + '://' + 'localhost:4000';
        post = {
           id: id,
           title: title,
           content: content,
           imageUrl: url + '/images/' + req.file.filename,
           isRead: isRead
        }
    } else {
        post = {
            id: id,
            title: title,
            content: content,
            imageUrl: imageUrl,
            isRead: isRead
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

//delete a post
exports.deletePost = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedPost = await Post.destroy({
            where: { id: id }
        });
        res.status(200).json(deletedPost)

    } catch (error) {
        res.status(500).send(error.message)
    }

}
