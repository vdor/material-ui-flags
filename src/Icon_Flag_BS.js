'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="bs-a">
          <path fill-opacity=".7" d="M-12 0h640v480H-12z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#bs-a)" transform="translate(12)">
        <path fill="#fff" d="M968.5 480h-979V1.8h979z" />
        <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
        <path fill="#08ced6" d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z" />
        <path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z" />
      </g>
    </SvgIcon>
  )
}

