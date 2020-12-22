import React from 'react';

import './section-header.scss';

const SectionHeader = ({ id, title, color }) => {
   return (
      <div className="sh-container d-flex justify-content-center p-4" style={color ? {backgroundColor: color} : {}}>
         <div id={id} className='scroll-to'></div>
         <h2>{title.toUpperCase()}</h2>
      </div>
   )
}

export default SectionHeader
