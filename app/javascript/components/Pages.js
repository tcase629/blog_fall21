import React from 'react';

const url = "http://localhost:3000/pages/";

const Pages = ({ pages }) => (
  <>
    <h1>All Pages</h1>
    <a href={url + "new"}>Add Page</a>
    <ul>
      { pages.map( p => (
        <li key={p.id}>
          {p.title}
          {" "}{/* space for formatting */}
          <a href={url + p.id}>show</a>
        </li>
      ))}
    </ul>
  </>
)

export default Pages;