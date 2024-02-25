<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  let containerRef: HTMLDivElement;
  let isDragging: boolean = false;
  let startX: number | null = null;
  let scrollLeft: number | null = null;

  const handleMouseDown = (event: MouseEvent) => {
    isDragging = true;
    startX = event.clientX;
    scrollLeft = containerRef.scrollLeft;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const x = event.clientX;
    const walk = (x - startX!) * 2; // Adjust the sensitivity of the drag
    containerRef.scrollLeft = scrollLeft! - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  // Clean up event listeners when component is unmounted
  onMount(() => {
    const handleMouseLeave = () => {
      isDragging = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  // Dispatch custom event for communication between components
  const dispatch = createEventDispatcher();

  function dispatchCustomEvent(detail: any) {
    dispatch("customEvent", detail);
  }
</script>

<div
  class="w-[90vw] container flex pointer gap-4 flex-row overflow-auto cursor-grab"
  bind:this={containerRef}
  on:mousedown={handleMouseDown}
  on:mouseleave={handleMouseUp}
  role="button"
  aria-pressed="false"
  tabindex="0"
>
  <slot />
</div>
