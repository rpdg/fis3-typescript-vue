<style lang="scss" scoped>
	h1{
		&.app{
			font-size: 26px;
			text-align: center;
		}
	}
</style>


<template>
	<h1 class="app" @click="hello">hello world</h1>
</template>


<script lang="typescript">
	import Vue, { ComponentOptions } from 'vue';
	let App = {
		methods: {
			// type annotation!
			hello(): void {
				alert('hello world')
			}
		}
	} as ComponentOptions<Vue>;
	export default App ;
</script>