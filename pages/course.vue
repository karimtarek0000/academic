<template>
  <main class="course">
    <!--  -->
    <HeaderCoursePage />
    <!--  -->
    <SectionCourseInformation @openVideo="toggleBackDrop = $event">
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
    <!--  -->
    <article class="custom-container">
      <Overview class="padding-y-30 border-botton-whiteDark" />
      <CourseDescription
        class="padding-top-30 padding-bottom-45 border-botton-whiteDark"
      />
      <CourseContent
        class="padding-top-30 padding-bottom-45 border-botton-whiteDark"
      />
      <CourseRequirements class="padding-y-30 border-botton-whiteDark" />
      <StudentsOpinion class="padding-y-30 border-botton-whiteDark" />
      <StudentReviews class="padding-y-30 border-botton-whiteDark" />
      <AboutTeacher class="padding-y-30 border-botton-whiteDark" />
    </article>
    <!--  -->
    <BackDrop
      :toggle="toggleBackDrop"
      @toggleBackDrop="toggleBackDrop = $event"
    >
      <div
        class="video__wrapper d-flex justify-content-center align-items-center"
        @click.stop
      >
        <vue-plyr :options="options" :autoplay="toggleBackDrop">
          <video controls crossorigin playsinline>
            <source size="720" src="~/assets/images/s.mp4" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </BackDrop>
  </main>
</template>

<script>
export default {
  name: 'Course',
  asyncData() {
    return {
      totalCourseContent: [44, 75, 75],
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
      socialMedia: ['facebook', 'twitter', 'linkedin', 'whatsapp'],
      courseContent: [
        {
          title: 'المقدمة',
          lectures: 12,
          time: 32,
        },
        {
          title: 'الباب الاول',
          lectures: 12,
          time: 32,
        },
        {
          title: 'الباب الثاني',
          lectures: 12,
          time: 32,
        },
        {
          title: 'الباب الثالث',
          lectures: 12,
          time: 32,
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
      totalCourseContent: this.totalCourseContent,
      bookingStatic: this.bookingStatic,
      items: this.itemsNavbarSelected,
      courseContent: this.courseContent,
      socialMedia: this.socialMedia,
    }
  },
  data() {
    return {
      rating: 4,
      selected: 'نظرة عامة',
      toggleBackDrop: false,
      options: {
        ratio: '16:9',
      },
    }
  },
  methods: {
    s(d) {},
    ss() {
      // eslint-disable-next-line no-console
      console.log('space')
    },
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
//
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

  //
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
  //
  .video__wrapper {
    min-width: 70vw;

    @media only screen and (max-width: 768px) {
      min-width: 100vw;
    }

    .plyr {
      min-width: 100%;
    }
  }
}
</style>
