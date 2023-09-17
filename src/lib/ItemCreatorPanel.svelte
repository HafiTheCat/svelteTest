<script lang="ts">
  import NotePreview from "./Note_Preview.svelte";
  import OptBar from "./OptBar.svelte";

  let visible = false;
  function makeCreatorPanelInvisible() {
    visible = false;
  }
  export function makeCreatorPanelVisible() {
    visible = true;
  }
  let note_component;
</script>

{#if visible}
  <div id="background">
    <div id="main-flex">
      <NotePreview bind:this={note_component} />
      <div class="row-flex">
        <OptBar
          on:action.cancel={makeCreatorPanelInvisible}
          on:action.apply={note_component.packData()}
        />
      </div>
    </div>
  </div>
{/if}
<!-- 
<!-- <div class="flexerizer"> -->

<!-- <div>
      <h1>Create Your own PostIt</h1>
    </div>
    <div id="options">
      <h1>Create Your own PostIt</h1>
      <div />
      <div>
        <span>text</span>
        <input type="checkbox" />
        <input type="text" />

        <textarea />
      </div>
      </div>
    </div> -->

<!-- <div id="subhead">
      <h1>Create Your own PostIt</h1>
      <button type="button" on:click={makeCreatorPanelInvisible}> X </button>
    </div>
    <div id="options">
      <input type="text" />
      <input type="checkbox" />
      <span>Title</span>
    </div>
    <div id="options">
      <input type="text" />
      <input type="checkbox" />
      <span>Opt1</span>
    </div>
    <div id="options">
      <input type="text" />
      <input type="checkbox" />
      <span>Opt2</span>
    </div>
    <textarea /> -->
<style>
  #background {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    color: rgb(112, 110, 112);
    display: flex;
    flex-direction: column;
    /* rgba(53, 52, 53, 0.5); */
    /* visibility: hidden; */
  }
  #main-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .row-flex {
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  #subhead {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  #options {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .centerizer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  /* .flexerizer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direc
  } */
  #XBtn {
  }

  textarea {
    resize: none;
  }
</style>
