import Vue from 'vue'
import App from './app.vue';
console.log(Vue);

new Vue({
	el: '#app',
	components: { App },
	render: h => h('app')
});
