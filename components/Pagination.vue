<template>
  <div class="pagination">
    <!-- 1) - PAGINATION BTN PREV -->
    <div
      v-if="statusPrev"
      class="pagination__btn pagination__btn--prev"
      @click="prevBtn"
    >
      <slot name="prev">prev</slot>
    </div>
    <!-- 2) - PAGINATION PAGINATOR -->
    <div class="pagination__paginator">
      <!--  -->
      <ul class="pagination__paginator__sub">
        <li
          v-for="(page, index) in createPages"
          :key="index + 1"
          :class="[
            'pagination__paginator__pagi',
            { 'pagination__paginator__pagi--active': getCurrentPage == page },
          ]"
          @click="getNumPage(page)"
        >
          {{ page }}
        </li>
      </ul>
    </div>
    <!-- 3) - PAGINATION BTN NEXT -->
    <div
      v-if="statusNext"
      class="pagination__btn pagination__btn--next"
      @click="nextBtn"
    >
      <slot name="next">next</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: [String, Number],
      default: 1,
    },
    pageRang: {
      type: Number,
      default: 2,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      getPageRang: this.pageRang,
      getCurrentPage: this.$route.query.page || this.currentPage,
    }
  },
  computed: {
    // 1) - CONVERT CURRENT TO NUMBER
    convertCurrentToNumber() {
      return +this.getCurrentPage
    },
    // 2) - COUNT PAGES
    createPages() {
      // 1) - Storage all pages
      const pages = []
      // 2) - Will be loop range from range start to range end
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      // 3) - Return pages
      return pages
    },
    // RANGE START
    rangeStart() {
      //
      const start = this.convertCurrentToNumber - this.getPageRang
      //
      return start > 0 ? start : 1
    },
    // RANGE END
    rangeEnd() {
      //
      const end = this.convertCurrentToNumber + this.getPageRang
      //
      return end < this.totalPages ? end : this.totalPages
    },
    // STATUS NEXT
    statusNext() {
      return this.convertCurrentToNumber < this.totalPages
    },
    // STATUS PREV
    statusPrev() {
      return this.convertCurrentToNumber > 1
    },
    // TOTAL PAGES
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
  },
  watch: {
    currentPage(value) {
      // 1) - Change new value from current page to get current page
      this.getCurrentPage = value
      // 2) - Change query page
      this.$router.push({ query: { page: value } })
    },
  },
  mounted() {
    // Emit with current page
    this.getNumPage(this.getCurrentPage)
    // If window inner width less than or equal 600px will set pageRang equal 1
    if (window.innerWidth <= 600) this.getPageRang = 1
  },
  methods: {
    // NEXT BTN
    nextBtn() {
      return this.getNumPage(this.convertCurrentToNumber + 1)
    },
    // PREV BTN
    prevBtn() {
      return this.getNumPage(this.convertCurrentToNumber - 1)
    },
    // GET NUM PAGE
    getNumPage(page) {
      return this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
/////////////////////////////////
/// Maps
// 1
$background_pagination: (
  pagi: #f3f3f3,
  nextAndPrev: #f5f5f5,
);

// 2
$text-color_pagination: (
  nuActive: black,
  active: black,
);

/////////////////////////////////
/// Global classes
// 1
%global_pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  user-select: none;
  cursor: pointer;
}

// 2
%global_pagination_width {
  width: 41px;
  height: 39px;

  // Responsive
  @media (max-width: 900px) {
    width: 40px;
    height: 35px;
  }
}

/////////////////////////////////
// PAGINATION
.pagination {
  display: flex;
  justify-content: center;
  max-width: 100%;
  //
  & ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  // PAGINATOR
  &__paginator {
    list-style: none;
    font-size: 1.6rem;
    // PAGI
    &__pagi {
      @extend %global_pagination;
      @extend %global_pagination_width;
      background-color: transparent;
      color: map-get($text-color_pagination, unActive);
      font-weight: 300;
      transition: all 0.2s ease;
      font-size: 19px;

      ///////////////////////////
      // Responsive
      @media (max-width: 900px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }

      // AND NEW PROPERTY ACTIVE
      &--active {
        background-color: map-get($background_pagination, pagi);
        font-weight: 400;
        color: map-get($text-color_pagination, active);
        pointer-events: none;
      }

      // ACTIVE AND HOVER
      &:hover {
        //
        @media (hover: hover) {
          background-color: lighten(map-get($background_pagination, pagi), 1%);
          color: map-get($text-color_pagination, active);
        }
      }
    }
    // SUB
    &__sub {
      // NOT FIRST OF TYPE
      & li {
        margin-left: 10px;

        // Responsive
        @media (max-width: 900px) {
          margin-left: 5px;
        }
      }
    }
  }
  // BTN PREV AND BTN NEXT
  &__btn {
    @extend %global_pagination;
    padding: 0 10px;
    margin: 0 10px;
    background-color: map-get($background_pagination, nextAndPrev);
    text-transform: capitalize;
    transition: all 0.3s;

    // Responsive
    @media (max-width: 900px) {
      margin: 0 5px;
    }
    &--next,
    &--prev {
      background-color: transparent;
    }
    // HOVER
    &:hover {
      //
      @media (hover: hover) {
        background-color: lighten(
          map-get($background_pagination, nextAndPrev),
          1%
        );
        color: map-get($text-color_pagination, unActive);
      }
    }
  }
}
</style>
