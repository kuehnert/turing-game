import { readable, writable, derived } from "svelte/store";

export const problems = writable([]);
export const index = writable(0);

// problems.subscribe(v => console.log("v", JSON.stringify(v, null, 4)));

export const currentProblem = derived([index, problems], ([$index, $problems]) => {
  if ($problems != null) {
    return $problems[$index - 1];
  }
});
