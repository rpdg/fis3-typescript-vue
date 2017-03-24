<style lang="scss" scoped>
	h1{
		&.appH{
			font-size: 26px;
			text-align: center;
		}
	}
</style>


<template>
	<h1 class="appH" @click="sayHello">{{ message }}</h1>
</template>


<script lang="ts">
	import Vue, { ComponentOptions }  from 'vue'
	import Component from 'vue-class-component'

	// Declare the component's type
	interface MyComponent extends Vue {
		message: string
		sayHello (): void
	}

	export default {
		data: function () {
			return {
				message: 'Hello!'
			}
		},
		methods: {
			sayHello: function () {
				// TypeScript knows that `this` is of type MyComponent
				// and that `this.message` will be a string
				window.alert(this.message)
			}
		}
		// We need to explicitly annotate the exported options object
		// with the MyComponent type
	} as ComponentOptions<MyComponent>
</script>