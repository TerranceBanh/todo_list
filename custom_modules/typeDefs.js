const { Task } = require('./models.js')

exports.typeDefs =
`
	type Query {
		tasks: [Task]
	}
` +
`
	type Mutation {
		createTask(task: String!): Task
		completeTask(id: ID!, complete: Boolean!): Task
		removeTask(id: ID!): String
	}
` +

`
	type Task {
		id: ID!
		task: String!
		complete: Boolean!
	}
`
