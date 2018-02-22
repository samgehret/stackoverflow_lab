const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/stack_db')

mongoose.Promise = Promise

module.export = mongoose