<script>
  import listingsData from '../../data.json'
  import ListingItem from './listing-item.svelte'
</script>

<main>
  <div>
    <img
      src="/assets/bg-header-mobile.svg"
      alt="header pattern"
      class="bg-cstm-primary-desaturated-dark-cyan"
    />
    <div class="mt-10 px-8">
      {#each listingsData as listing}
        <ListingItem {listing} />
      {/each}
    </div>
  </div>
</main>
