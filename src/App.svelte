<script lang="ts">
	import logo from "./assets/svelte.png";
	import Counter from "./lib/Counter.svelte";
	import Test from "./lib/Test.svelte";
	import Item from "./lib/Item.svelte";
	import Btn_Add from "./lib/Btn_Add.svelte";
	import Creator from "./lib/Creator.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import Inventory from "./lib/Inventory.svelte";
	import ItemCreatorPanel from "./lib/ItemCreatorPanel.svelte";
	let visibilityComponent;
</script>

<main>
	<ItemCreatorPanel bind:this={visibilityComponent} />
	<Inventory on:event.openPanel={visibilityComponent.makeCreatorPanelVisible()} />
	<Navbar />
	<div style="background-color:red;" />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	:global(body) {
		margin: 0;
		overflow: hidden;
	}

	main {
		text-align: center;
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 50px;
	}

	img {
		height: 16rem;
		width: 16rem;
	}

	h1 {
		color: #02af52;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 1rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
