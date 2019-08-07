import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import Checkbox from './Components/Checkbox.js'
import Button from './Components/Button.js'
import InputField from './Components/InputField.js'


const QUERY_TASKS = gql`{
	tasks {
		id
		task
		complete
	}
}`

const CREATE_TASK = gql`
	mutation CreateTask($task: String!){
		createTask(task: $task) {
			id
			task
			complete
		}
	}
`

const COMPLETE_TASK = gql`
	mutation CompleteTask($id: ID!, $complete: Boolean!){
		completeTask(id: $id, complete: $complete) {
			id
			task
			complete
		}
	}
`

const REMOVE_TASK = gql `
	mutation RemoveTask($id: ID!){
		removeTask(id: $id)
	}
`

const App = () => {
	const [taskInput, setTaskInput] = useState('')
	return (
		<div>
			<Query query={QUERY_TASKS} >
				{({loading, error, data}) => { //Data
					if (loading) {return (<span>Loading...</span>)}
					if (error) {return error}
					return (

						//Checkbox Component
						Checkbox.list({
							prepend: (
								<Mutation mutation={CREATE_TASK}>
									{(createTask, {loading, error}) => (
										InputField({
											autoFocus: true,
											onKeyDown: async (e) => {
												const keySet = [
													3, 8, 9, 12, 13, 16, 17, 18, 19, 20,
													21, 25, 27, 28, 29, 33, 34, 35, 36, 37,
													38, 39, 40, 41, 42, 43, 44, 45, 47, 46,
													91, 92, 93, 95, 112, 113, 114, 115, 116, 117,
													118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
													128, 129, 130, 131, 132, 133, 134, 135, 144, 145,
													166, 167, 168, 169, 172, 173, 174, 175, 176, 177,
													178, 179, 180, 181, 182, 183, 186, 224, 230, 233,
													234, 235, 240, 242, 243, 244, 251, 255,
												]

												let wrongKey = false
												for (let value of keySet) {
													if (e.keyCode === value) {
														wrongKey = true
													}
												}

												if (!wrongKey) {
														setTaskInput(taskInput + e.key)
														console.log('passed')
												}

												if (e.key === 'Backspace') {
													let taskInputTemp = taskInput.split('')
													taskInputTemp.pop()
													taskInputTemp = taskInputTemp.join('')
													setTaskInput(taskInputTemp)
												}

												if (e.keyCode === 32) {
													setTaskInput(taskInput + ' ')
												}

												if (e.key === 'Enter' && taskInput !== '') {
													await createTask({ variables: { task: taskInput }})
													await setTaskInput('')
													await window.location.reload()
												}
											},
										})
									)}
								</Mutation>
							),
							title: 'Tasks',
							checkboxElements: [...data.tasks.map((task) => (
								<Mutation mutation={COMPLETE_TASK} key={task.id}>
									{(completeTask, {loading, error}) => (
										Checkbox.item({
											key: task.id,
											item: task.task,
											checked: task.complete,
											onClick: () => { //Updates boolean data to database
												completeTask({ variables: {id: task.id, complete: task.complete === true ? false : true}})
											},
											append: (() => {
												return (
													<Mutation mutation={REMOVE_TASK} key={task.id}>
														{(removeTask, {loading, error}) => (
															Button({
																name: 'Delete',
																onClick: async () => {//Removes data from database
																	await removeTask({ variables: {id: task.id}})
																	await window.location.reload() //Temporarily in place for reloading element
																} ,
															})
														)}
													</Mutation>
												)
											})()
										})
									)}
								</Mutation>
							))],
						})
					)
				}}
			</Query>
		</div>
	)
}

export default App
