<template>
  <main class="course-user">
    <HeaderCousreUser>
      <template slot="video">
        <Video
          style="width: 55.6rem"
          class="col-12 col-lg-5"
          @openVideo="toggleBackDropVideo = $event"
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
          v-for="(item, index) in itemsNavbarSelected"
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
          @click="moveActive($event, item, index)"
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
      <transition :name="dirctionAnimate">
        <component
          :is="selected.compName"
          @addAnswer="toggleBackDropAddAnswer = $event"
          @addReport="toggleBackDropAddReport = $event"
        >
          <UserCourseOverview />
          <UserCourseContent />
          <UserQuestionAndAnswer />
        </component>
      </transition>
      <!--  -->
    </article>
    <!-- Video -->
    <BackDrop
      :toggle="toggleBackDropVideo"
      @toggleBackDrop="toggleBackDropVideo = $event"
    >
      <div
        class="video__wrapper d-flex justify-content-center align-items-center"
        @click.stop
      >
        <vue-plyr :options="options" :autoplay="toggleBackDropVideo">
          <video controls crossorigin playsinline>
            <source size="720" src="~/assets/images/s.mp4" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </BackDrop>
    <!--  -->
    <BackDrop
      :toggle="toggleBackDropAddAnswer || toggleBackDropAddReport"
      @toggleBackDrop="closeBackDrop"
    >
      <template v-if="toggleBackDropAddAnswer">
        <div
          role="add-answer"
          style="width: 65.9rem; min-height: 35.3rem"
          class="
            bg-light
            radius-21
            padding-x-45 padding-y-10
            slide-up-enter-active
          "
          @click.stop
        >
          <div class="row g-0 position-relative border-botton-whiteDark">
            <div
              style="width: 3rem; height: 3rem"
              class="
                course-user__close
                position-absolute
                bg-light
                radius-9
                cursor-pointer
                d-flex
                align-items-center
                justify-content-center
              "
              @click="toggleBackDropAddAnswer = false"
            >
              <GSvg class="svg-17" name-icon="close" title="اقفل" />
            </div>
            <h3 role="head" class="text-16 text-center padding-y-15 text-dark">
              إضافة اجابة
            </h3>
          </div>
          <!--  -->
          <div class="row g-0 text-center padding-y-20">
            <p role="title" class="text-16 text-dark margin-bottom-5">السؤال</p>
            <p role="question" class="text-13 weight-br-300">
              ما هو الكاليجرافي وما هو فن التعريب أرجو الشرح بطريقة اوضح؟
            </p>
          </div>
          <!--  -->
          <div class="row g-0 answer">
            <form>
              <textarea
                ref="firstInput"
                v-model="answer"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="الاجابة"
              ></textarea>
            </form>
            <button
              disabled
              style="width: 13.6rem; height: 4.2rem"
              type="submit"
              class="
                btn btn-Voodoo
                text-light text-12
                radius-14
                margin-top-15
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </div>
      </template>
      <!--  -->
      <template v-if="toggleBackDropAddReport">
        <div
          role="add-report"
          style="width: 65.9rem; min-height: 35.3rem"
          class="
            bg-light
            radius-21
            padding-x-45 padding-y-20
            slide-up-enter-active
          "
          @click.stop
        >
          <div
            class="
              row
              g-0
              position-relative
              border-botton-whiteDark
              margin-bottom-40
            "
          >
            <div
              style="width: 3rem; height: 3rem"
              class="
                course-user__close
                position-absolute
                bg-light
                radius-9
                cursor-pointer
                d-flex
                align-items-center
                justify-content-center
              "
              @click="toggleBackDropAddReport = false"
            >
              <GSvg class="svg-17" name-icon="close" title="اقفل" />
            </div>
            <h3 role="head" class="text-16 text-center padding-y-15 text-dark">
              ابلاغ
            </h3>
          </div>
          <!--  -->
          <div class="row g-0">
            <form>
              <div>
                <input
                  ref="firstInput"
                  type="text"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    text-13
                    border-whiteDark-1
                  "
                  placeholder="العنوان"
                />
              </div>
              <div class="margin-y-10">
                <input
                  type="email"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    border-whiteDark-1
                    text-13
                  "
                  placeholder="البريد الالكتروني"
                />
              </div>
              <textarea
                v-model="report"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="التفاصيل"
              ></textarea>
            </form>
            <button
              disabled
              style="width: 13.6rem; height: 4.2rem"
              type="submit"
              class="
                btn btn-Voodoo
                text-light text-12
                radius-14
                margin-top-15
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </div>
      </template>
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
      wrapperCourseContent: {
        courseContent: [
          {
            id: 0,
            title: 'المقدمة',
            lectures: 12,
            time: 32,
            status: 'complete',
          },
          {
            id: 1,
            title: 'الباب الاول',
            lectures: 12,
            time: 32,
            status: 'not-complete',
          },
          {
            id: 2,
            title: 'الباب الثاني',
            lectures: 12,
            time: 32,
            status: 'not-complete',
          },
          {
            id: 3,
            title: 'الباب الثالث',
            lectures: 12,
            time: 32,
            status: 'complete',
          },
        ],
      },
    }
  },
  provide() {
    return {
      progress: '70%',
      wrapperCourseContent: this.wrapperCourseContent,
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
          compName: 'UserQuestionAndAnswer',
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
      toggleBackDropVideo: false,
      toggleBackDropAddAnswer: false,
      toggleBackDropAddReport: false,
      selected: {
        name: 'نظرة عامة',
        compName: 'UserCourseOverview',
      },
      numComp: 0,
      dirctionAnimate: 'slide-right-dir',
      answer: '',
      report: '',
      options: {
        ratio: '16:9',
      },
    }
  },
  computed: {
    addUser() {
      return this.toggleBackDropAddAnswer || this.toggleBackDropAddReport
    },
  },
  watch: {
    addUser(value) {
      if (value) this.$nextTick(() => this.$refs.firstInput.focus())
    },
    numComp(newValue, oldValue) {
      newValue > oldValue
        ? (this.dirctionAnimate = 'slide-right-dir')
        : (this.dirctionAnimate = 'slide-left-dir')
    },
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
    moveActive(e, item, index) {
      const { offsetLeft } = e.target
      this.selected = item
      this.numComp = index
      this.$refs.navbar__active.style.left = `${offsetLeft}px`
    },
    closeBackDrop() {
      this.toggleBackDropAddAnswer = false
      this.toggleBackDropAddReport = false
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
      transition: left 0.4s cubic-bezier(0.66, 0.36, 0.58, 0.57);
      will-change: left;
    }
  }
  .progress {
    span {
      background-color: var(--coral);
    }
  }
  //
  &__close {
    top: 15px;
    right: 10px;
    transition: background-color 0.3s ease;
    //
    @include DetectHover {
      &:hover {
        background-color: var(--whiteDark);
      }
    }
  }
  //
  .answer {
    textarea {
      //
      &::placeholder {
        color: var(--dark);
        font-size: 1.3rem;
      }
    }
  }
  //
  form {
    input {
      &:focus {
        border-color: var(--coral);
      }
    }

    input,
    textarea {
      &::placeholder {
        color: var(--silver);
        font-weight: 300;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
