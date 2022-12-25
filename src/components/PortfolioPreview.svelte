<script lang="ts">
  import type { MDXInstance } from "astro"

  export let project: MDXInstance<Frontmatter>
  const { frontmatter } = project

  let target: HTMLElement

  const handleMousemove = (e: MouseEvent) => {
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
  }
</script>

<a class="link" href={project.url}>
  <div
    class="relative border-2 border-solid border-white rounded-md hoverElement"
    on:mousemove={handleMousemove}
    bind:this={target}
  >
    <div
      class="relative bg-cover pt-[37.5%] bg-center content"
      style={`background-image:url(${frontmatter.img});`}
    >
      <h3
        class="absolute top-0 w-full h-full flex items-center justify-center text-[#fff] flex-col m-0 xl:text-3xl md:text-2xl text-xl uppercase font-extrabold tracking-wider"
      >
        {frontmatter.title}
      </h3>
    </div>
    <div class="p-6 content">
      <p class="mt-0 mb-4 text-lg text-center">{frontmatter.description}</p>
      <div
        class="text-center text-sm font-bold lowercase tracking-wider text-dark-yellow"
      >
        {#each frontmatter.tags as t}
          <div
            class=" mr-2 py-1 px-2 bg-gutter-grey rounded inline-block"
            data-tag={t}
          >
            {t}
          </div>
        {/each}
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  .hoverElement::after {
    opacity: 1;
  }

  .hoverElement:hover::before {
    opacity: 1;
  }

  .hoverElement::before,
  .hoverElement::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  .hoverElement::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .hoverElement::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
</style>
