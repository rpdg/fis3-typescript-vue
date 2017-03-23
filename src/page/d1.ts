declare let require: Function;
declare let Vue :any;

import App from './app.vue';

new Vue({
	el: '#app',
	components: { App },
	render: h => h('app')
});
