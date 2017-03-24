<style lang="scss" scoped>
	h1{
		&.app{
			font-size: 26px;
			text-align: center;
		}
	}
</style>


<template>
	<h1 class="app" @click="sayHello">hello world</h1>
</template>


<script lang="ts">
	import Vue, { ComponentOptions } from 'vue';
	let App = {
		methods: {
			sayHello(): void {
				alert('hello world')
			}
		}
	} as ComponentOptions<Vue>;
	export default App ;
</script>