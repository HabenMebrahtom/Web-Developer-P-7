const Post = require('../models/post');
const Comment = require('../models/comment');
const UserPost = require('../models/userPost');


//get a single post
exports.getSinglePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({
            include: [{
                model: Comment,
                as: 'comment'
                }, {
                model: UserPost,
                as: 'userPost'
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
            }, {
                model: UserPost,
                as: 'userPost'
                }],
        });
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//create a new post
exports.createPost = async (req, res) => {
    const { title, content, userId, username } = req.body;
    const url = req.protocol + '://' + 'localhost:4000';
    console.log(username)

    try {
        if (req.file) {
            const post = new Post({
            title: title,
            content: content,
            imageUrl: url + '/images/' + req.file.filename,
            userId: userId,
            username: username,
            });
        const newPost = await post.save();
         res.status(201).send(newPost);
        } else {
          const post = new Post({
            title: title,
            content: content,
            userId: userId,
            username: username,
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
    const { title, content, imageUrl } = req.body;
    let post = new Post({ where: { id: req.params.id } });

    if (req.file) {
        const url = req.protocol + '://' + 'localhost:4000';
        post = {
           id: id,
           title: title,
           content: content,
           imageUrl: url + '/images/' + req.file.filename,
        }
    } else {
        post = {
            id: id,
            title: title,
            content: content,
            imageUrl: imageUrl,
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
