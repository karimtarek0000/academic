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
    <Slider v-if="s.length" class="padding-y-20" :add-settings="settings">
      <Card v-for="sd in s" :key="sd" dir="rtl" class="margin-y-20">
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
              <span>S.R</span> <span class="m-s-2">50</span>
            </p>
            <del
              role="discount"
              class="d-flex text-silver text-14 weight-br-300"
            >
              <span>S.R</span>
              <span class="m-s-2">50</span>
            </del>
          </div>
          <div class="col flex-grow-0">
            <BtnCard
              class="
                bg-Voodoo
                text-12
                width-116
                height-41
                text-light
                btn-Voodoo
                radius-18
              "
            />
          </div>
        </template>
      </Card>
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import BtnCard from '@/components/BtnCard.vue'
import sliderSetting from '@/mixins/sliderSetting.js'
export default {
  name: 'SectionSpecialCourses',
  components: {
    Card,
    BtnCard,
  },
  mixins: [sliderSetting],
  data() {
    return {
      s: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style></style>
