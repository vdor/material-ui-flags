'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs id="defs448">
        <clipPath id="bh-a">
          <path id="path445" fill-opacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <path id="path1077" fill="#fff" stroke-width="4.8" d="M0 0h640v480H0" opacity="1" stop-opacity="1" />
      <path id="path1079" fill="#ce1126" stroke-width="5.1" d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544" opacity="1" stop-opacity="1" />
    </SvgIcon>
  )
}

