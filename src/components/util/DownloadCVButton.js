import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

import './download-cv-button.scss';

const DownloadCVButton = props => {
   const hover = `down-button ${props.hover}`;
   const style = {
      position: props.absolute ? 'absolute' : 'relative',
      top: props.top,
      right: props.right,
      bottom: props.bottom,
      left: props.left,
      color: props.color,
      border: `2px solid ${props.color ? props.color : 'white'}`,
      width: props.width ? props.width : '15rem',
      height: props.height ? props.height : '3rem',
      zIndex: 3
   }

   return (
      <a href={process.env.PUBLIC_URL + '/Bruno_Lima_Resume.pdf'} target="_blank" rel="noopener noreferrer" className={hover} style={style}>
         <span><FaFileDownload /></span>
         <span>Download CV</span>
      </a>
   )
}

export default DownloadCVButton
