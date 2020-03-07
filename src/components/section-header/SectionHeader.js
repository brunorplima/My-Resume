import React from 'react';

import './section-header.scss';

const SectionHeader = props => {
   return (
      <div className="sh-container d-flex justify-content-center p-4">
         <h2>{props.title.toUpperCase()}</h2>         
      </div>
   )
}

export default SectionHeader
