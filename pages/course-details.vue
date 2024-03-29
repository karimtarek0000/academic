<template>
  <main class="course">
    <!--  -->
    <HeaderCoursePage />
    <!--  -->
    <CourseInformationSection>
      <template slot="video">
        <Video class="col-12 col-lg-5" @openVideo="toggleBackDrop = $event" />
      </template>
      <template slot="booking">
        <Booking
          class="
            col-12 col-lg-3
            course__set-width-booking
            bg-light
            md-margin-top-20 md-margin-start-0
            margin-start-30
          "
        />
      </template>
    </CourseInformationSection>
    <!--  -->
    <AppNavbarToGo>
      <template>
        <li
          v-for="item in itemsAppNavbarToGo"
          :key="item.name"
          style="height: 6.5rem"
          :class="[
            'navbar-selected__item overflow-hidden radius-18 user-select-none cursor-pointer d-flex align-items-center justify-content-center text-13 flex-shrink-0 weight-br-300',
            {
              'navbar-selected__active': item.name === selected,
            },
          ]"
        >
          <a
            v-smooth-scroll
            class="
              text-dark
              d-flex
              align-items-center
              justify-content-center
              width-100
              height-100
              text-16
            "
            :href="`#${item.id}`"
            v-text="item.name"
          />
        </li>
      </template>
    </AppNavbarToGo>
    <!--  -->
    <article class="custom-container">
      <Overview id="overview" class="padding-y-30 border-bottom-whiteDark" />
      <CourseDescription
        id="course-description"
        class="padding-top-30 padding-bottom-45 border-bottom-whiteDark"
      />
      <CourseContent
        id="course-description"
        class="padding-top-30 padding-bottom-45 border-bottom-whiteDark"
      />
      <CourseRequirements
        id="course-requirements"
        class="padding-y-30 border-bottom-whiteDark"
      />
      <StudentsOpinion
        id="students-opinion"
        class="padding-y-30 border-bottom-whiteDark"
      />
      <StudentReviews class="padding-y-30 border-bottom-whiteDark" />
      <AboutTeacher
        id="about-teacher"
        class="padding-y-30 border-bottom-whiteDark"
      >
        <AppBtnGo
          style="width: 14.8rem; height: 4.1rem"
          class="btn-voodoo text-12 text-light margin-end-auto margin-top-20"
          to="index"
        >
          تعرف أكثر
        </AppBtnGo>
      </AboutTeacher>
      <MoreCourses class="padding-y-30" />
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
    <!--  -->
    <QuickAddInMobile v-if="isTablet" />
  </main>
</template>

<script>
export default {
  name: 'CourseDetails',
  layout: 'site',
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
      itemsAppNavbarToGo: [
        {
          name: 'نظرة عامة',
          id: 'overview',
        },
        {
          name: 'محتوى المادة',
          id: 'course-description',
        },
        {
          name: 'متطلبات الدورة',
          id: 'course-requirements',
        },
        {
          name: 'آراء الطلاب',
          id: 'students-opinion',
        },
        {
          name: 'المدرب',
          id: 'about-teacher',
        },
      ],
      socialMedia: ['facebook', 'twitter', 'linkedin', 'whatsapp'],
      wrapperCourseContent: {
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
      },
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
      wrapperCourseContent: this.wrapperCourseContent,
      wrapperSelectAll: 0,
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
  computed: {
    isTablet() {
      return this.$mq === 'tablet'
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
.course {
  //
  &__info {
    @media only screen and (min-width: 48em) {
      transform: translateY(-10rem);
    }
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

      @media only screen and (min-width: 48em) {
        margin-top: -7rem;
      }
    }
    //
    &__item {
      //
      @include DetectHover {
        &:hover a {
          background-color: var(--chardon);
          color: var(--coral);
        }
      }
    }

    &__item,
    &__active {
      width: calc(108.5rem / 5);
    }

    //
    &__active a {
      background-color: var(--chardon);
      color: var(--coral);
    }
  }
}
</style>
