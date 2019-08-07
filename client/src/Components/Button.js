// Include button types in console log
// Add Class for styling
// Add onClick to help guide

import React from 'react'

const Button = ({name = null, onClick = () => '', type = 'button'}) => {
  const types = ['button', 'reset', 'submit']

  const logging = () => {
    console.log(
      `%cError: %cMissing Parameters%c

        %cQuick Refernce: %c(%cname%c, %ctype%c)%c

        %cShort Hand:%c
            %cButton%c(%c'reset'%c)%c
            %cButton%c(%c'submit'%c)%c

        %cThese are the following button types:
            %c[%cbutton%c, %creset%c, %csubmit%c]%c

        %cWhat are the parameters?%c
            %cThese are the following parameters: %cname%c,%c %ctype%c
            %cname%c: requires string data.%c
            %ctype%c: optional string data.%c

        %cWhat are the current data values?%c
            %cname%c: %c${name}%c
            %ctype%c: %c${type}%c

        %cWhat are the default values?%c
            %cname%c: %cnull%c
            %ctype%c: %cbutton%c`,

      // Title
      'color: red; font-size: 16px;',
      'color: black; font-size: 16px;', '',

      // Reference
      'color: black; font-size: 12px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      // Short Hand
      'color: black; font-size: 12px;', '',

      'color: darkorange; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: purple; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      'color: darkorange; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: purple; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      // Button Types
      'color: black; font-size: 12px;',
      'color: black; font-size: 10px;',
      'color: purple; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: purple; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: purple; font-size: 10px;',
      'color: black; font-size: 10px;', '',


      // What are the parameters
      'color: black; font-size: 12px;', '',

      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',
      'color: blue; font-size: 10px;', '',

      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      // What are the current data values?
      'color: black; font-size: 12px;', '',

      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',

      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',

      // What are the default values?
      'color: black; font-size: 12px;', '',

      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',

      'color: purple; font-size: 10px;', '',
      'color: blue; font-size: 10px;', '',
    )
  }

  // Checks for correct type variable
  for (let i = 0; i <= types.length; i++) {

    // Continues loop for each unmatched type
    if (type !== types[i] && i !== types.length) {continue}

    // Stops loop for matched type
    else if (type === types[i]) {break}

    // Renders a replacement element
    else {
      logging()
      return (
        <React.Fragment>
          <h1>Missing Component</h1>
        </React.Fragment>
      )
    }
  }

  // Checks for name variable
  if (name === null) {
    logging()
    return (
      <React.Fragment>
        <h1>Missing Component</h1>
      </React.Fragment>
    )
  }


  return <button type={type} onClick={onClick} id={name}>{name}</button>
}

export default Button
