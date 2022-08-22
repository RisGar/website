<script lang="ts">
  import type { MDXInstance } from "astro"

  export let project: MDXInstance<Frontmatter>
  const { frontmatter } = project
  import Button from "./Button.svelte"
</script>

<div class="relative border-2 border-solid border-white rounded-md">
  <div
    class="relative bg-cover pt-[37.5%] bg-center"
    style={`background-image:url(${frontmatter.img})`}
  >
    <h3
      class="absolute top-0 w-full h-full flex items-center justify-center text-[#fff] flex-col m-0 xl:text-3xl md:text-2xl text-xl uppercase font-extrabold tracking-wider"
    >
      {frontmatter.title}
    </h3>
  </div>
  <div class="p-6">
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
    <a
      class="link absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#000] bg-opacity-25 
      opacity-0 transition-opacity hover:opacity-100"
      href={project.url}
    >
      <Button>View</Button>
    </a>
  </div>
</div>
