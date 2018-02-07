'use strict';

import gradientColor from '../src/index.js';

const colors = new gradientColor('#3399cc', '#3ECCCC', 50)

const _app = document.querySelector('#app')
const html = colors.map(c => {
    return `<div style="background-color: ${c}"></div>`
})

_app.innerHTML = html.join('')

