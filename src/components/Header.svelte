<script>
import {
    fade,
    slide
} from 'svelte/transition';

let isMenuVisible = false;
</script>

<!-- PHONE -->
<header class="flex flex-col py-4 mx-[1vw] sm:hidden">
  <div class="flex justify-between items-center px-4 relative">
    <div class="invisible" />
    <div class="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-16 w-full">
      <img alt="sealnext text logo" src="logo_text.svg" class="text-2xl w-52 font-semibold" href="#" />
    </div>
    <button class="p-0 m-0 flex items-center justify-center" on:click={() => {
      isMenuVisible = !isMenuVisible;
      }}>
      <span class:hidden={isMenuVisible} class="m-0 p-0 material-symbols-outlined">menu</span>
      <span class:hidden={!isMenuVisible} class="m-0 p-0 material-symbols-outlined">close</span>
    </button>
  </div>
  {#if isMenuVisible}
    <div class="transition-all pt-6 md:pt-12 lg:pt-20 pb-3" transition:slide={{duration: 200}}>
      <div class="gap-y-4 flex flex-col" transition:fade={{duration: 200}}>
        <a class="text-center text-lg font-normal" href="#reviews">Reviews</a>
        <a class="text-center text-lg font-normal" href="#services">Services</a>
      </div>
    </div>
  {/if}
</header>

<!-- TABLET -->
<header class="py-4 justify-between items-center mx-[5vw] hidden sm:flex lg:hidden">
  <img alt="sealnext text logo" src="logo_text.svg" class="text-2xl w-44 font-semibold" href="#" />
  <div class="flex space-x-4">
    <a class="text-lg font-normal" href="#reviews">Reviews</a>
    <a class="text-lg font-normal" href="#servicess">Services</a>
  </div>
  <div class="flex flex-col text-base">
    <a href="tel:+40755312170">+40 755 312 170</a>
    <a href="mailto:support@sealnext.com">support@sealnext.com</a>
  </div>
</header>

<!-- DESKTOP -->
<header class="py-4 gap-8 items-center mx-[5vw] hidden lg:flex">
  <div class="flex space-x-4 text-base items-center grow">
    <img alt="sealnext text logo" src="logo_text.svg" class="text-2xl w-52 font-semibold" href="#" />
    <a class="text-lg px-5 font-normal" href="#reviews">Reviews</a>
    <a class="text-lg px-5 font-normal" href="#servicess">Services</a>
  </div>

  <div class="flex flex-col text-base">
    <a href="tel:+40755312170">+40 755 312 170</a>
    <a href="mailto:support@sealnext.com">support@sealnext.com</a>
  </div>
  <!-- <a href="#contact" class="bg-white font-medium text-black rounded-[7px] py-2 px-4 border-2 border-black">Get started</a> -->
</header>

<style>
    header > a:hover {
    background-color: rgb(242, 242, 242);
  }
</style>
