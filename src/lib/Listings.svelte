<script>
  import { fade, slide } from 'svelte/transition'
  import listingsData from '../../data.json'
  import ListingItem from './ListingItem.svelte'
  import { selectedItems } from './stores'

  let animate = true

  let filteredListings = []

  const clearFilters = () => {
    $selectedItems = []
  }

  const removeSelectedItem = (item) => {
    $selectedItems = $selectedItems.filter(
      (selectedItem) => selectedItem !== item
    )
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

<main class="flex-1">
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
    <div class="mx-8 relative">
      <div
        class={`${
          $selectedItems.length === 0 ? 'invisible' : ''
        } bg-white flex justify-between items-center max-w-5xl mx-auto p-5 rounded-lg md:absolute -translate-y-8 w-full left-0 right-0`}
      >
        <div class="flex flex-wrap gap-3">
          {#if animate}
            {#each $selectedItems as item}
              <div transition:fade class="flex">
                <span
                  class="bg-cstm-neutral-light-grayish-cyan-fltr px-2 pt-2 pb-1 text-cstm-primary-desaturated-dark-cyan font-bold rounded-l-md"
                  >{item}</span
                >
                <button
                  on:click|preventDefault={() => removeSelectedItem(item)}
                  class="bg-cstm-primary-desaturated-dark-cyan flex items-center
                  h-full px-2 rounded-r-md"
                >
                  <img src="/assets/icon-remove.svg" alt="remove" />
                </button>
              </div>
            {/each}
          {/if}
        </div>
        <div>
          <button
            on:click={clearFilters}
            class={`${
              $selectedItems.length > 0 ? 'block' : 'hidden'
            }  text-sm font-bold cursor-pointer hover:text-cstm-primary-desaturated-dark-cyan hover:underline`}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
    <div class="mt-10 md:mt-20 px-8 md:max-w-6xl md:mx-auto">
      {#if animate}
        {#each filteredListings as listing}
          <div transition:slide>
            <ListingItem {listing} />
          </div>
        {/each}
      {/if}
    </div>
  </div>
</main>
