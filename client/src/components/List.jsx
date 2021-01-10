import React from 'react';
import data from '../data.js';
import Entry from './Entry.jsx';

const List = () => (
  <ul className="list">
    {data.map(film=>( <Entry film={film}/>))}
  </ul>
)
export default List;