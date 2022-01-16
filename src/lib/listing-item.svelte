<script>
  export let listing
</script>

<div>
  <div
    class={`bg-white p-5 mb-10 rounded-lg shadow-xl ${
      listing.featured === true
        ? 'border-l-[5px] border-cstm-primary-desaturated-dark-cyan'
        : ''
    }`}
  >
    <img
      src={listing.logo}
      alt={`${listing.company} company's logo`}
      class="w-12 -translate-y-10"
    />
    <div>
      <div class="flex items-center -mt-5 mb-3">
        <p class="text-cstm-primary-desaturated-dark-cyan font-bold mr-4">
          {listing.company}
        </p>
        <div class="flex justify-start items-center gap-2">
          <span
            class={`${
              listing.new === true ? 'block' : 'hidden'
            } bg-cstm-primary-desaturated-dark-cyan text-white uppercase text-xs rounded-full px-3 pt-2 pb-1`}
            >{listing.new === true ? 'New!' : null}</span
          >
          <span
            class={`${
              listing.featured === true ? 'block' : 'hidden'
            } bg-cstm-neutral-very-dark-grayish-cyan text-white uppercase text-xs rounded-full px-3 pt-2 pb-1`}
            >{listing.featured === true ? 'Featured' : null}</span
          >
        </div>
      </div>
      <p class="font-bold mb-1">{listing.position}</p>
      <div
        class="flex justify-start items-center gap-2 text-xs text-cstm-neutral-dark-grayish-cyan mb-5"
      >
        <div class="flex justify-start items-center gap-2">
          <p>{listing.postedAt}</p>
          <span>&#8226;</span>
        </div>
        <div class="flex items-center gap-2">
          <p>{listing.contract}</p>
          <span>&#8226;</span>
        </div>
        <div class="flex items-center">
          <p>{listing.location}</p>
        </div>
      </div>
      <hr class="mb-5" />
      <span
        class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
        >{listing.role}</span
      >
      <span
        class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
        >{listing.level}</span
      >
      <span
        class="bg-cstm-neutral-light-grayish-cyan-bg text-cstm-primary-desaturated-dark-cyan font-bold p-2 rounded-lg"
        >{listing.languages}</span
      >
    </div>
  </div>
</div>
