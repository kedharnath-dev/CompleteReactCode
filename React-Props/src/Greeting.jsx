import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Good Afternoon  {props.name} !</h2>
      <h2>{props.name}'s age is {props.age1}!</h2>
      <h2>{props.name}'s skill is {props.items}</h2>
      <ul>
        {props.items.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
