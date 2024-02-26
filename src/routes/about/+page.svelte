<script lang="ts">
  import { onMount } from "svelte";

  let emailCopied = false;
  const copyEmail = () => {
    const emailSpan = document.getElementById("copyable");
    if (emailSpan) {
      const email = emailSpan.textContent?.replace("(at)", "@");
      if (email) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            emailCopied = true;
            setTimeout(() => {
              emailCopied = false;
            }, 2000); // Reset copied message after 2 seconds
          })
          .catch((err) => {
            console.error("Could not copy email: ", err);
          });
      }
    }
  };

  onMount(() => {
    const copySpan = document.getElementById("copy-span");
    if (copySpan) {
      copySpan.addEventListener("click", copyEmail);
    }
  });
</script>

<div>
  <div class="flex flex-col items-center mt-8">
    <h2 class="text-5xl text-center text-[#0092cd]">About Us</h2>
    <h1 class="text-2xl mt-6 text-center px-[5vw] lg:max-w-[70%]">
      Starr Mechanical’s <strong>100 years of combined experience</strong>
      ensures the quality of our work. Our goal is
      <strong>100% satisfaction</strong> and the opportunity to show you that Starr
      Mechanical is the best choice for the service and/or installation needs of
      your facilities.
    </h1>

    <p class="px-[5vw] lg:max-w-[70%] mt-12 text-center">
      We will be happy to answer any questions or comments by calling (407)
      299-6552 or emailing
      <span id="copyable" class=" customSpan text-xl"
        >info(at)starrmechanical.net</span
      >
      {#if emailCopied}
        <span class="text-green-500">Email copied!</span>
      {/if}
      <span
        id="copy-span"
        class="cursor-pointer customSpan text-xl font-medium text-[#0092cd]"
        >(click here to copy email)</span
      >. Our clients are our best publicity and you can locate some of them on
      our
      <a href="/clients">Clients page</a>.
    </p>

    <!--make email copyable-->
    <img
      alt="Starr Mechanical Logo"
      src="img/logos/starr-favicon.png"
      class="mt-12"
    />
    <div
      class="h-[1.25px] place-self-center mt-12 mb-16 w-[45%] bg-[#e2e2e2] self-center"
    ></div>
  </div>

  <div
    class="w-full bg-bg2 px-[5vw] gap-4 items-center overflow-auto justify-between flex flex-col"
  >
    <div class="text-white py-8 lg:p-16 flex flex-col items-center gap-4">
      <h3 style="text-align: center">Markets Served</h3>
      <div class="h-[2px] w-16 bg-white"></div>
      <p class="intro"></p>
      <div class="flex flex-col lg:flex-row gap-0 lg:gap-16">
        <div class="flex flex-col gap-4 text-xl">
          <div>
            <li>Industrial</li>
            <li>Municipal Government Facilities</li>
            <li>Commercial Office Space</li>
            <li>Basketball and Football Venues</li>
            <li>Themed Entertainment</li>
          </div>
        </div>
        <div class="flex flex-col gap-4 text-xl">
          <div>
            <li>K12 Education</li>
            <li>Higher Education</li>
            <li>Hotel and Hospitality</li>
            <li>Time-Share</li>
            <li>High Rise Condominium</li>
          </div>
        </div>
        <div class="flex flex-col gap-4 text-xl">
          <div>
            <li>Laboratories</li>
            <li>Healthcare</li>
            <li>Theater</li>
            <li>Retail</li>
            <li>Restaurant</li>
          </div>
        </div>
      </div>
      <p class="mt-6 font-bold">
        <a href="http://starrmechanical.net/clients/" style="color: white"
          >View Our Featured Clients &gt;</a
        >
      </p>
    </div>
  </div>

  <div>
    <div class=" flex flex-col items-center">
      <div class="lg:w-[70%] px-[5vw] mt-16">
        <h3 class="mb-4 text-[#0092cd]">Our Work</h3>
        <p class="intro">
          Starr Mechanical, Inc. can provide all of your HVAC and mechanical
          service needs. As Prime or as a Subcontractor, Starr Mechanical serves
          as an extension of the owner’s staff and resources through the design
          and construction of a project. This Professional Management enables an
          owner to maintain direct and total control over all aspects of the
          project.
        </p>
        <p class="intro">
          Our management approach provides overall control and direction
          regarding all design and installation of mechanical systems of the
          project through a single entity. Let our professional relationships
          and industry resources work for you.
        </p>
        <p class="intro">
          The services you can expect from Starr Mechanical include overall HVAC
          Systems repair and replacement, new construction installation,
          maintenance and continuing services to help manage and control both
          capital improvement and maintenance budgets.
        </p>
        <p class="mt-6">
          <a class="font-bold" href="http://starrmechanical.net/services/"
            >Learn more about our services &gt;</a
          ><br />
          <img src="" alt="Starr Mechanical Amway and Fire Clients" />
        </p>
      </div>
    </div>
  </div>

  <div>
    <div class=" flex flex-col items-center">
      <div
        class="lg:w-[70%] px-[5vw] mt-16 flex flex-col xl:flex-row gap-3 xl:gap-6"
      >
        <div>
          <h3 class="mb-4 text-[#0092cd]">Trust &amp; Credibility</h3>
          <p class="intro">
            Starr Mechanical, Inc. is an accredited member of the Air
            Conditioning Contractors Association (<abbr
              title="Air Conditioning Contractors Association">ACCA</abbr
            >), Central Florida Hotel and Lodging Association (<abbr
              title="Central Florida Hotel and Lodging Association">CFHLA</abbr
            >), and an accredited member in excellent standing with the Better
            Business Bureau (<abbr title="Better Business Bureau">BBB</abbr>).
            We are Licensed, Insured, and Bondable in the State of Florida and
            conveniently located in Orlando. All of our employees are
            <abbr title="Environmental Protection Agency">EPA</abbr>-certified,
            <abbr title="North American Technician Excellence">NATE</abbr> Certified,
            E-verified, Jessica Lunsford Act badged, and drug-free.
          </p>
        </div>
        <img
          src="/img/logos2.png"
          class="w-72 resize-none self-center xl:self-start"
          alt="Starr Mechancial Inc ACCA and CFHLA accreddited"
        />
      </div>
    </div>
  </div>
</div>
