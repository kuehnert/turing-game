<script>
  export let value;
  export let inverse;
</script>

<style>
  .tape {
    font-family: "Courier New", Courier, monospace;
    font-size: 5rem;
  }
  .inverse {
    background: black;
    color: white;
  }
</style>

<div class="tape" class:inverse>
  {value}
</div>
