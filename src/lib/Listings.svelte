<script>
  import listingsData from '../../data.json'
  import ListingItem from './listing-item.svelte'
</script>

<main>
  <div>
    <img
      src="/assets/bg-header-mobile.svg"
      alt="header pattern"
      class="bg-cstm-primary-desaturated-dark-cyan w-full md:hidden"
    />
    <img
      src="/assets/bg-header-desktop.svg"
      alt="header pattern"
      class="hidden md:block w-full bg-cstm-primary-desaturated-dark-cyan"
    />
    <div class="mt-10 px-8 md:max-w-6xl md:mx-auto">
      {#each listingsData as listing}
        <ListingItem {listing} />
      {/each}
    </div>
  </div>
</main>
