<script>
  import { onMount } from "svelte";
  import Buttons from "./Buttons.svelte";
  import NumberTape from "./NumberTape.svelte";
  import Field from "./Field.svelte";
  import { index, problems, currentProblem } from "./stores.js";

  let counter = 0;

  onMount(async () => {
    const response = await fetch("/problems.json");
    const data = await response.json();
    await problems.set(data);
    await index.set(1);
  });
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }

  header {
    border-bottom: 1px solid black;
    /* margin-bottom: 12px; */
  }

  footer {
    border-top: 1px solid black;
    padding-top: 12px;
    text-align: center;
  }
</style>

<main>
  <header>
    <h1>The Turing Game Online</h1>
  </header>

  {#if $currentProblem != null}
    <div>
      <h2>Problem No. {$index}, “{$currentProblem.name}”</h2>

      <div>
        <NumberTape value={$currentProblem.output} inverse={true} />
        <NumberTape value={$currentProblem.input} inverse={false} />

        <Field field={$currentProblem.field} />
        <Buttons />
      </div>
    </div>
  {:else}
    <div>Loading...</div>
  {/if}

  <footer>
    <div class="">
      This is a remake of the truly excellent but Flash-bassed
      <a href="http://snuke.main.jp/turing/en/game.php">
        http://snuke.main.jp/turing/en/game.php
      </a>
    </div>
  </footer>
</main>
