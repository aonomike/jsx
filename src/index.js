// import react and react dom libraries
import React from 'react'
import ReactDOM from 'react-dom'


//create a react component
const App =  () => {
    const buttonText = {'text': 'click me'}
    const labelText = "Enter name"
    return (
        <div>
        <label htmlFor="name" className="label">{labelText}</label>
        <input/>
        <button id="name" type="text" style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
    )
}

//take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);