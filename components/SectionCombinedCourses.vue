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
    <Slider v-if="s.length" class="padding-y-20">
      <Card
        v-for="sd in s"
        :key="sd"
        dir="rtl"
        class="margin-y-20"
        :time="true"
      />
    </Slider>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'SectionCombinedCourses',
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
