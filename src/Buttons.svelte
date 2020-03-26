<script>
  import blank from "./svg/blank.svg";
  import erase from "./svg/erase.svg";
  import left from "./svg/left.svg";
  import one from "./svg/one.svg";
  import pop_blank from "./svg/pop_blank.svg";
  import pop_one from "./svg/pop_one.svg";
  import pop_zero from "./svg/pop_zero.svg";
  // import push_blank from "./svg/push_blank.svg";
  import push_zero from "./svg/push_zero.svg";
  import push_one from "./svg/push_one.svg";
  import repeat from "./svg/repeat.svg";
  import right from "./svg/right.svg";
  import zero from "./svg/zero.svg";
</script>

<style>
	.buttons {
		display: flex;
		font-display: row;
		border: 1px solid black;
	}
	.iconbutton {
		height: 3rem;
		width: 3rem;
	}
</style>

<div class="buttons">
  <div class="iconbutton">{@html blank}</div>
  <div class="iconbutton">{@html right}</div>
  <div class="iconbutton">{@html left}</div>
  <div class="iconbutton">{@html zero}</div>
  <div class="iconbutton">{@html one}</div>
  <div class="iconbutton">{@html erase}</div>
  <!-- <div class="iconbutton">{@html push_blank}</div> -->
  <div class="iconbutton">{@html push_zero}</div>
  <div class="iconbutton">{@html push_one}</div>
  <div class="iconbutton">{@html pop_blank}</div>
  <div class="iconbutton">{@html pop_zero}</div>
  <div class="iconbutton">{@html pop_one}</div>
  <div class="iconbutton">{@html repeat}</div>
</div>
