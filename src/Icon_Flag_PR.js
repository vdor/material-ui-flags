'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="pr-a">
          <path fill-opacity=".7" d="M-37.3 0h682.7v512H-37.3z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#pr-a)" transform="translate(35) scale(.9375)">
        <path fill="#ed0000" d="M-37.3 0h768v512h-768z" />
        <path fill="#fff" d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z" />
        <path fill="#0050f0" d="M-37.3 0l440.7 255.7L-37.3 511V0z" />
        <path fill="#fff" d="M156.4 325.5L109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z" />
      </g>
    </SvgIcon>
  )
}

