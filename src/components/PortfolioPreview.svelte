<script lang="ts">
  export let article
  const { frontmatter } = article
  import Button from "./Button.svelte"
</script>

<div class="relative border-2 border-solid border-white">
  <div
    class="relative bg-cover pt-[37.5%] bg-center "
    style={`background-image:url(${frontmatter.img})`}
  >
    <h1
      class="absolute top-0 w-full h-full flex items-center justify-center text-white flex-col m-0 text-3xl uppercase font-black tracking-wider"
    >
      {frontmatter.title}
    </h1>
  </div>
  <div class="p-6">
    <p class="mt-0 mb-4 text-lg">{frontmatter.description}</p>
    <div class="tags">
      Tagged:
      {#each frontmatter.tags as t}
        <div class="tag" data-tag={t}>
          {t}
        </div>
      {/each}
    </div>
    <a
      class="link absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#000] bg-opacity-25 
      opacity-0 transition-opacity hover:opacity-100"
      href={article.url}
    >
      <Button>View</Button>
    </a>
  </div>
</div>

<style lang="scss">
  .tags {
    font-size: var(--f-d2);
    text-transform: uppercase;
  }

  .tag {
    display: inline-block;
    color: var(--c-yellow);
    text-transform: uppercase;
    margin-left: 0.5em;

    &:nth-of-type(1n) {
      color: var(--c-green);
    }
    &:nth-of-type(2n) {
      color: var(--c-orange);
    }
    &:nth-of-type(3n) {
      color: var(--c-blue);
    }
    &:nth-of-type(4n) {
      color: var(--c-pink);
    }
  }
</style>
