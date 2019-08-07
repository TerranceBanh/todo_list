//Make into a search and input field
import React from 'react'

const InputField = ({
//Parameters
	accept = null,
	autoComplete = 'on',
	autoFocus = false,
	maxLength = null,
	min = null,
	onChange = () => {},
	onKeyDown = () => {},
}) => (
	<input
//Attributes
		type="text"
		accept={accept}
		autoComplete={autoComplete}
		autoFocus={autoFocus}
		maxLength={maxLength}
		min={min}
		onChange={onChange}
		onKeyDown={onKeyDown}
	>
	</input>
)

export default InputField
