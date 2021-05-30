// const axios = require('axios');
const Post = require('../models/Post');

exports.getIndex = (req, res) => {
    Post.find({})
    .sort('-createdAt')
    .exec(function(err, posts){
        if(err) return res.json(err);
        res.render('posts/index', {posts:posts});
    });

}