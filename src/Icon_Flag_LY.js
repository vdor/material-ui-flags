'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="ly-a">
          <path d="M166.7-20h666.6v500H166.7z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ly-a)" transform="matrix(.96 0 0 .96 -160 19.2)">
        <path fill="#239e46" d="M0-20h1000v500H0z" />
        <path d="M0-20h1000v375H0z" />
        <path fill="#e70013" d="M0-20h1000v125H0z" />
        <path fill="#fff" d="M544.2 185.8a54.3 54.3 0 100 88.4 62.5 62.5 0 110-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z" />
      </g>
    </SvgIcon>
  )
}

