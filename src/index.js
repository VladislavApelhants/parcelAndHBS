import Handlebars from "handlebars";
console.log("😎 ~ Handlebars:", Handlebars);
import temlate from './templates/template.hbs'
const showBlock = document.querySelector('#infotest')
console.log("😎 ~ temlate:", temlate({ title: "My New Post", body: "This is my first post!" }));
showBlock.insertAdjacentHTML('beforeend', temlate({ title: "My New Post", body: "This is my first post!" }))