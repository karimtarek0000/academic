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
    <Slider v-if="s.length" class="padding-y-20">
      <Card
        v-for="sd in s"
        :key="sd"
        dir="rtl"
        v-bind="{ time: true, btnMeeting: true }"
        class="margin-y-20"
      />
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'SectionZoomMeetings',
  components: {
    Card,
  },
  data() {
    return {
      s: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style></style>
