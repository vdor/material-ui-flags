'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3


/*

The following piece of the flag causes a syntax error. It would be invisible in 20x20 anyway:

<g transform="matrix(3.2 0 0 3.2 320 240)">
   <circle r="20" fill="#008"/>
   <circle r="17.5" fill="#fff"/>
   <circle r="3.5" fill="#008"/>
   <g id="d">
     <g id="c">
        <g id="b">
           <g id="a" fill="#008">
             <circle r=".875" transform="rotate(7.5 -8.75 133.5)"/>
             <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z"/>
           </g>
           <use height="100%" width="100%" xlink:href="#a" transform="rotate(15)"/>
        </g>
        <use height="100%" width="100%" xlink:href="#b" transform="rotate(30)"/>
     </g>
     <use height="100%" width="100%" xlink:href="#c" transform="rotate(60)"/>
   </g>
   <use height="100%" width="100%" xlink:href="#d" transform="rotate(120)"/>
   <use height="100%" width="100%" xlink:href="#d" transform="rotate(-120)"/>
</g>

Possibly re-evaluate with React 15

*/

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#f93" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#128807" d="M0 320h640v160H0z" />
    </SvgIcon>
  )
}
