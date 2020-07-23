'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M318.9 42l162.7 395.3-322.6.9L318.9 42z" />
        <path d="M319 96.5l140.8 340-279 .8L319 96.5z" />
        <path fill="#ffce00" d="M318.9 240.1l162.7 197.6-322.6.5 159.9-198.1z" />
      </g>
    </SvgIcon>
  )
}

