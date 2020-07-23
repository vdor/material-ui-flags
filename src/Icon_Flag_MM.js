'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <defs>
        <path id="a" fill="#fff" d="M0-.5l.2.5h-.4z" transform="scale(8.844)" />
        <g id="b">
          <use width="18" height="12" transform="rotate(-144)" xlinkHref="#a" />
          <use width="18" height="12" transform="rotate(-72)" xlinkHref="#a" />
          <use width="18" height="12" xlinkHref="#a" />
          <use width="18" height="12" transform="rotate(72)" xlinkHref="#a" />
          <use width="18" height="12" transform="rotate(144)" xlinkHref="#a" />
        </g>
      </defs>
      <path fill="#fecb00" d="M0-.1h640V160H0z" />
      <path fill="#ea2839" d="M0 320h640v160H0z" />
      <path fill="#34b233" d="M0 160h640v160H0z" />
      <use width="18" height="12" x="9" y="6.4" transform="matrix(40 0 0 40 -40 0)" xlinkHref="#b" />
    </SvgIcon>
  )
}

