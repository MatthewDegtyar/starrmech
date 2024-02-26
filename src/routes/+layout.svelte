<script>
  import "../app.css";
  import { onMount } from "svelte";

  export let currentYear = "";

  onMount(() => {
    // Get the current year
    currentYear = new Date().getFullYear().toString();
  });
</script>

<!--navbar-->
<nav class="h-[80px] z-40 fixed bg-white top-0 w-screen flex flex-row items-center px-[5vw]">
  <a href="https://www.starrmechanical.net/">
    <img alt="Starr Mechanical logo" src="/img/starrlogo.png" />
  </a>

  <div class="ml-8 font-medium hidden lg:flex flex-row gap-8 mt-[20px]">
    <a class="hover:text-[#0075A3]" href="/">Home</a>
    <a class="hover:text-[#0075A3]" href="/about">About US</a>
    <a class="hover:text-[#0075A3]" href="/clients">Clients</a>
    <a class="hover:text-[#0075A3]" href="/careers">Careers</a>
    <a class="hover:text-[#0075A3]" href="/projects">Projects</a>
    <a class="hover:text-[#0075A3]" href="/services">Services</a>
    <a class="hover:text-[#0075A3]" href="/contact">Contact Us</a>
  </div>

  <div class="lg:hidden absolute right-4 top-[30px] self-end">
    <button class="size-6 bg-black">

    </button>


  </div>

  <div class="fixed hidden z-30 left-0 top-0 h-screen w-screen bg-white">
    <button class="size-6 bg-black top-16 right-16 absolute">

    </button>
    <div class="flex flex-col items-center h-screen w-screen justify-center gap-8 text-3xl">
      <a href="/">Home</a>
      <a href="/clients">Clients</a>
      <a href="/careers">Careers</a>
      <a href="/projects">Projects</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact Us</a>
    </div>
  </div>

</nav>

<div class="h-[80px]"></div>

<slot />


<!--get a quote-->
<div class=" mb-24 flex flex-col text-center items-center">
  <div class="h-[1.25px] w-[45%] mt-16 bg-[#e2e2e2]"></div>

  <h3 class="text-[#0092cd] mt-8 text-4xl">Request A Quote</h3>
  <p class="mt-4 max-w-[70%]">
    Contact us for your next project. We look forward to hearing from you!
  </p>
  <div>
    <a
      href="/contact"
      class="bg-[#0092cd] items-center flex flex-row hover:bg-[#0075A3] text-white mt-6 p-4 rounded-xl"
    >
      <span class="text-nowrap">Get A Quote</span>

      <svg
        class="h-6 w-6"
        fill="#fff"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
        /></svg
      >
    </a>
  </div>
</div>

<!--footer-->
<footer class=" text-white bg-[#444444] flex flex-col items-center">
  <div
    class="flex flex-col lg:flex-row lg:w-[70%] justify-between mt-8 px-[5vw]"
  >
    <div class="flex flex-col lg:w-[30%]">
      <p class='footerP'>About Starr Mechanical</p>
      <p class="mt-4 text-lg">
        Full-service Orlando based Mechanical Contracting Company specializing
        in Commercial and Industrial HVAC Systems & Rooftop Services. Licensed,
        Insured, and Bondable in the State of Florida.
      </p>
      <p class="mt-4 text-lg">
        Annual Maintenance Contracts offered to keep A/C systems running
        efficiently year round.
      </p>
    </div>
    <div class="flex flex-col lg:w-[30%] mt-8 lg:mt-0">
      <p class='footerP'>Company</p>
      <div class="grid grid-cols-2 mt-4 gap-6">
        <p><a class="hover:text-[#0092cd] text-lg" href="/about">About Us</a></p>
        <p><a class="hover:text-[#0092cd] text-lg" href="/clients">Clients</a></p>
        <p><a class="hover:text-[#0092cd] text-lg" href="/careers">Careers</a></p>
        <p><a class="hover:text-[#0092cd] text-lg" href="/services">Services</a></p>
        <p><a class="hover:text-[#0092cd] text-lg" href="/projects">Projects</a></p>
        <p><a class="hover:text-[#0092cd] text-lg" href="/contact">Contact Us</a></p>
      </div>
      <a
        href='/contact'
        class=" place-self-start text-xl mt-8 hover:bg-[#e0e0e0] text-[#444444] bg-white rounded-xl p-4"
      >
        <span class="text-lg">Request A Quote</span>
      </a>
    </div>
    <div class="flex flex-col lg:w-[30%] mt-8 lg:mt-0">
      <p class='footerP'>Contact</p>
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex flex-row gap-4">
          <div class="w-5 h-5">
            <svg
              class="w-5 h-5"
              style="color: white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              ><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path
                d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"
                fill="white"
              ></path></svg
            >
          </div>
          <!-- Inline SVG representing the IoLocationSharp icon -->
          <span class="text-nowrap text-[16px]"
            >5011 Batten Place
            <br />Orlando, FL 32809</span
          >
        </div>

        <div class="flex flex-row gap-4">
          <div class="w-5 h-5">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 512 512"
              ><path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              /></svg
            >
          </div>
          <!-- Inline SVG representing the FaPhone icon -->
          <span class="text-[16px]">(407) 299-6552</span>
        </div>

        <div class="flex flex-row gap-4">
          <div class="w-5 h-5">
            <svg
              style="color: white"
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              ><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path
                d="M192 64h197.5L416 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C419.4 3.375 411.2 0 402.8 0H160C142.3 0 128 14.33 128 32v128h64V64zM64 128H32C14.38 128 0 142.4 0 160v320c0 17.62 14.38 32 32 32h32c17.62 0 32-14.38 32-32V160C96 142.4 81.63 128 64 128zM480 192H128v288c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V224C512 206.4 497.6 192 480 192zM288 432c0 8.875-7.125 16-16 16h-32C231.1 448 224 440.9 224 432v-32C224 391.1 231.1 384 240 384h32c8.875 0 16 7.125 16 16V432zM288 304c0 8.875-7.125 16-16 16h-32C231.1 320 224 312.9 224 304v-32C224 263.1 231.1 256 240 256h32C280.9 256 288 263.1 288 272V304zM416 432c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16V432zM416 304c0 8.875-7.125 16-16 16h-32C359.1 320 352 312.9 352 304v-32C352 263.1 359.1 256 368 256h32C408.9 256 416 263.1 416 272V304z"
                fill="white"
              ></path></svg
            >
          </div>

          <span class="text-[16px]">(407) 329-4540</span>
        </div>

        <div class="flex flex-row gap-4">
          <div class="w-5 h-5">
            <svg
              style="color: white"
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                fill="white"
              ></path></svg
            >

          </div>

          <span class="text-[16px]">info(at)StarrMechanical.net</span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-[#2d2d2d] py-8 lg:py-0 w-full lg:h-10 mt-8 flex flex-col lg:flex-row justify-center items-center text-center gap-4 lg:gap-16"
  >
    <p class="text-[16px]">
      © {currentYear}
      <a class="hover:underline" href="https://www.starrmechanical.net/"
        >Starr Mechanical, Inc.</a
      > All Rights Reserved
    </p>
    <p class="text-[16px]">
      Powerd by <a
        class="hover:underline"
        href="https://www.degtyarconsulting.com">Degtyar Consulting</a
      >
    </p>
  </div>
</footer>
