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
          :ref="item.compName"
          style="height: 6.5rem"
          :class="[
            'd-flex navbar-selected__item overflow-hidden user-select-none cursor-pointer align-items-center justify-content-center text-16 flex-shrink-0',
            {
              'weight-br-400 text-coral': item.compName === compName,
            },
            {
              'weight-br-300': item.compName !== compName,
            },
          ]"
          @click="moveActive($event, item.compName, index + 1)"
          v-text="item.name"
        />
        <span
          ref="navbar__active"
          class="navbar-selected__active radius-18 bg-chardon position-absolute"
          style="height: 6.5rem"
        />
      </template>
    </NavbarSelected>
    <!--  -->
    <article class="custom-container">
      <transition :name="dirctionAnimate" mode="out-in">
        <component
          :is="compName"
          @addAnswer="addAnswer = $event"
          @addReport="addReport = $event"
          @newQuestion="addNewQuestion = $event"
          @openCreateTask="addTask = $event"
          @openCreateMeeting="addMeeting = $event"
          @goToComponent="goToComponent"
        >
          <UserCourseOverview />
          <UserCourseContent />
          <UserQuestionAndAnswer />
          <Exam />
          <Ads />
          <UserTask />
          <UserMeeting />
        </component>
      </transition>
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
    <!-- Model's -->
    <BackDrop
      :toggle="statusToggleBackDrop || addTask"
      @toggleBackDrop="closeBackDrop"
    >
      <AppModel @clicked="closeBackDrop">
        <template v-if="addAnswer">
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            الاجابة
          </h3>
          <!--  -->
          <div class="row g-0 text-center padding-y-20">
            <p role="title" class="text-16 text-dark margin-bottom-5">السؤال</p>
            <p role="question" class="text-13 weight-br-300">
              ما هو الكاليجرافي وما هو فن التعريب أرجو الشرح بطريقة اوضح؟
            </p>
          </div>
          <!--  -->
          <div class="row g-0">
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
                margin-top-15 margin-bottom-10
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </template>
        <template v-if="addReport">
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            ابلاغ
          </h3>
          <div class="row g-0">
            <form>
              <div>
                <input
                  ref="firstInput"
                  v-model="report.subject"
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
                  v-model="report.email"
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
                v-model="report.reportMessage"
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
                margin-top-15 margin-bottom-10
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </template>
        <template v-if="addNewQuestion">
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            سؤال جديد
          </h3>
          <div class="row g-0">
            <form>
              <textarea
                ref="firstInput"
                v-model="newQuestion"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="السؤال"
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
                margin-top-15 margin-bottom-10
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </template>
        <template v-if="addTask">
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            ارسال مهمة
          </h3>
          <div class="row g-0">
            <form>
              <!--  -->
              <SelectBox
                style="height: 5rem"
                class="width-100 padding-x-10 radius-12 text-13 border-coral-1"
                :options="unites"
                title="اسم الوحدة"
                @newSelected="task.unitName = $event"
              />
              <!--  -->
              <div>
                <input
                  v-model="task.subject"
                  type="text"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    text-13
                    border-whiteDark-1
                    margin-y-10
                  "
                  placeholder="عنوان الموضوع"
                />
              </div>
              <!--  -->
              <UploadFile
                class="text-coral fit-content mx-auto"
                @uploadFile="task.selectFile = $event"
              >
                <template>
                  <GSvg class="svg-70" name-icon="upload" title="اختار ملف" />
                  <span class="text-13">ارفع المهمة</span>
                  <p
                    v-if="task.selectFile"
                    class="d-flex flex-column align-items-center"
                  >
                    <span class="text-12 margin-y-10">تم اختيار</span>
                    <span
                      class="truncut-text direction-ltr"
                      v-text="task.selectFile.name"
                    />
                  </p>
                </template>
              </UploadFile>
            </form>
            <button
              disabled
              style="width: 13.6rem; height: 4.2rem"
              type="submit"
              class="
                btn btn-Voodoo
                text-light text-12
                radius-14
                margin-top-15 margin-bottom-10
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </template>
        <template v-if="addMeeting">
          <h3
            slot="head"
            role="head"
            class="text-16 text-center padding-y-15 text-dark"
          >
            تحديد موعد
          </h3>
          <div class="row g-0">
            <form>
              <div class="row margin-bottom-10">
                <div class="col-12 col-md-6 md-margin-bottom-10">
                  <input
                    ref="firstInput"
                    v-model="meeting.emailUser"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-1
                    "
                    placeholder="ادخل ايميلك"
                  />
                </div>
                <!--  -->
                <div class="col-12 col-md-6">
                  <input
                    v-model="meeting.emailInstructor"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-1
                    "
                    placeholder="ادخل ايميل المدرب"
                  />
                </div>
              </div>
              <!--  -->
              <div class="row margin-bottom-10">
                <div class="col-12 col-md-6 md-margin-bottom-10">
                  <input
                    v-model="meeting.subject"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-1
                    "
                    placeholder="عنوان الموضوع"
                  />
                </div>
                <!--  -->
                <div
                  class="col-12 col-md-6 datepicker-trigger border-whitedark"
                >
                  <input
                    id="datepicker-trigger"
                    type="text"
                    readonly
                    class="
                      width-100
                      height-100
                      radius-12
                      text-13
                      padding-10
                      border-whiteDark-1
                    "
                    placeholder="MM/DD/YY"
                    :value="formatDates(meeting.date)"
                  />
                  <GSvg
                    class="svg-17 icon-calendar position-absolute"
                    name-icon="calendar"
                    title="اختار الميعاد"
                  />
                  <client-only>
                    <AirbnbStyleDatepicker
                      class="direction-ltr"
                      :trigger-element-id="'datepicker-trigger'"
                      :mode="'single'"
                      :fullscreen-mobile="true"
                      :show-shortcuts-menu-trigger="false"
                      :months-to-show="1"
                      :date-one="meeting.date"
                      @date-one-selected="meeting.date = $event"
                    />
                  </client-only>
                </div>
              </div>
              <textarea
                v-model="meeting.details"
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
                margin-top-15 margin-bottom-10
                mx-auto
              "
            >
              ارسال
            </button>
          </div>
        </template>
      </AppModel>
    </BackDrop>
  </main>
</template>

<script>
import { setDirectionAnim } from '@/mixins/other'
import format from 'date-fns/format'
export default {
  name: 'Course',
  mixins: [setDirectionAnim],
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
          compName: 'Exam',
        },
        {
          name: 'اعلانات',
          compName: 'Ads',
        },
        {
          name: 'مهمة',
          compName: 'UserTask',
        },
        {
          name: 'موعد',
          compName: 'UserMeeting',
        },
      ],
      unites: [
        {
          title: 'test 1',
          value: 'test 1',
        },
        {
          title: 'test 2',
          value: 'test 2',
        },
      ],
      //
      toggleBackDropVideo: false,
      addAnswer: false,
      addReport: false,
      addNewQuestion: false,
      addTask: false,
      addMeeting: false,
      compName: 'UserCourseOverview',
      options: {
        ratio: '16:9',
      },
      //
      answer: '',
      newQuestion: '',
      report: {
        subject: '',
        email: '',
        reportMessage: '',
      },
      task: {
        subject: '',
        unitName: '',
        selectFile: '',
      },
      meeting: {
        emailUser: '',
        emailInstructor: '',
        details: '',
        subject: '',
        date: '',
      },
      dateFormat: 'MM/DD/YY',
    }
  },
  computed: {
    statusToggleBackDrop() {
      return (
        this.addAnswer ||
        this.addReport ||
        this.addNewQuestion ||
        this.addMeeting
      )
    },
  },
  watch: {
    statusToggleBackDrop(value) {
      if (value) setTimeout(() => this.$refs.firstInput.focus(), 100)
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
    moveActive(e, compName, index) {
      const { offsetLeft } = e.target
      this.compName = compName
      this.numComp = index
      this.$refs.navbar__active.style.left = `${offsetLeft}px`
    },
    goToComponent(nameComp) {
      this.$refs[nameComp][0].click()
    },
    closeBackDrop() {
      this.addAnswer = false
      this.addReport = false
      this.addNewQuestion = false
      this.addTask = false
      this.addMeeting = false
    },
    formatDates(date) {
      if (date) return format(this.meeting.date, this.dateFormat)
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
      @media only screen and (min-width: 768px) {
        border: 1px solid var(--gallery);
      }
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
    &__item,
    &__active {
      width: calc(106.5rem / 6.875);
    }
    //
    &__active {
      top: 0;
      transition: left 0.4s cubic-bezier(0.66, 0.36, 0.58, 0.57);
      will-change: left;
      z-index: -1;
    }
  }
  //
  .progress {
    span {
      background-color: var(--coral);
    }
  }

  .icon-calendar {
    @include position('rt', $moveR: 2rem, $moveT: '50%');
    pointer-events: none;
  }
  //
  form,
  .datepicker-trigger {
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
  //////////////////////////////////////////
  // Data picker
  .asd__wrapper--datepicker-open {
    left: -17px !important;

    @media only screen and (max-width: 768px) {
      left: 0 !important;
    }
  }
  .asd__datepicker-header {
    font-size: 15px;
  }
  .asd__month-table {
    margin-top: 50px;
  }
}
</style>
