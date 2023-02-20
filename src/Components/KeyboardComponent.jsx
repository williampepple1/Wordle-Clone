import React from 'react';

const KeyboardComponent = (props) => {
	const {
		callBackFunction
	} = props

	const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = [" ", "A", "S", "D", "F", "G", "H", "J", "K", "L", " "];
    const keys3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"];



const createKeyboard = (keys) => {
    return keys.map((key, index) => {
        if (key === "Enter") {
            return createButton(index, key, "submit", "btn-default btn-wide");
        }
        else if (key === "Del") {
            return createButton(index, key, "goback", "btn-default btn-wide");
        }
        else if (key === " ") {
            return <div key={index} className='col p-0 m-1'></div>
        }
        else {
            return createButton(index, key, key, "btn-default");
        }
    })
}

const createButton = (index, key, value, className) => {
    return (
        <div key={index} className='col p-0 m-1'>
            <button className={className} value={value} onClick={callBackFunction}>{key}</button>
        </div>
    )
}

	return (
		<div className="keyboard">
            <div className="row m-0"> { createKeyboard(keys1) } </div>
            <div className="row m-0"> { createKeyboard(keys2) } </div>
            <div className="row m-0 pb-2"> { createKeyboard(keys3) } </div>
        </div>
	)
}

export default KeyboardComponent