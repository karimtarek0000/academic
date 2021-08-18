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
    <!--  -->
    <NavbarSelected v-model="selected" @changeSelected="s" />
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
      itemsNavbarSelected: [
        'نظرة عامة',
        'محتوى المادة',
        'متطلبات الدورة',
        'آراء الطلاب',
        'المدرب',
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
      items: this.itemsNavbarSelected,
    }
  },
  data() {
    return {
      rating: 4,
      selected: 'نظرة عامة',
    }
  },
  methods: {
    s(d) {},
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

.navbar-selected {
  //
  &__wrapper {
    border: 1px solid var(--gallery);
    border-radius: 1.8rem !important;

    @media only screen and (min-width: 768px) {
      margin-top: -7rem;
    }
  }
  //
  &__item {
    width: 24.2rem;
    height: 6.5rem;
    font-size: 16px;
    //
    @include DetectHover {
      &:hover {
        background-color: var(--chardon);
        color: var(--coral);
      }
    }
  }

  //
  &__active {
    background-color: var(--chardon);
    color: var(--coral);
  }
}
</style>
