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
    <Slider v-if="s.length" class="padding-y-20">
      <Card v-for="sd in s" :key="sd" dir="rtl" class="margin-y-20" />
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'SectionSpecialCourses',
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
