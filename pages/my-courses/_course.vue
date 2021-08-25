<template>
  <main class="course-user">
    <HeaderCousreUser>
      <template slot="video">
        <Video
          style="width: 55.6rem"
          class="col-12 col-lg-5"
          @openVideo="toggleBackDrop = $event"
        />
      </template>
      <template slot="progress">
        <CourseProgressBar class="col-11" />
      </template>
      <template slot="btn">
        <BtnPrimary
          style="width: 29.4rem; height: 6rem"
          class="
            btn-emerald
            radius-18
            text-light text-14
            bg-emerald
            margin-top-40
          "
        >
          الاستمرار الى المحاضرة
        </BtnPrimary>
      </template>
    </HeaderCousreUser>
    <!--  -->
    <div
      class="bg-Voodoo radius-30 margin-bottom-50 md-padding-y-20 padding-y-0"
    >
      <div
        class="
          row
          g-0
          custom-container
          justify-content-between
          align-items-center
        "
        style="min-height: 9.9rem"
      >
        <div
          class="
            col-12 col-md-6
            d-flex
            flex-column flex-md-row
            align-items-center
          "
        >
          <p
            role="question"
            class="text-18 text-light md-margin-end-0 margin-end-20"
          >
            هل قمت باكمال الدورة ؟
          </p>
          <!--  -->
          <BtnPrimary
            style="width: 17.4rem; height: 5rem"
            class="btn-chardonnay text-14 text-light bg-chardonnay radius-14"
          >
            <span>احصل على الشهادة</span>
            <GSvg
              class="svg-22 fill-light"
              name-icon="arrow_drop_down_line__1"
            />
          </BtnPrimary>
        </div>
        <div class="col-12 col-md-2 flex-grow-0 md-margin-top-20">
          <BtnGo
            style="width: 17.4rem; height: 5rem"
            class="text-14 m-x-auto text-light btn-voodoo-light radius-14"
            to="index"
          >
            <span>تفاصيل الدورة</span>
            <GSvg class="svg-20 fill-light" name-icon="angle-left" />
          </BtnGo>
        </div>
      </div>
    </div>
    <!--  -->
    <NavbarSelected class="margin-bottom-50">
      <template>
        <li
          v-for="item in itemsNavbarSelected"
          :key="item.name"
          style="width: 16.7rem; height: 6.5rem"
          :class="[
            'navbar-selected__item overflow-hidden user-select-none cursor-pointer d-flex align-items-center justify-content-center text-16 flex-shrink-0',
            {
              'weight-br-400 text-coral': item.name === selected.name,
            },
            {
              'weight-br-300': item.name !== selected.name,
            },
          ]"
          @click="moveActive($event, item)"
          v-text="item.name"
        />
        <span
          ref="navbar__active"
          class="navbar-selected__active radius-18 bg-chardon position-absolute"
          style="width: 16.7rem; height: 6.5rem"
        />
      </template>
    </NavbarSelected>
    <!--  -->
    <article class="custom-container">
      <component :is="selected.compName">
        <UserCourseOverview />
        <UserCourseContent />
      </component>
      <!--  -->
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
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.course) && params.course
  },
  asyncData() {
    return {
      courseContent: [
        {
          id: 0,
          title: 'المقدمة',
          lectures: 12,
          time: 32,
        },
        {
          id: 1,
          title: 'الباب الاول',
          lectures: 12,
          time: 32,
        },
        {
          id: 2,
          title: 'الباب الثاني',
          lectures: 12,
          time: 32,
        },
        {
          id: 3,
          title: 'الباب الثالث',
          lectures: 12,
          time: 32,
        },
      ],
    }
  },
  provide() {
    return {
      progress: '70%',
      courseContent: this.courseContent,
    }
  },
  data() {
    return {
      itemsNavbarSelected: [
        {
          name: 'نظرة عامة',
          compName: 'UserCourseOverview',
        },
        {
          name: 'محتوى المادة',
          compName: 'UserCourseContent',
        },
        {
          name: 'أسئلة وأجوبة',
          compName: 'UserCourseOverview',
        },
        {
          name: 'اختبار',
          compName: 'UserCourseOverview',
        },
        {
          name: 'اعلانات',
          compName: 'UserCourseOverview',
        },
        {
          name: 'مهمة',
          compName: 'UserCourseOverview',
        },
        {
          name: 'موعد',
          compName: 'UserCourseOverview',
        },
      ],
      toggleBackDrop: false,
      selected: {
        name: 'نظرة عامة',
        compName: 'UserCourseOverview',
      },
      options: {
        ratio: '16:9',
      },
    }
  },
  mounted() {
    const offsetLeftFirstElement = document.querySelectorAll(
      '.navbar-selected__item'
    )[0].offsetLeft
    document.querySelector(
      '.navbar-selected__active'
    ).style.left = `${offsetLeftFirstElement}px`
  },
  methods: {
    moveActive(e, item) {
      const { offsetLeft } = e.target
      this.selected = item
      this.$refs.navbar__active.style.left = `${offsetLeft}px`
    },
  },
  head() {
    return {
      title: `${this.$route.params.course}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'كورس',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.course-user {
  //
  .navbar-selected {
    //
    &__wrapper {
      border: 1px solid var(--gallery);
      border-radius: 1.8rem !important;
    }
    //
    &__item {
      //
      @include DetectHover {
        &:hover {
          color: var(--coral);
        }
      }
    }
    //
    &__active {
      top: 0;
      z-index: -1;
      transition: left 0.6s cubic-bezier(0.66, 0.36, 0.58, 0.57);
      will-change: left;
    }
  }
  .progress {
    span {
      background-color: var(--coral);
    }
  }
}
</style>
