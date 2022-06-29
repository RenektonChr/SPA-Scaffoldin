// 引入Vue
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');

console.log('hello world');

import './less/demo.less';
import './css/demo.css';
import { sum } from './math/sum';

const divElement = document.createElement('div');
const boxElement = document.createElement('div');
const iEl = document.createElement('i');

boxElement.className = 'box';
iEl.className = 'iconfont';
iEl.innerHTML = '&#xe603;';

divElement.innerHTML = '<h1>Hello World</h1>';

console.log('sum', sum(1, 2));

document.body.appendChild(divElement);
document.body.appendChild(boxElement);
document.body.appendChild(iEl);
