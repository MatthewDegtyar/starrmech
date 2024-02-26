<script>
// @ts-nocheck

  import Gallery from "../../components/Gallery.svelte";

  // Import the Gallery component if needed

  /**
   * @type {null}
   */
  let enlargedImage = null;

  /**
   * @param {{ target: { src: null; }; }} event
   */
  function handleDoubleClick(event) {
    enlargedImage = event.target.src;
  }

  function closeEnlargedView() {
    enlargedImage = null;
  }

  export const imgStyle = "h-96 w-96 object-cover container p"

</script>

<div class="text-[#444444]">

  {#if enlargedImage}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={closeEnlargedView} class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img loading='lazy' src={enlargedImage} class="max-w-full max-h-full" >
  </div>
{/if}

  <div class="flex flex-col items-center mt-8">
    <h2 class="text-5xl text-center text-[#0092cd]">Projects</h2>
    <h1 class="text-2xl mt-6 text-center px-[5vw] lg:max-w-[70%]">
      Here’s a sample of our featured projects. Drag on the images to scroll through the gallery.
    </h1>
    <div
      class="h-[1.25px] place-self-center mt-12 mb-16 w-[45%] bg-[#e2e2e2] self-center"
    ></div>
  </div>

  <div>
    <h3 class="text-[#0092cd] text-center" id='hydro'>
      Hydronics/Chilled Water Piping/Boilers
    </h3>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        City of Orlando Wastewater Building
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        EASTERN REGIONAL WATER RECLAMATION FACILITY
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        HYATT PLACE LAKE BUENA VISTA
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        EASTERN FLORIDA STATE CHILLER PLANT
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        EAST ORLANDO HEALTH AND REHAB
      </h4>
    </div>
  </div>

  <div class="mt-8">
    <h3 class="text-[#0092cd] text-center" id='hvac'>
      HVAC Ductwork
    </h3>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        MAITLAND ART MUSEUM
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        THE ORLANDO SHAKESPEARE THEATER
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        BOBCAT
      </h4>
    </div>


  </div>

  <div class="mt-8">
    <h3 class="text-[#0092cd] text-center" id='rooftop'>
      Rooftop Services
    </h3>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        1801 LEE ROAD OFFICE
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        PONCE INLET TOWERS
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        GRAND COQUINA
      </h4>
    </div>
  </div>

  <div class="mt-8">
    <h3 class="text-[#0092cd] text-center" id='install'>
      Equipment Installation
    </h3>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        TOO JAYS
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        WOMEN’S RESIDENTIAL AND COUNSELING CENTER
      </h4>
    </div>

    <div class="mt-8 px-[5vw]">
      <Gallery>
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />
        <img loading='lazy' on:dblclick={handleDoubleClick} draggable="false" alt="img" class={imgStyle} src="/img/weld1.webp" />

      </Gallery>
      <h4 class="uppercase text-center mt-4">
        AMERICAN COLLEGE FOR MEDICAL CAREERS
      </h4>
    </div>
  </div>


</div>
