<template>
  <section class="courses">
    <Slider :add-settings="sliderSettings">
      <CourseCard v-for="s in ss" :key="s" dir="rtl" class="margin-y-20" />
    </Slider>
  </section>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
export default {
  name: 'SectionCoursesSlider',
  components: {
    CourseCard,
  },
  data() {
    return {
      ss: 6,
      sliderSettings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '300px',
        variableWidth: false,
        responsive: [
          {
            breakpoint: 542,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            },
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              centerPadding: '0px',
            },
          },
          {
            breakpoint: 842,
            settings: {
              centerPadding: '50px',
            },
          },
          {
            breakpoint: 1400,
            settings: {
              centerPadding: '100px',
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.courses {
  .slick-slide {
    padding: 0 10px;
  }
}
</style>
