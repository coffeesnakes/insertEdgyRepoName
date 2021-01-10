import React from 'react';
import Entry from './Entry.jsx';

const List = ({films}) => (
  <ul className="listed">
    {films.map((film, i)=>( <Entry film={film} key={i}/>))}
  </ul>
)
export default List;