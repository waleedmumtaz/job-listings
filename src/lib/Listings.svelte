<script>
  import Tags from 'svelte-tags-input'
  import listingsData from '../../data.json'
  import ListingItem from './listing-item.svelte'
  import { selectedItems } from './stores'

  let selectedTag = ''

  function handleTags(event) {
    selectedTag = event.detail.tags
    console.log('tag', selectedTag)
  }

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
    <div
      class="custom-tags-class max-w-5xl mx-auto -translate-y-8 relative px-12"
    >
      <Tags on:tags={handleTags} />
      <button
        on:click={clearFilters}
        class={`absolute top-6 right-16 text-sm font-bold cursor-pointer hover:text-cstm-primary-desaturated-dark-cyan hover:underline`}
      >
        Clear
      </button>
    </div>
    <!-- <form
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
        readonly
      />
      <button
        on:click={clearFilters}
        class={`${
          $selectedItems.length > 0 ? 'block' : 'hidden'
        } absolute top-5 right-16 text-sm font-bold cursor-pointer hover:text-cstm-primary-desaturated-dark-cyan hover:underline`}
      >
        Clear
      </button>
    </form> -->
    <div class="mt-10 px-8 md:max-w-6xl md:mx-auto">
      {#each filteredListings as listing}
        <ListingItem {listing} />
      {/each}
    </div>
  </div>
</main>

<style>
  .custom-tags-class :global(.svelte-tags-input-layout) {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .custom-tags-class :global(.svelte-tags-input-layout:hover),
  .custom-tags-class :global(.svelte-tags-input-layout:focus) {
    border: none;
  }

  .custom-tags-class :global(.svelte-tags-input) {
    font-size: 1rem;
  }

  .custom-tags-class :global(.svelte-tags-input-tag) {
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    font-family: 'Spartan', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    padding-inline-start: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .custom-tags-class :global(.svelte-tags-input-tag-remove) {
    background-color: hsl(180, 29%, 50%);
    color: white;
    padding-top: 0.25rem;
    padding-inline: 0.5rem;
    font-size: 1.25rem;
    border-end-end-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .custom-tags-class :global(.svelte-tags-input-tag-remove:hover) {
    background-color: black;
  }
</style>
