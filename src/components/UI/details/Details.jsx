import React from 'react';
import "./Details.css";

export default function Details({summary, children}) {
  return (
    <details className='details'>
        <summary className='product-heading link'>{summary}</summary>
        {children}
    </details>
  )
}