import React, { useRef, useEffect, useState } from 'react';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript, SiTypescript, SiNextDotJs } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';


import './skill.scss'

const Skill = ({ skill, image, bgColor, icon, iconColor, fontSize, isLast, level }) => {

   const container = useRef();
   const [animationClass, setAnimationClass] = useState('');

   useEffect(() => {
      document.addEventListener('scroll', scrollEventFunction);
   }, []);

   function scrollEventFunction() {
      const clientRect = container.current.getBoundingClientRect();
      const viewportEnd = window.innerHeight || document.documentElement.clientHeight;
      if (clientRect.top >= 0 && clientRect.top <= viewportEnd) {
         setAnimationClass('fill-blank-anim');
         document.removeEventListener('scroll', scrollEventFunction);
      }
   }

   function getIcon() {
      switch (icon) {
         case 'css':
            return <SiCss3 />
         case 'html':
            return <SiHtml5 />;
         case 'js':
            return <SiJavascript />
         case 'nosql':
            return <FaDatabase />;
         case 'react':
            return <FaReact />;
         case 'git':
            return <DiGit />;
         case 'ts':
            return <SiTypescript />;
         case 'nextjs':
            return <SiNextDotJs />
         default:
            console.error('getIcon() should not get to default!');
            return null;
      }
   }

   return (
      <div ref={container} className='dv-skill-container d-flex' style={isLast ? { marginBottom: 0 } : {}}>
         <div
            className='dv-s-image d-flex justify-content-center align-items-center'
            style={image ? { backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' } : { backgroundColor: bgColor }}
         >
            {icon && <div style={{ color: iconColor, fontSize, transform: 'translateY(-4px) translatex(-4px)' }}>{getIcon()}</div>}
            <div className='dv-s-shadow' style={level ? {} : { background: 'linear-gradient(to left, white, rgba(255,255,255, 0))' }}></div>
         </div>
         <div className='dv-s-skill d-flex justify-content-center align-items-center'>
            <div className={`dv-skill-pc ${animationClass}`} style={{ width: level }}></div>
            <h4>{skill}</h4>
         </div>
      </div>
   )
}

export default Skill