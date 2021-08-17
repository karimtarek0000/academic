<template>
  <main>
    <!--  -->
    <HeaderCoursePage />
    <!--  -->
    <SectionCourseInformation>
      <Booking
        class="
          col-12 col-lg-3
          course__set-width-booking
          bg-light
          md-margin-top-20 md-margin-start-0
          margin-start-30
        "
      />
    </SectionCourseInformation>
  </main>
</template>

<script>
export default {
  name: 'Course',
  asyncData() {
    return {
      courseContent: [44, 75, 75],
      bookingStatic: [
        {
          title: 'محاضرة',
          icon: 'movie-fill',
        },
        {
          title: 'مقال',
          icon: 'file-list-2-fill-1',
        },
        {
          title: 'مصادر للتحميل',
          icon: 'file-download-fill',
        },
      ],
    }
  },
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.courseName) && params.courseName
  },
  provide() {
    return {
      rating: this.rating,
      courseContent: this.courseContent,
      bookingStatic: this.bookingStatic,
    }
  },
  data() {
    return {
      rating: 4,
    }
  },
  head() {
    return {
      title: `${this.$route.params.courseName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'اختلط الأمر كثيراً عند المصممين وخصوصاً المبتدئين منهم رغم أن فن الكتابة أو فن الخط معروف لدى العرب',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.course {
  //
  &__play {
    @include position('allCenter');
  }
  //
  &__instructor {
    @include position('lb', $moveL: '3rem', $moveB: '2rem');
  }
  //
  &__info {
    @media only screen and (min-width: 768px) {
      transform: translateY(-10rem);
    }
  }
  //
  &__set-width-video {
    width: 55.1rem;
  }
  //
  &__set-width-booking {
    width: 35.2rem;
  }
}
</style>
