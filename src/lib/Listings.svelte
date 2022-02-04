<script>
  import listingsData from '../../data.json'
  import ListingItem from './listing-item.svelte'
  import { selectedItems } from './stores'

  let filteredListings = []

  const clearFilters = () => {
    $selectedItems = []
    console.log('filters cleared')
  }

  $: {
    if (selectedItems) {
      filteredListings = listingsData.filter((listing) => {
        const tags = [listing.level, listing.role].concat(
          listing.tools,
          listing.languages
        )
        return $selectedItems.every((f) => tags.includes(f))
      })
    } else {
      filteredListings = listingsData
    }
  }
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
    <form
      on:submit|preventDefault
      class={`${
        $selectedItems.length === 0 ? 'invisible' : ''
      } max-w-5xl mx-auto -translate-y-8 relative px-12`}
    >
      <input
        type="text"
        bind:value={$selectedItems}
        placeholder="Filter items here.."
        class="p-5 w-full rounded-md focus:outline-none shadow-lg"
      />
      <button
        on:click={clearFilters}
        class={`${
          $selectedItems.length > 0 ? 'block' : 'hidden'
        } absolute top-5 right-16 text-sm font-bold cursor-pointer hover:text-cstm-primary-desaturated-dark-cyan hover:underline`}
      >
        Clear
      </button>
    </form>
    <div class="mt-10 px-8 md:max-w-6xl md:mx-auto">
      {#each filteredListings as listing}
        <ListingItem {listing} />
      {/each}
    </div>
  </div>
</main>
