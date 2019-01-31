import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './api';								//第三方网络请求
import './mixin';							//mixin
import './plugin';							//第三方插件
import './style/index.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
