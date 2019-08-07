import React from 'react'
import deleteSpace from './deleteSpace'
import cap1stLetter from './cap1stLetter.js'

const Checkbox = {
	item: ({
		//Function Parameters
		key = '',
		item = '',
		checked = false,
		onClick = () => '',
		css = '',
		append = null,
		prepend = null,
	}) => {
		//Function Programming
  	return (
    	<div
				key={key}
				className={css.div}
			>
				{prepend}

    	  <input
					name={deleteSpace(item)}
					id={key}
					type="checkbox"
					defaultChecked={checked}
					onClick={onClick}
					className={css.input}
				/>

    	  <label
					htmlFor={key}
					className={css.label}
				>
				{item}
				</label>

				{append}

    	</div>
  	)
	},

	list: ({
		//Function Parameters
		title = '',
		checkboxElements = [],
		css = '',
		append = null,
		prepend = null,
	}) => {
		//Function Programming
  	return (
  	  <fieldset
				className={css.fieldset}
			>

				{prepend}

  	    <legend
					className={css.legend}
				>
					{cap1stLetter(title)}
				</legend>

  	    {checkboxElements.map(item => item)}

				{append}

  	  </fieldset>
  	)
	}
}

export default Checkbox
