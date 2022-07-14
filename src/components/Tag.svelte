<script lang="ts">
  export let tag: string
</script>

<a
  class="text-sm font-bold lowercase tracking-wider inline-block text-dark-yellow mr-2 py-1 px-2 bg-gutter-grey rounded transition hover:text-magenta"
  href={"/tags/" + tag}
>
  {tag}
</a>
