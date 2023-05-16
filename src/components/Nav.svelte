<script>
  import GitHub from "./icons/GitHub.svelte"
  import LinkedIn from "./icons/LinkedIn.svelte"
  import Mastodon from "./icons/Mastodon.svelte"
  import Monogram from "./icons/Monogram.svelte"
  import Twitter from "./icons/Twitter.svelte"
</script>

<nav
  class="nav flex items-center py-6 lg:max-w-[50vw] md:max-w-[70vw] max-w-[90vw] mx-auto"
>
  <a
    class="transition fill-dark-yellow hover:fill-magenta focus:fill-magenta m-2 text-lg"
    href="/"
    rel="prefetch"
    aria-label="Home"
  >
    <Monogram />
  </a>

  <a
    class="transition hover:text-magenta focus:text-magenta m-2 block text-lg"
    href="/projects"
    rel="prefetch"
  >
    Projects
  </a>

  <a
    class="transition hover:text-magenta focus:text-magenta m-2 block text-lg"
    href="https://blog.rishab-garg.me/"
  >
    Blog
  </a>

  <a
    class="transition hover:text-magenta focus:text-magenta m-2 block text-lg"
    href="/about"
    rel="prefetch"
  >
    About
  </a>

  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-auto"
    href="https://twitter.com/rishab_grg"
    target="_blank"
    rel="me"
    aria-label="Twitter"
  >
    <Twitter />
  </a>

  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-3"
    href="https://mastodon.social/@risgar"
    target="_blank"
    rel="me"
    aria-label="Mastodon"
  >
    <Mastodon />
  </a>

  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-3"
    href="https://github.com/RisGar"
    target="_blank"
    rel="me"
    aria-label="GitHub"
  >
    <GitHub />
  </a>

  <a
    class="transition fill-white hover:fill-magenta focus:fill-magenta ml-3"
    href="https://www.linkedin.com/in/rishab-grg/"
    target="_blank"
    rel="me"
    aria-label="LinkedIn"
  >
    <LinkedIn />
  </a>
</nav>
