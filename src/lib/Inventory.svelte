<script lang="ts">
  import Item from "./Item.svelte";
  import ItemCreate from "./ItemCreate.svelte";
  let center_div_size = 0;
  $: adjusted_center_div_size = Math.floor(center_div_size / 220) * 220 - 20;
</script>

<div class="centerizer" bind:clientWidth={center_div_size}>
  <div class="flexerizer" style="width:{adjusted_center_div_size}px">
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <Item id={1} name={"test"} amount={3} />
    <Item id={2} name={"test2"} amount={4} />
    <Item id={3} name={"test3"} amount={1} />
    <ItemCreate on:event.openPanel />
  </div>
</div>

<style>
  .centerizer {
    display: flex;
    justify-content: center;
    overflow-y: auto;
    background-color: #272627;
  }

  .flexerizer {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    flex-direction: row;
    align-content: flex-start;
    height: fit-content;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #212021;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
