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
        justify-content-between
        align-items-center
        set-padding
        padding-y-20
        margin-bottom-10
        d-none d-md-flex
      "
    >
      <!--  -->
      <div
        role="number-search"
        class="col col-lg-3 d-flex align-items-center text-16 text-dark"
      >
        <span class="margin-end-5">200</span>
        <span>نتائج البحث</span>
      </div>
      <!--  -->
      <div class="col col-lg-6 sort">
        <div class="row justify-content-end align-items-center">
          <!--  -->
          <SelectBox
            :options="[1, 2, 3]"
            class="
              col-3
              border-gallery
              text-14
              padding-y-10
              radius-14
              padding-start-20
              margin-end-10
            "
          />
          <!--  -->
          <SelectBox
            :options="[1, 2, 3]"
            class="
              col-3
              border-gallery
              text-14
              padding-y-10
              radius-14
              padding-start-20
            "
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="
        row
        padding-y-10
        lg-padding-x-10
        justify-content-between
        custom-container
      "
    >
      <!--  -->
      <div class="col col-sm-3">
        <!--  -->
        <AsideFilter />
      </div>
      <!--  -->
      <div class="col-12 col-sm-8">
        <!--  -->
        <div class="row">
          <CourseCard
            v-for="t in 3"
            :key="t"
            class="col-sm-12 col-md-12 margin-bottom-20"
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
