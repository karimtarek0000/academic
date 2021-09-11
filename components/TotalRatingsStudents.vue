<template>
  <div class="row rating justify-content-center align-items-center">
    <div class="col flex-grow-0 d-flex flex-column align-items-center">
      <figure
        class="
          margin-bottom-0
          rating__width-total
          text-29 text-light
          bg-voodoo
          radius-30
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <span v-text="rating" />
      </figure>
      <!--  -->
      <client-only>
        <StarsRatings
          :increment="1"
          :rating="floor(rating)"
          :round-start-rating="true"
          :show-rating="false"
          :read-only="true"
          :rounded-corners="true"
          :star-size="20"
          active-color="#FEC108"
          inactive-color="#ffff"
          border-color="#FEC108"
          :border-width="1"
          :padding="0"
          class="margin-y-10"
        >
          <template v-slot:screen-reader="slotProps">
            This product has been rated {{ slotProps.rating }} out of
            {{ slotProps.stars }} stars
          </template>
        </StarsRatings>
      </client-only>
    </div>
    <!--  -->
    <div class="col flex-grow-1 margin-start-30">
      <div v-for="i in items" :key="i.rate" class="row g-0 align-items-center">
        <!--  -->
        <div
          role="progress"
          class="
            col
            flex-grow-1
            progress
            position-relative
            radius-21
            margin-top-5
          "
        >
          <span
            class="position-absolute radius-21 bg-voodoo"
            :style="`width: ${i.per}`"
          ></span>
        </div>
        <!--  -->
        <client-only>
          <StarsRatings
            :increment="1"
            :rating="i.rate"
            :round-start-rating="false"
            :show-rating="false"
            :read-only="true"
            :rounded-corners="true"
            :star-size="14"
            active-color="#FEC108"
            inactive-color="#ffff"
            border-color="#FEC108"
            :border-width="1"
            :padding="0"
            class="col flex-grow-0 margin-y-10"
          />
        </client-only>
        <!--  -->
        <p
          class="
            col-1
            flex-grow-0
            text-12
            weight-br-300
            margin-top-5
            padding-x-0
          "
          v-text="i.per"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalRatingsStudents',
  data() {
    return {
      rating: 4.5,
      items: [
        {
          rate: 5,
          per: '80%',
        },
        {
          rate: 4,
          per: '20%',
        },
        {
          rate: 3,
          per: '30%',
        },
        {
          rate: 2,
          per: '35%',
        },
        {
          rate: 1,
          per: '5%',
        },
      ],
    }
  },
  methods: {
    floor(num) {
      return Math.floor(num)
    },
  },
}
</script>

<style lang="scss">
.rating {
  max-width: 818px;
  //
  &__width-total {
    width: 11.3rem;
    height: 10rem;
  }

  .progress {
    width: 49rem;
    height: 9px;
    background-color: var(--athens);

    span {
      right: 0;
      top: 0;
      height: 100%;
    }
  }
}
</style>
