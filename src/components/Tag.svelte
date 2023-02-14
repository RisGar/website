<script lang="ts">
  export let tag: string
</script>

<a href="/work/tag/{tag}" rel="prefetch">
  <span
    class="inline-block py-1 px-2 bg-gutter-grey rounded-lg transition
    lowercase text-sm font-bold tracking wider
  text-dark-yellow hover:text-magenta focus:text-magenta"
  >
    {tag}
  </span>
</a>
