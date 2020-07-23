'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// SVG source:
// https://github.com/lipis/flag-icon-css/tree/master/flags/4x3

export default function (props) {
  return (
    <SvgIcon viewBox="0 0 640 480" {...props}>
      <path fill="#009543" stroke-width=".9" d="M0 0h640v480H0z" />
      <path fill="#ed4135" stroke-width=".9" d="M0 0h640v320H0z" />
      <path fill="#0035ad" stroke-width=".9" d="M0 0h640v160H0z" />
      <circle cx="240" cy="240" r="157.3" fill="#fae600" stroke="#000" stroke-width="5.3" />
      <path stroke="#000" stroke-width="6.4" d="M213.3 263.5h53.3M213.3 224h53.3M240 83.2V352" />
      <path stroke-width="1.1" d="M176.6 384.4c64.2 26.3 124.4 1.7 124.4 1.7s-22.7-24.6-34.3-34.2c-11.4-9.4-44.8-9-56.2 0a488.7 488.7 0 00-33.9 32.5z" />
      <ellipse cx="240" cy="312.5" stroke-width="1.1" rx="17.6" ry="25.6" />
      <ellipse cx="240" cy="243.7" stroke-width="1.1" rx="21.3" ry="13.5" />
      <circle cx="240" cy="181.3" r="21.3" stroke-width="1.1" />
      <path stroke-width="1.1" d="M265.6 101.9s1.8 3-2 10c-18.6 33.5-37.3 34.2-40.8 37.1-4 3.2-5.6 3-5.6 3 .3-2.9.5-14.6.7-15.7 2.9-15.7 26.5-15.5 45-31.5 2.9-2.5 2.7-3 2.7-3z" />
      <path d="M265.5 163s4 11.2 4.5 22.5c1 18 18.2 18.5 30 18.5v-10c-8.9 0-16.6-1.3-23-14.5a115 115 0 00-11.5-16.5zm-.5 145s6.3-7.8 13.7-26c3.8-9.5 13-15 21.3-15v-14c-19 0-28.2 7-29.1 17.4-2 21.1-5.9 37.6-5.9 37.6z" transform="translate(-80) scale(1.06667)" />
      <use width="100%" height="100%" transform="matrix(-1 0 0 1 480 0)" xlinkHref="#leaf" />
    </SvgIcon>
  )
}

