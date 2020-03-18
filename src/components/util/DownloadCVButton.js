import React from 'react'
import { FaFileDownload, FaDownload } from 'react-icons/fa'
import cv from '../../images/profile_image_cropped.jpg'

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

   const handleDownload = () => {

      console.log(props.color)
   }

   return (
      <a href="d" className={hover} style={style} onClick={e => handleDownload(e)} download={cv} content-type="image/jpeg">
         <span><FaFileDownload /></span>
         <span>Download CV</span>
      </a>
   )
}

export default DownloadCVButton
