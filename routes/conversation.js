var express = require('express');
var router = express.Router();
var Conversation = require('../models/conversation');

router.get('/:id', function(req, res, next){
    Conversation.findById(req.params.id, function(err, conversation) {
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: conversation
        });
    });
});

module.exports = router;