<div class="flex items-center min-h-screen">
  <div class="container">
    <div class="w-full mx-auto bg-white p-5 rounded-md">
      <div class="m-7">
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="fad8eedb-8a2b-4342-a05d-87b4d69b3adf" />
          <input type="hidden" name="subject" value="Free custom solution" />
          <input type="checkbox" name="botcheck" id="" style="display: none;" />

          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label for="fname" class="block mb-2 text-sm text-black">Company Name</label>
              <input type="text" name="name" id="first_name" placeholder="SealNext" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
            </div>
            <div class="w-full md:w-1/2">
              <label for="lname" class="block mb-2 text-sm text-black">Website</label>
              <input type="text" name="last_name" id="lname" placeholder="www.sealnext.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
            </div>
          </div>

          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label for="email" class="block mb-2 text-sm text-black">Email Address</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
            </div>

            <div class="w-full md:w-1/2">
              <label for="phone" class="block text-sm mb-2 text-black">Phone Number</label>
              <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
            </div>
          </div>

          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm text-black"
              >Please provide details in these areas: <br />
              <br />
              <span class="text-gray-500"> Business Overview, Business Needs, Business Goals, Current Digital Presence, Budget and Timeline, Additional Information, </span></label
            >
            <textarea rows="5" name="message" id="message" placeholder="Your Message" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
          </div>

          <div class="mb-6">
            <button type="submit" class="text-xl bg-black text-white rounded-[10px] px-4 border-2 border-black w-full h-12 flex items-center justify-center">Claim your 🎁 solution</button>
          </div>

          <p class="text-base text-center text-gray-400" id="result" />
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    font-size: large;
  }
</style>
