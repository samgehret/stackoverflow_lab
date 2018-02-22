const express = require('express')
const router = express.Router()

const Question = require('../models/Questions')

router.get('/', (req,res)=>{
    Question.find({})
        .then(questions => {
            res.render('questions/index',{questions})
        })
})

module.exports = router