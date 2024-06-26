<script lang="ts">
  import "../app.css";
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";

  let isMobileMenuOpen = false;
  export let currentPage: string;
  console.log("currentPage:", currentPage);

  export let currentYear = "";
  let hideRequestQuote = false; // Add this variable

  onMount(() => {
    // Get the current year
    currentYear = new Date().getFullYear().toString();
    updateLayout(); // Update layout on mount
  });
  onDestroy(() => {
    // Unsubscribe from changes in the $page store when component is destroyed
    unsubscribe();
  });
  const unsubscribe = page.subscribe(() => {
    updateLayout();
  });
  function updateLayout() {
    currentPage = $page.url.pathname;
    hideRequestQuote = currentPage === "/contact";
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<!--navbar-->
<nav
  class="h-[80px] z-40 fixed bg-white top-0 w-screen flex flex-row items-center px-[5vw]"
>
  <a href="/">
    <img alt="Starr Mechanical logo" src="/img/starrlogo.webp" />
  </a>

  <div class="ml-8 font-medium hidden lg:flex flex-row gap-8 mt-[20px]">
    <a class:selected={currentPage === "/"} href="/">Home</a>
    <a class:selected={currentPage === "/about"} href="/about">About Us</a>
    <a class:selected={currentPage === "/clients"} href="/clients">Clients</a>
    <a class:selected={currentPage === "/careers"} href="/careers">Careers</a>
    <a class:selected={currentPage === "/projects"} href="/projects">Projects</a
    >
    <a class:selected={currentPage === "/services"} href="/services">Services</a
    >
    <a class:selected={currentPage === "/contact"} href="/contact">Contact Us</a
    >
  </div>

  <div class="lg:hidden absolute right-4 sm:right-8 top-[30px] self-end">
    <button
      aria-labelledby="menu open"
      on:click={toggleMobileMenu}
      class="size-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        class="size-8"
        viewBox="0 0 24 24"
        style="fill:#1A1A1A;"
      >
        <path
          d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
        ></path>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div class="fixed lg:hidden z-50 left-0 top-0 h-screen w-screen bg-white">
      <button
        aria-labelledby="menu close"
        class="size-8 top-[30px] right-4 sm:right-8 absolute"
        on:click={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          class="size-8"
          viewBox="0 0 50 50"
        >
          <path
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
          ></path>
        </svg>
      </button>
      <div
        class="flex flex-col items-center h-screen w-screen justify-center gap-8 text-3xl"
      >
        <a
          href="/"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/"}>Home</a
        >
        <a
          href="/about"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/about"}>About Us</a
        >
        <a
          href="/clients"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/clients"}>Clients</a
        >
        <a
          href="/careers"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/careers"}>Careers</a
        >
        <a
          href="/projects"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/projects"}>Projects</a
        >
        <a
          href="/services"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/services"}>Services</a
        >
        <a
          href="/contact"
          on:click={closeMobileMenu}
          class:selected={window.location.pathname === "/contact"}>Contact Us</a
        >
      </div>
    </div>
  {/if}
</nav>

<div class="h-[80px]"></div>

<slot />

{#if !hideRequestQuote}
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
{/if}
<!--footer-->
<footer class=" text-white bg-[#444444] flex flex-col items-center">
  <div
    class="flex flex-col lg:flex-row lg:w-[70%] justify-between mt-8 px-[5vw]"
  >
    <div class="flex flex-col lg:w-[30%]">
      <p class="footerP">About Starr Mechanical</p>
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
      <p class="footerP">Company</p>
      <div class="grid grid-cols-2 mt-4 gap-6">
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/about">About Us</a>
        </p>
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/clients">Clients</a>
        </p>
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/careers">Careers</a>
        </p>
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/services">Services</a>
        </p>
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/projects">Projects</a>
        </p>
        <p>
          <a class="hover:text-[#0092cd] text-lg" href="/contact">Contact Us</a>
        </p>
      </div>
      <a
        href="/contact"
        class=" place-self-start text-xl mt-8 hover:bg-[#e0e0e0] text-[#444444] bg-white rounded-xl p-4"
      >
        <span class="text-lg">Request A Quote</span>
      </a>
    </div>
    <div class="flex flex-col lg:w-[30%] mt-8 lg:mt-0">
      <p class="footerP">Contact</p>
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
              ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                fill="white"
              ></path></svg
            >
          </div>

          <span class="text-[16px]">accounts@StarrMechanical.net</span>
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
