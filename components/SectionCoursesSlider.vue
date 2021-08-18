<template>
  <section role="design-courses" class="courses">
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
        centerMode: true,
        centerPadding: '300px',
        variableWidth: false,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              centerPadding: '0px',
            },
          },
          {
            breakpoint: 843,
            settings: {
              centerPadding: '50px',
            },
          },
          {
            breakpoint: 990,
            settings: {
              centerPadding: '150px',
            },
          },
          {
            breakpoint: 1200,
            settings: {
              centerPadding: '200px',
            },
          },
          {
            breakpoint: 1300,
            settings: {
              centerPadding: '250px',
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
