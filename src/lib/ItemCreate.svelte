<script lang="ts">
  import add_icon from "./../assets/Add_Postit_Btn.svg";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function openAddPanel() {
    dispatch("event.openPanel");
  }
</script>

<div on:click={openAddPanel}>
  <img src={add_icon} alt="Add PostIt" />
</div>

<style>
  div {
    width: 200px;
    height: 200px;
    background-color: #272627;
    outline-offset: -15px;
    outline-style: dashed;
    outline-width: 15px;
    outline-color: #3b3b3b;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  div:hover {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  div:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
</style>
