const showBlock = document.querySelector('#infotest')

import template from './templates/template.hbs'
console.log("😎 ~ template:", template);


showBlock.insertAdjacentHTML('beforeend', template({ title: "My New Post", body: "This is my first post!" }))