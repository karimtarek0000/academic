<template>
  <section
    role="zoom-meetings"
    class="
      zoom-meetings
      space-between-slides
      radius-60
      padding-top-45
      set-padding
      margin-top-50
    "
  >
    <!--  -->
    <Heading h5="تعلم أولا" h2="اجتماعات زووم" />
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
        <div slot="part3" class="col">
          <BtnCard
            title="انضم الى الاجتماع"
            class="
              bg-Voodoo
              text-12
              width-136
              height-41
              text-light
              btn-Voodoo
              mx-auto
              radius-18
            "
          />
        </div>
      </Card>
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import BtnCard from '@/components/BtnCard.vue'
import sliderSetting from '@/mixins/sliderSetting.js'
export default {
  name: 'SectionZoomMeetings',
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
