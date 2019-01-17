//程序入口,首页
import React from 'react';
import ReactDOM from 'react-dom';
//all in js
import Todolist from './TodoList';
//PWA progressive web application 理念是通过写网页的形式来写手机的app应用
//https协议的服务器上 
// import * as serviceWorker from './serviceWorker';

//jsx语法(一定要引入React)
ReactDOM.render(<Todolist />, document.getElementById('root'));
