import React from 'react';

const Button = ({color, text, onClick}) => {
  return (
    <div>
      <button className="btn" style={{backgroundColor: color}} onClick={onClick}>
      {text}
      </button>
    </div>
  )
}

export default Button
