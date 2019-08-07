// Downloaded Modules
const { GraphQLServer } = require('graphql-yoga')
const mongoose = require("mongoose")

// Custom Modules
const { typeDefs } = require('./custom_modules/typeDefs.js')
const { resolvers } = require('./custom_modules/resolvers.js')

// Mongo DB Port Connection
mongoose.connect("mongodb://localhost:27017/tasks", { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);


// Query Language Setup
const server = new GraphQLServer({ typeDefs, resolvers })

// GraphQL Port Options
const options = {
	port: 2345,
	endpoint: '/'
}

// GraphQL Port Connection
mongoose.connection.once("open", () => {
	server.start(options, ({ port }) => {
		console.log(
			`"To Do" service listening on port ${port} for incoming requests`
		)
	})
})

