<script>
  export let listing
</script>

<div>
  <div
    class={`bg-white p-5 md:p-8 mb-10 rounded-lg shadow-xl md:flex md:justify-between md:items-center ${
      listing.featured === true
        ? 'border-l-[5px] border-cstm-primary-desaturated-dark-cyan'
        : ''
    }`}
  >
    <div class="md:flex md:items-center md:gap-5">
      <!-- company logo -->
      <img
        src={listing.logo}
        alt={`${listing.company} company's logo`}
        class="w-12 md:w-24 -translate-y-10 md:translate-y-0"
      />
      <div>
        <div class="flex items-center -mt-5 md:mt-0 mb-3">
          <!-- company name -->
          <p class="text-cstm-primary-desaturated-dark-cyan font-bold mr-4">
            {listing.company}
          </p>
          <div class="flex justify-start items-center gap-2">
            <!-- is listing new? -->
            <span
              class={`${
                listing.new === true ? 'block' : 'hidden'
              } bg-cstm-primary-desaturated-dark-cyan text-white uppercase text-xs rounded-full px-3 pt-2 pb-1`}
              >{listing.new === true ? 'New!' : null}</span
            >
            <!-- is listing featured? -->
            <span
              class={`${
                listing.featured === true ? 'block' : 'hidden'
              } bg-cstm-neutral-very-dark-grayish-cyan text-white uppercase text-xs rounded-full px-3 pt-2 pb-1`}
              >{listing.featured === true ? 'Featured' : null}</span
            >
          </div>
        </div>
        <!-- listing position -->
        <p class="font-bold mb-1 md:text-lg">{listing.position}</p>
        <div
          class="flex justify-start items-center gap-2 text-xs md:text-sm text-cstm-neutral-dark-grayish-cyan mb-5 md:mb-0"
        >
          <div class="flex justify-start items-center gap-2">
            <!-- listing posted at -->
            <p>{listing.postedAt}</p>
            <span>&#8226;</span>
          </div>
          <div class="flex items-center gap-2">
            <!-- listing contract type -->
            <p>{listing.contract}</p>
            <span>&#8226;</span>
          </div>
          <div class="flex items-center">
            <!-- listing location -->
            <p>{listing.location}</p>
          </div>
        </div>
        <hr class="mb-5 md:hidden" />
      </div>
    </div>
    <span
      class="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-self-end"
    >
      <!-- listing role -->
      <span
        class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
        >{listing.role}</span
      >
      <!-- listing level -->
      <span
        class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
        >{listing.level}</span
      >
      <!-- listing languages -->
      <span class="flex flex-wrap items-center gap-x-4 gap-y-2">
        {#each listing.languages as language}
          <span
            class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
            >{language}
          </span>
        {/each}
      </span>
      <!-- listing tools -->
      <span class="flex flex-wrap items-center gap-x-4 gap-y-2">
        {#each listing.tools as tool}
          <span
            class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
            >{tool}
          </span>
        {/each}
      </span>
    </span>
  </div>
</div>
