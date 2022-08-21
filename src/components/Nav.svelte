<script>
  import GitHub from "./icons/GitHub.svelte"
  import LinkedIn from "./icons/LinkedIn.svelte"
  import Monogram from "./icons/Monogram.svelte"
  import Twitter from "./icons/Twitter.svelte"
</script>

<nav
  class="nav flex items-center py-6 lg:max-w-[50vw] md:max-w-[70vw] max-w-[90vw] mx-auto"
>
  <a
    class="flex transition fill-dark-yellow hover:text-magenta focus:text-magenta hover:underline focus:underline underline-offset-4 m-2 text-lg"
    href="/"
  >
    <Monogram />
  </a>
  <a
    class="transition hover:text-magenta focus:text-magenta hover:underline  underline-offset-4 m-2 block text-lg"
    href="/projects"
  >
    Projects
  </a>
  <a
    class="transition hover:text-magenta focus:text-magenta hover:underline  underline-offset-4 m-2 block text-lg"
    href="/about"
  >
    About
  </a>
  <a
    class="transition hover:text-magenta focus:text-magenta hover:underline  underline-offset-4 m-2 block text-lg"
    href="https://rishab-garg.medium.com/"
    target="_blank"
    rel="nofollow"
    data-spa-ignore
  >
    Blog
  </a>
  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-auto"
    href="https://twitter.com/rishab_grg"
    target="_blank"
    rel="nofollow"
    data-spa-ignore
  >
    <Twitter />
  </a>
  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-3"
    href="https://github.com/RisGar"
    target="_blank"
    rel="nofollow"
    data-spa-ignore
  >
    <GitHub />
  </a>
  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-3"
    href="https://www.linkedin.com/in/rishab-grg/"
    target="_blank"
    rel="nofollow"
    data-spa-ignore
  >
    <LinkedIn />
  </a>
</nav>
