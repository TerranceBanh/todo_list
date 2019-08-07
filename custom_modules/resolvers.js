const { Task } = require('./models.js')

exports.resolvers = {
	Query: {
		tasks: () => Task.find(),
	},

	Mutation: {
		createTask: async (_, { task }) => {
			const taskItem = new Task({ task, complete: false})
			await taskItem.save()
			return taskItem
		},
		completeTask: async(_, { id, task, complete }) => {
			await Task.findByIdAndUpdate(id, { complete })
			return Task.findById(id)
		},
		removeTask: async(_, { id }) => {
			await Task.findByIdAndRemove(id)
			return "Deleted"
		}
	}
}
