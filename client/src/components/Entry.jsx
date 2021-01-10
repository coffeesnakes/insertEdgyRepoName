import React from 'react';

const Entry = ({film}) => {
  const { title, description, director, producer} = film;
  console.log(film);
  return (
  <li>
    <div>TITLE:  {title}</div>
    <div>DESCRIPTION:  {description}</div>
    <div>DIRECTOR:  {director}</div>
    <div>PRODUCER: {producer}</div>
    <br/>
  </li>
  )};

export default Entry;
