<div id="contact" class="mt-12 flex-col text-[1rem] justify-between items-center flex mb-6">
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Contact</h2>
  <div class="text-[1.2rem] flex items-center">Your success, our services</div>
  <div class="mt-5 flex flex-col-reverse items-center md:flex-row justify-center md:gap-x-32 w-full">
    <div class="text-[1.2rem] md:text-l md:pb-12 mt-12 md:mt-0 space-y-4 text-left pb-0 mb-12 md:mb-0">
      <h2 class="font-bold mb-2">Contact SealNext</h2>
      <p class="mb-2 text-gray-500">
        Need assistance or have inquiries? <br />
        We're at your service. Fill out the <br />
        form, send an email, or give us a call. <br />
        Let's make a splash together!
      </p>
      <p class="mb-2 flex flex-col text-gray-500">
        <a href="mailto:support@sealnext.com">support@sealnext.com</a>
      </p>
    </div>
    <div class="w-4/5 flex flex-col items-center sm:items-start sm:w-64">
      <form action="https://api.web3forms.com/submit" method="POST" class="text-black w-full flex flex-col gap-4 mb-4">
        <input type="hidden" name="access_key" value="fad8eedb-8a2b-4342-a05d-87b4d69b3adf" />
        <input type="hidden" name="subject" value="Contact form" />
        <input type="hidden" name="redirect" value="https://www.sealnext.com" />

        <input name="name" type="text" class="border text-xl border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-12 p-3 items-center flex" placeholder="Full name" required />
        <input name="email" type="email" class="border text-xl border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-12 p-3 items-center flex" placeholder="Email address" required />
        <textarea name="message" class="border text-xl border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-24 p-3 items-center flex" placeholder="Your message" required />

        <input id="submit" class="text-xl font-medium bg-black text-white rounded-[10px] px-4 border-2 border-black w-full h-12 flex items-center justify-center" type="submit" value="Submit" />
        <div class="h-captcha" data-captcha="true" />
      </form>
    </div>
  </div>
</div>

<style>
form>#submit:hover {
    background-color: rgb(40, 40, 40);
}
</style>
