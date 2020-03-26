<script>
  export let character;
  const icons = {
    " ": "fas fa-redo",
    "→": "fas fa-arrow-alt-right",
    "←": "fas fa-arrow-alt-left",
    "0": "far fa-circle",
    "1": "fas fa-",
    "*": "fab fa-superpowers",
    U: "fas fa-arrow-up",
    D: "fas fa-arrow-down",
    Q: "fas fa-",
    W: "fas fa-",
    E: "fas fa-",
    A: "fas fa-",
    S: "fas fa-",
    D: "fas fa-",
    R: "fas fa-redo"
  };

  $: iconClass = icons[character];
</script>

<span>
  {character}→{iconClass}→<i class={iconClass}></i><br/>
  <i class="fas fa-redo"></i>
</span>
