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
    <Slider
      v-if="zoomMeetingsData.length !== 0"
      class="padding-y-20"
      :add-settings="settings"
    >
      <Card
        v-for="data in zoomMeetingsData"
        :key="data"
        dir="rtl"
        class="margin-y-20"
      >
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
          <AppBtn
            class="
              bg-voodoo
              set-w-h
              btn-voodoo
              text-12 text-light
              mx-auto
              radius-18
            "
          >
            انضم الى الاجتماع
          </AppBtn>
        </div>
      </Card>
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import sliderSetting from '@/mixins/sliderSetting.js'
import AppBtn from '~/components/AppBtn.vue'
export default {
  name: 'ZoomMeetingsSection',
  components: {
    Card,
    AppBtn,
  },
  mixins: [sliderSetting],
  inject: ['zoomMeetingsData'],
}
</script>

<style scoped>
.set-w-h {
  width: 13.6rem;
  height: 4.1rem;
}
</style>
