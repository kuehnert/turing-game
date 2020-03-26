<script>
  import Command from "./Command.svelte";

  export let field;
  $: commands = field.split(",");
</script>

<style>
  .tape {
    font-family: "Courier New", Courier, monospace;
    font-size: 5rem;
  }
</style>

<div class="tape">
  {#each commands as commandRow}
    <div>
      {#each commandRow as command}
        <Command character={command} />
      {/each}
    </div>
  {/each}
</div>
