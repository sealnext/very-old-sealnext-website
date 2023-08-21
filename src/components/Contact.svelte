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
<section class="flex flex-col items-center">
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
