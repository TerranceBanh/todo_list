const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
	task: String,
	complete: Boolean
})

module.exports = { Task }
