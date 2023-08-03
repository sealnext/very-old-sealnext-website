<script>
  import { fade, slide } from 'svelte/transition';

  let isMenuVisible = false;
</script>

<!-- PHONE -->
<header class="flex flex-col py-4 md:hidden">
  <div class="flex justify-between items-center px-6">
    <div class="invisible" />
    <a class="text-center text-2xl font-medium" href="">SEALNEXT</a>
    <button class="p-0 m-0" on:click={() => {isMenuVisible = !isMenuVisible;}}><span class="m-0 p-0 material-symbols-outlined">menu</span></button>
  </div>
  {#if isMenuVisible}
    <div class="transition-all shadow-md py-6" transition:slide={{duration: 500}}>
      <div class="gap-y-4 flex flex-col" transition:fade={{duration: 500}}>
        <a class="text-center text-lg font-normal" href="">About</a>
        <a class="text-center text-lg font-normal" href="">Reviews</a>
        <a class="text-center text-lg font-normal" href="">Services</a>
      </div>
    </div>
  {/if}
</header>

<!-- TABLET -->
<header class="flex py-4 justify-between items-center px-[5vw] max-md:hidden lg:hidden">
  <a class="text-2xl font-bold" href="">SEALNEXT</a>
  <a class="text-lg font-normal" href="">About</a>
  <a class="text-lg font-normal" href="">Reviews</a>
  <a class="text-lg font-normal" href="">Services</a>
  <div class="flex flex-col text-base">
    <a href=""><span class="" />(+40) 755-312-170</a>
    <a href=""><span class="" />contact@sealnext.com</a>
  </div>
</header>

<!-- DESKTOP -->
<header class="flex py-4 gap-8 items-center px-[5vw] max-lg:hidden">
  <a class="text-left text-2xl font-bold grow" href="">SEALNEXT</a>
  <a class="text-lg font-normal" href="">About</a>
  <a class="text-lg font-normal" href="">Reviews</a>
  <a class="text-lg font-normal" href="">Services</a>
  <div class="flex flex-col text-base">
    <a href=""><span class="" />(+40) 755-312-170</a>
    <a href=""><span class="" />contact@sealnext.com</a>
  </div>
</header>
