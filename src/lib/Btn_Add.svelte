<script lang="ts">
  let h = 10;
  const addPanelActivate = () => {
    // creator_panel_state.update((n) => !n);
  };
</script>

<button bind:clientHeight={h} style="width:{h}px">
  <strong>+</strong>
</button>

<style>
  strong {
    font-size: 2em;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    /* padding: 1em 2em; */
    color: #02af52;
    /* background-color: rgba(2, 175, 83, 0.097); */
    background-color: blue;
    border-radius: 2em;
    border: 2px solid rgba(2, 175, 83, 0);
    outline: none;
    height: 100%;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover {
    border: 2px solid #02af52;
  }

  button:active {
    background-color: rgba(2, 175, 83, 0.08);
  }
</style>
