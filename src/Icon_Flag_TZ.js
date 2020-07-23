'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="tz-a">
          <path fill-opacity=".7" d="M10 0h160v120H10z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#tz-a)" transform="matrix(4 0 0 4 -40 0)">
        <path fill="#09f" d="M0 0h180v120H0z" />
        <path fill="#090" d="M0 0h180L0 120V0z" />
        <path d="M0 120h40l140-95V0h-40L0 95v25z" />
        <path fill="#ff0" d="M0 91.5L137.2 0h13.5L0 100.5v-9zM29.3 120L180 19.5v9L42.8 120H29.3z" />
      </g>
    </SvgIcon>
  )
}

