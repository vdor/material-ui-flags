'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="la-a">
          <path fill-opacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#la-a)">
        <path fill="#ce1126" d="M-40 0h720v480H-40z" />
        <path fill="#002868" d="M-40 119.3h720v241.4H-40z" />
        <path fill="#fff" d="M423.4 240a103.4 103.4 0 11-206.8 0 103.4 103.4 0 11206.8 0z" />
      </g>
    </SvgIcon>
  )
}

