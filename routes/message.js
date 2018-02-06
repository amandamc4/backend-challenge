var express = require('express');
var router = express.Router();
var Conversation = require('../models/conversation');

router.post('/', function (req, res, next) {   
    var today = new Date();

    console.log(today);
   
    var message = {
        sender: req.body.sender,
        message: req.body.message,
        created: today
    };
    console.log(req.body.conversation_id);
    Conversation.findById(req.body.conversation_id, function (err, conv){
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(conv) {
            conv.messages.push(message);
            conv.save();
        }
        else{
            var newConversation = new Conversation();
            newConversation.messages.push(message);
            newConversation.save();
        }  
        res.status(201).json({
            message: 'Message Created'
        });
    });
        
});

module.exports = router;