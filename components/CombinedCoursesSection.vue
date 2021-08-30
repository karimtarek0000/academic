<template>
  <section
    role="combined-courses"
    class="
      combined-courses
      space-between-slides
      translate-up-slider-action
      bg-alabaster
      radius-60
      padding-top-45
      set-padding
      margin-top-50
    "
  >
    <!--  -->
    <Heading h5="تعلم أولا" h2="كورسات مجمعة" />
    <!--  -->
    <Slider v-if="s.length" class="padding-y-20" :add-settings="settings">
      <Card v-for="sd in s" :key="sd" dir="rtl" class="margin-y-20">
        <div slot="part2" class="col d-flex align-items-center">
          <!--  -->
          <div class="margin-end-5 d-flex align-items-center">
            <GSvg class="svg-20" name-icon="time-line" title="الوقت" />
            <span class="text-silver text-11 margin-start-5">يبدا</span>
          </div>
          <!--  -->
          <div class="d-flex align-items-center text-dark">
            <span role="date">20/8/2020</span>
            <span class="margin-x-5">|</span>
            <span role="time">12:00AM</span>
          </div>
        </div>
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
            <BtnPrimary
              class="
                bg-Voodoo
                text-12
                width-116
                height-41
                text-light
                btn-Voodoo
                radius-18
              "
            >
              أضف الى السلة
            </BtnPrimary>
          </div>
        </template>
      </Card>
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import sliderSetting from '@/mixins/sliderSetting.js'
import BtnPrimary from '~/components/BtnPrimary.vue'
export default {
  name: 'CombinedCoursesSection',
  components: {
    Card,
    BtnPrimary,
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
