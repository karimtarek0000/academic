<template>
  <section
    role="special-courses"
    class="
      special-courses
      bg-alabaster
      space-between-slides
      translate-up-slider-action
      radius-60
      padding-top-45
      set-padding
      margin-top-50
    "
  >
    <!--  -->
    <Heading h5="تعلم أولا" h2="الكورسات المميزة" />
    <!--  -->
    <Slider
      v-if="specialCoursesData.length !== 0"
      class="padding-y-20"
      :add-settings="settings"
    >
      <Card
        v-for="data in specialCoursesData"
        :key="data"
        dir="rtl"
        class="margin-y-20"
      >
        <template slot="part2">
          <div class="col d-flex align-items-center">
            <GSvg
              class="svg-20"
              name-icon="star-with-five-points"
              title="التقييم"
            />
            <span role="rating" class="margin-start-5 text-13">4.5</span>
            <span class="text-picton text-12 weight-br-300 margin-start-5"
              >(400)</span
            >
          </div>
          <!--  -->
          <div class="col d-flex align-items-center">
            <GSvg
              class="svg-20 fill-coral"
              name-icon="notebook"
              title="المحاضرة"
            />
            <p role="number-lecture" class="margin-start-5 margin-0 text-13">
              <span>23</span>
              <span>محاضرة</span>
            </p>
          </div>
        </template>
        <!--  -->
        <template slot="part3">
          <!--  -->
          <div class="col d-flex align-items-center">
            <p
              role="new-price"
              class="d-flex text-15 text-coral margin-0 margin-end-10"
            >
              <span>S.R</span> <span class="margin-x-2">50</span>
            </p>
            <del
              role="discount"
              class="d-flex text-silver text-14 weight-br-300"
            >
              <span>S.R</span>
              <span class="margin-x-2">50</span>
            </del>
          </div>
          <div class="col flex-grow-0">
            <AppBtn
              class="bg-voodoo set-w-h text-12 text-light btn-voodoo radius-18"
            >
              أضف الى السلة
            </AppBtn>
          </div>
        </template>
      </Card>
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import sliderSetting from '@/mixins/sliderSetting.js'
import AppBtn from '~/components/AppBtn.vue'
export default {
  name: 'SpecialCoursesSection',
  components: {
    Card,
    AppBtn,
  },
  mixins: [sliderSetting],
  inject: ['specialCoursesData'],
}
</script>

<style scoped>
.set-w-h {
  width: 11.1rem;
  height: 4rem;
}
</style>
