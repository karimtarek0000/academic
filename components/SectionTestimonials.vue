<template>
  <section
    role="zoom-meetings"
    class="
      zoom-meetings
      space-between-slides
      radius-60
      padding-top-45
      set-padding
      xlg-margin-top-10
      margin-top-50
    "
  >
    <!--  -->
    <Heading h5="عملاء سعيدة" h2="آراء العملاء" />
    <!--  -->
    <!-- <Slider v-if="s.length">
      <CardTestimonials
        v-for="sd in s"
        :key="sd"
        dir="rtl"
        class="margin-y-20"
      />
    </Slider> -->
    <!--  -->
    <Slider v-if="s.length" class="padding-y-20">
      <CardTestimonials
        v-for="sd in s"
        :key="sd"
        dir="rtl"
        class="margin-y-20"
      />
    </Slider>
  </section>
</template>

<script>
import CardTestimonials from '@/components/CardTestimonials.vue'
export default {
  name: 'SectionTestimonials',
  components: {
    CardTestimonials,
  },
  data() {
    return {
      s: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style></style>
