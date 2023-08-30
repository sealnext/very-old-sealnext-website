<script>
function toggleText(id, arrowId) {
    const element = document.getElementById(id);
    const arrow = document.getElementById(arrowId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        arrow.innerHTML = 'arrow_drop_up'; // schimbă la săgeată în sus
    } else {
        element.style.display = 'none';
        arrow.innerHTML = 'arrow_drop_down'; // schimbă la săgeată în jos
    }
}

function handleKeyDown(event, id, arrowId) {
    if (event.key === "Enter" || event.key === " ") {
        toggleText(id, arrowId);
    }
}
let showComponent = false;
  
  function handleClick() {
    showComponent = true;
  }
import Contact from './FreeSolutionContact.svelte';
</script>

<section class="mt-6 flex flex-col justify-center items-center" id="free">
  <h1 class="title text-3xl md:text-4xl lg:text-5xl">
    Get Your <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold">FREE</span>
    Custom <br /> Digital Solution Today!
  </h1>
  <div class="text mx-6">
    <h1 class="mt-6 text-center">Ready to unlock your digital potential? Fill out our brief form to get started.</h1>
    {#if !showComponent}
      <button href="" on:click={handleClick} class="button text-[1.2rem] md:text-[1.3rem]">Claim your 🎁 solution</button>
    {/if}
  </div>
  {#if showComponent}
    <Contact />
  {/if}
  <div class="solution">
    <div class="container" on:click={() => toggleText('hiddenText1', 'arrow1')} on:keydown={(e) => handleKeyDown(e, 'hiddenText1', 'arrow1')} tabindex="0" role="button" aria-pressed="false">
      <span>What Does It Mean?</span>
      <span id="arrow1" class="material-symbols-outlined mr-2">arrow_drop_down</span>
    </div>
    <div id="hiddenText1" style="display:none;">Here at <span>SealNext</span>, our mission is to help small to medium enterprises like your own unlock their full online potential. We get that the world of digital can be a maze sometimes. <br />So, we're extending an offer for a <span>NO-COST personalized digital strategy</span> consultation. This is designed to pinpoint your needs and educate you on effective strategies for online business growth.</div>

    <div class="container" on:click={() => toggleText('hiddenText2', 'arrow2')} on:keydown={(e) => handleKeyDown(e, 'hiddenText2', 'arrow2')} tabindex="0" role="button" aria-pressed="false">
      <span>What Can You Expect?</span>
      <span id="arrow2" class="material-symbols-outlined mr-2">arrow_drop_down</span>
    </div>
    <div id="hiddenText2" style="display:none;">
      <p><span>Needs Analysis</span>: After looking over your submission, we'll perform an in-depth evaluation of your existing digital tools and the specific requirements you've laid out in the form.</p>
      <p><span>Personalized Suggestions</span>: Based on our review, we'll share with you actionable insights designed to align closely with your business targets.</p>
      <p><span>Digital Blueprint</span>: We'll draft a comprehensive, step-by-step game plan to navigate your business toward digital success.</p>
      <p><span>Demo Opportunity</span>: If you're interested in taking the next step with us, we can arrange a demo to show you how the software could look and function for your specific needs.</p>
      <p><span>Absolutely No Obligations</span>: The initial consultation is totally free. There are no hidden costs or commitments to move forward with our services unless you choose to.</p>
    </div>

    <div class="container" on:click={() => toggleText('hiddenText3', 'arrow3')} on:keydown={(e) => handleKeyDown(e, 'hiddenText3', 'arrow3')} tabindex="0" role="button" aria-pressed="false">
      <span>Why Offer This for Free?</span>
      <span id="arrow3" class="material-symbols-outlined mr-2">arrow_drop_down</span>
    </div>
    <div id="hiddenText3" style="display:none;">Our goal is to assist small to medium enterprises in thriving in the digital landscape. Consider this our little way of giving back to the community and showcasing what we can do for you. After we talk, the choice is yours—either apply our suggestions yourself or collaborate with us for implementation.</div>
  </div>
</section>

<style>
.container>span {
    font-size: x-large;
}

#hiddenText1,
#hiddenText2,
#hiddenText3 {
    font-size: large;
    color: gray;
    margin-bottom: 0.1rem;
}

p>span,
div>span {
    color: black;
}

p {
    margin-bottom: 1rem;
}

.container {
    width: 100%;
    display: flex;
    padding-bottom: 0.5rem;
    margin-top: 0.4rem;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.solution {
    margin-top: 1rem;
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.solution div {
    font-size: x-large;
    text-align: left;
    width: 100%;
}

.text {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
}

.text h1 {
    font-size: 1.2rem;
}

.title {
    font-weight: 700;
    text-align: center;
}

.button {
    text-align: center;
    font-weight: 500;
    background-color: black;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    border-radius: 10px;
    width: 15rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border: 2px solid black;
}

.button:hover {
    background-color: rgb(40, 40, 40);
}
.container > span {
  font-weight: 500;
  font-size: 1.4rem;
}
@media only screen and (min-width: 801px) {
    .title {
        text-align: center;
    }

    .button {
        font-size: 1rem;
    }

    .solution {
        width: 63%;
        margin-top: 2rem ;
    margin-bottom: 2rem;
    }
}
</style>
