<template>
  <main role="courses">
    <AppPagesHeader>
      <template slot="head">قسم التصميم</template>
      <template slot="desc">
        هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر
        تصميم أو مجموعة من التصاميم</template
      >
    </AppPagesHeader>
    <!--  -->
    <CoursesSliderSection />
    <!--  -->
    <SubSectionsSection :items="items" />
    <!--  -->
    <div
      class="
        row
        justify-content-center justify-content-md-between
        align-items-center
        padding-y-20
        custom-container
        margin-bottom-5
      "
    >
      <!--  -->
      <div
        role="number-search"
        class="
          col-12 col-md-3
          d-flex
          justify-content-center justify-content-md-start
          align-items-center
          text-16 text-dark
        "
      >
        <span class="margin-end-5">200</span>
        <span>نتائج البحث</span>
      </div>
      <!--  -->
      <div class="col-12 col-md-6 md-margin-top-10 sort">
        <div
          class="
            row
            justify-content-center justify-content-md-end
            align-items-center
          "
        >
          <!--  -->
          <SelectBox
            :options="[1, 2, 3]"
            class="
              col-4 col-md-4
              border-gallery
              text-14
              padding-y-10
              radius-14
              padding-start-20
              margin-end-10
            "
            :value="selectBox1"
          />
          <!--  -->
          <SelectBox
            :options="[1, 2, 3]"
            class="
              col-4 col-md-4
              border-gallery
              text-14
              padding-y-10
              radius-14
              padding-start-20
            "
            :value="selectBox2"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <client-only>
      <AppBtn
        v-if="widthWindow"
        class="
          bg-light
          border-whiteDark-all
          margin-x-auto margin-bottom-10
          padding-y-10 padding-x-20
          radius-14
        "
        @clicked="toggleAside(true)"
      >
        <GSvg class="svg-20" name-icon="filter" title="فلتر" />
        <span class="text-14 margin-start-5">فلتر</span>
      </AppBtn>
    </client-only>
    <!--  -->
    <div
      class="
        row
        gx-2
        padding-y-10
        lg-padding-x-10
        justify-content-between
        custom-container
      "
    >
      <!--  -->
      <div class="col-12 col-sm-4">
        <client-only>
          <transition name="slide-right">
            <AppAsideFilter
              v-show="statusRender"
              style="width: 22rem; height: 100vh"
              class="padding-x-10"
            >
              <span
                class="
                  aside-filter__close
                  d-flex
                  align-items-center
                  justify-content-center
                  scale-1-animate
                  cursor-pointer
                  d-sm-none
                "
                @click="toggleAside(false)"
              >
                <GSvg class="svg-11" name-icon="close" title="اغلاق" />
              </span>
            </AppAsideFilter>
          </transition>
        </client-only>
      </div>
      <!--  -->
      <div class="col-12 col-sm-7 col-md-8">
        <!--  -->
        <div class="row">
          <CourseCard
            v-for="t in 3"
            :key="t"
            class="col-sm-12 col-md-12 padding-0 margin-bottom-20"
            :add-price="true"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Courses',
  layout: 'site',
  asyncData() {
    return {
      items: [
        {
          id: 0,
          name: 'ويب ديزاين',
          icon: 'web-design',
        },
        {
          id: 1,
          name: 'تصميم تجربة المستخدم',
          icon: 'wireframe',
        },
        {
          id: 2,
          name: 'جرافيك ديزابن',
          icon: 'pen',
        },
        {
          id: 3,
          name: 'موشن جرافيك',
          icon: 'clapperboard',
        },
      ],
    }
  },
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.categoryName) && params.categoryName
  },
  data() {
    return {
      selectBox1: '',
      selectBox2: '',
    }
  },
  computed: {
    toggleAsideFilter() {
      return this.$store.state.statusAsideFilter
    },
    widthWindow() {
      return process.client && window.innerWidth <= 576
    },
    statusRender() {
      return this.widthWindow ? this.toggleAsideFilter : true
    },
  },
  methods: {
    toggleAside(status) {
      this.$store.commit('asideFilter', status)
    },
  },
  head() {
    return {
      title: `${this.$route.params.categoryName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر تصميم أو مجموعة من التصاميم',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.sort {
  //
  .select-animate__action__text {
    font-size: 12px;
  }
}
</style>
