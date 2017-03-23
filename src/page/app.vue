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
	let App = {
		methods: {
			// type annotation!
			hello(): void {
				alert('hello world')
			}
		}
	};
	export default App;
</script>