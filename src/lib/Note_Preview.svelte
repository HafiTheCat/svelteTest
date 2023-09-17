<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let text: string = "What do you want to remember?";
  let title: string = "Optional Title";

  export function packData() {
    console.log("thing");
    // dispatch("event.packedData",{
    //   text: {text},
    //   title: if ({title} === "" || title.match("/^ */")||) ? null : {title};
    // });
  }
</script>

<div>
  <input
    bind:value={title}
    on:focus={() => {
      title = title === "" || title === "Optional Title" ? "" : title;
    }}
    on:blur={() => {
      title =
        title === "" || title.match(/^(\t| )+ */g) ? "Optional Title" : title;
    }}
  />
  <input
    bind:value={text}
    on:focus={() => {
      title =
        title === "" || title === "What do you want to remember?" ? "" : title;
    }}
    on:blur={() => {
      title = title === "" ? "What do you want to remember?" : title;
    }}
  />
</div>

<style>
  div {
    width: 600px;
    height: 600px;
    background-color: #02af52;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
