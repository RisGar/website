<script lang="ts">
  export let project
  const { frontmatter } = project
  import Button from "./Button.svelte"
</script>

<div class="relative border-2 border-solid border-white">
  <div
    class="relative bg-cover pt-[37.5%] bg-center "
    style={`background-image:url(${frontmatter.img})`}
  >
    <h1
      class="absolute top-0 w-full h-full flex items-center justify-center text-[#fff] flex-col m-0 text-3xl uppercase font-black tracking-wider"
    >
      {frontmatter.title}
    </h1>
  </div>
  <div class="p-6">
    <p class="mt-0 mb-4 text-lg">{frontmatter.description}</p>
    {#each frontmatter.tags as t}
      <div
        class="text-sm font-bold lowercase tracking-wider inline-block text-dark-yellow mr-2 py-1 px-2 bg-gutter-grey rounded"
        data-tag={t}
      >
        {t}
      </div>
    {/each}
    <a
      class="link absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#000] bg-opacity-25 
      opacity-0 transition-opacity hover:opacity-100"
      href={project.url}
    >
      <Button>View</Button>
    </a>
  </div>
</div>
