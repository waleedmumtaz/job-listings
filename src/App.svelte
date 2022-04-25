<script>
  import Footer from './lib/footer.svelte'
  import Listings from './lib/Listings.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen font-spartan bg-cstm-neutral-light-grayish-cyan-bg flex flex-col"
>
  <Listings />
  <Footer />
</div>
