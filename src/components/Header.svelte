<script>
  import { fade, slide } from 'svelte/transition';

  let isMenuVisible = false;
  console.log("1");
</script>

<header class="flex flex-col py-4 md:hidden">
  <div class="flex flex-row items-center px-6">
    <div class="absolute inset-x-0 flex justify-center">
      <a class="text-center text-2xl" href="">SEALNEXT</a>
    </div>
    <button class="ml-auto z-10" on:click={() => {console.log("1"); isMenuVisible = !isMenuVisible;}}>B</button>
  </div>
  {#if isMenuVisible}
    <div class="transition-all shadow-md py-6" transition:slide={{duration: 500}}>
      <div class="gap-y-4 flex flex-col" transition:fade={{duration: 500}}>
        <a class="text-center text-lg" href="">About</a>
        <a class="text-center text-lg" href="">Reviews</a>
        <a class="text-center text-lg" href="">Services</a>
      </div>
    </div>
  {/if}
</header>

<!-- <header class="flex md:max-lg:justify-between items-center px-20 max-lg:px-12 max-md:px-6 py-4 shadow-md">
  <div class="absolute inset-x-0 flex justify-center sm:hidden">
    <a class="text-center text-2xl" href="">SEALNEXT</a>
  </div>
  <div class="flex flex-grow justify-start max-sm:hidden">
    <a class="text-center text-2xl" href="">SEALNEXT</a>
  </div>
  <button class="ml-auto sm:hidden" />
  <div class="">
    <a>About</a>
    <a>Reviews</a>
    <a>Services</a>
    <div class="text-base flex flex-col">
      <a><span class="" />(+40) 755-312-170</a>
      <a><span class="" />contact@sealnext.com</a>
    </div>
  </div>
  <div class="flex items-center gap-8 max-lg:gap-6 max-md:gap-4 max-sm:hidden text-lg max-lg:hidden">
    <a>About</a>
    <a>Reviews</a>
    <a>Services</a>
    <div class="text-base flex flex-col">
      <a><span class="" />(+40) 755-312-170</a>
      <a><span class="" />contact@sealnext.com</a>
    </div>
  </div>
</header> -->
