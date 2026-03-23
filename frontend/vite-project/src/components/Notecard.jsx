import React from 'react';

function Notecard({ title, content }) {
  return (
    <div className="notecard">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}