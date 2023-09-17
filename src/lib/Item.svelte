<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { fly } from "svelte/transition";
  import svg_pencil from "./../assets/Pencil.svg";
  import ItemOpt from "./Item_opt.svelte";
  export let id: number = null;
  export let name: string = "Item_Name";
  export let amount: number = null;

  let div;
  let pencil_visible = false;
  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
  function makePencilVisible() {
    pencil_visible = true;
  }

  export function curl_up(element) {
    element.style.transition = "backgroundImage 3s";
    element.style.backgroundImage =
      "linear-gradient(172.41deg, #02AF52 79.15%, #00FB74 79.15%, #1D5B3A 85.18%, #272627 88.06%)";
    // "linear-gradient(166deg,#02af52 71.36%,#00fb74 71.36%,#1d5b3a 78.4%,#272627 85.3%)";
    // setTimeout(() => {
    //   element.style.transition = "backgroundImage 1s, background 1s";
    //   element.style.backgroundImage = "";
    // });
  }

  export function curl_down(element) {
    requestAnimationFrame(() => {
      element.style.transition = "backgroundImage 3s";
      element.style.backgroundImage = "";
    });
  }
  function remove() {
    console.log("removed");
  }
</script>

<div on:mouseover={makePencilVisible}>
  <span>{id}</span>
  <h1>{name}</h1>
  <span>{amount}</span>
  <ItemOpt />
  <!-- <button on:click={() => remove()}>remove</button> -->
</div>

<style>
  div {
    width: 200px;
    height: 200px;
    background-color: #02af52;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1); */
  }

  button {
    position: relative;
    top: 20px;
    right: -80px;
    width: 1em;
    height: 1em;
    background: no-repeat 50% 50%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23F43A4C' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.4em 1.4em;
    border: none;
    opacity: 0;
    transition: opacity 0.1s backgroundImage 3s;
    text-indent: -9999px;
    cursor: pointer;
  }

  div:hover {
  }

  div:hover > button {
    opacity: 1;
  }
</style>
