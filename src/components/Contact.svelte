<script>
    let status = "";
    const handleSubmit = async data => {
      status = 'Submitting...'
      const formData = new FormData(data.currentTarget)
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          status = result.message || "Success"
      }
    }
</script>

<!-- PHONE -->
<section class="flex flex-col items-center sm:hidden">
  <h1 class="text-[7vmin] font-bold text-center">Contact</h1>
  <div class="text-[4vmin] flex items-center mb-8">Your success, our services <span class="text-[5vmin] ml-2">🚀</span></div>
  <form on:submit|preventDefault={handleSubmit} class="w-[80vmin] text-black text-[3.5vmin] flex flex-col gap-4">
    <input type="text" id="first_name" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3" placeholder="Full name" required />
    <input type="text" id="first_name" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3" placeholder="Email address" required />
    <input type="text" id="first_name" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3" placeholder="Your message" required />
    <input type="submit" value="Submit" />
  </form>
</section>

<!-- TABLET/DESKTOP -->
<section class="flex-col text-[2.5vmin] justify-between items-center hidden sm:flex mb-6">
  <h1 class="text-[7vmin] font-bold text-center">Contact</h1>
  <div class="text-[4vmin] flex items-center mb-8">Your success, our services <span class="text-[5vmin] ml-2">🚀</span></div>
  <div class="mt-16 flex flex-col items-center md:flex-row justify-center md:gap-x-32 w-full">
    <div class="space-y-4 text-left pb-12 mb-12 md:mb-0">
      <h1 class="font-bold mb-2">Contact SealNext</h1>
      <p class="mb-2 text-gray-500">
        Need assistance or have inquiries? <br />
        We're at your service. Fill out the <br />
        form, send an email, or give us a call. <br />
        Let's make a splash together!
      </p>
      <p class="mb-2 text-gray-500">
        contact@sealnext.com <br />
        +40 755 312 170
      </p>
    </div>

    <div class="flex w-64 flex-col items-center md:items-start text-[2vmin]">
      <form on:submit|preventDefault={handleSubmit} class="text-black w-full flex flex-col gap-4 mb-4">
        <input type="text" id="first_name" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-12 p-3" placeholder="Full name" required />
        <input type="text" id="email" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-12 p-3" placeholder="Email address" required />
        <textarea type="text" id="message" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-36 p-3" placeholder="Your message" required />
      </form>
      <input class="bg-black text-white rounded-[10px] py-3 px-4 border-2 border-black w-full h-12" type="submit" value="Submit" />
    </div>
  </div>
</section>
