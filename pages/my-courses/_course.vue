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
        <AppBtn
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
        </AppBtn>
      </template>
    </HeaderCousreUser>
    <!--  -->
    <div
      class="bg-voodoo radius-30 margin-bottom-50 md-padding-y-20 padding-y-0"
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
          <AppBtn
            style="width: 17.4rem; height: 5rem"
            class="btn-chardonnay text-14 text-light bg-chardonnay radius-14"
          >
            <span>احصل على الشهادة</span>
            <GSvg
              class="svg-22 fill-light"
              name-icon="arrow_drop_down_line__1"
            />
          </AppBtn>
        </div>
        <div class="col-12 col-md-2 flex-grow-0 md-margin-top-20">
          <AppBtnGo
            style="width: 17.4rem; height: 5rem"
            class="text-14 margin-x-auto text-light btn-voodoo-light radius-14"
            to="index"
          >
            <span>تفاصيل الدورة</span>
            <GSvg class="svg-20 fill-light" name-icon="angle-left" />
          </AppBtnGo>
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
    <BackDrop :toggle="statusToggleBackDrop" @toggleBackDrop="closeBackDrop">
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
                v-model="$v.answer.$model"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="الاجابة"
              ></textarea>
              <AppMessageInputRequired
                v-if="!$v.answer.required && $v.answer.$dirty"
              />
            </form>
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
                  v-model="$v.report.subject.$model"
                  type="text"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    text-13
                    border-whiteDark-all
                  "
                  placeholder="العنوان"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.report.subject.required && $v.report.subject.$dirty"
              />
              <div class="margin-y-10">
                <input
                  v-model="$v.report.email.$model"
                  type="email"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    border-whiteDark-all
                    text-13
                  "
                  placeholder="البريد الالكتروني"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.report.email.required && $v.report.email.$dirty"
              />
              <AppMessageInputError
                v-if="!$v.report.email.email && $v.report.email.$dirty"
                type-error="email"
              />
              <textarea
                v-model="$v.report.reportMessage.$model"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="التفاصيل"
              ></textarea>
              <AppMessageInputRequired
                v-if="
                  !$v.report.reportMessage.required &&
                  $v.report.reportMessage.$dirty
                "
              />
            </form>
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
                v-model="$v.newQuestion.$model"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="السؤال"
              ></textarea>
              <AppMessageInputRequired
                v-if="!$v.newQuestion.required && $v.newQuestion.$dirty"
              />
            </form>
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
                v-model="$v.task.unitName.$model"
                style="height: 5rem"
                class="width-100 padding-x-10 radius-12 text-13 border-coral-1"
                :options="unites"
                title="اسم الوحدة"
              />
              <AppMessageInputRequired
                v-if="!$v.task.unitName.required && $v.task.unitName.$dirty"
              />
              <!--  -->
              <div>
                <input
                  v-model="$v.task.subject.$model"
                  type="text"
                  class="
                    width-100
                    padding-y-15 padding-x-10
                    radius-12
                    text-13
                    border-whiteDark-all
                    margin-y-10
                  "
                  placeholder="عنوان الموضوع"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.task.subject.required && $v.task.subject.$dirty"
              />
              <!--  -->
              <AppUploadFile
                v-model="$v.task.selectFile.$model"
                class="text-coral fit-content mx-auto"
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
              </AppUploadFile>
              <AppMessageInputRequired
                v-if="!$v.task.selectFile.required && $v.task.selectFile.$dirty"
              />
            </form>
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
                    v-model="$v.meeting.emailUser.$model"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-all
                    "
                    placeholder="ادخل ايميلك"
                  />
                  <AppMessageInputRequired
                    v-if="
                      !$v.meeting.emailUser.required &&
                      $v.meeting.emailUser.$dirty
                    "
                  />
                  <AppMessageInputError
                    v-if="
                      !$v.meeting.emailUser.email && $v.meeting.emailUser.$dirty
                    "
                    type-error="email"
                  />
                </div>
                <!--  -->
                <div class="col-12 col-md-6">
                  <input
                    v-model="$v.meeting.emailInstructor.$model"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-all
                    "
                    placeholder="ادخل ايميل المدرب"
                  />
                  <AppMessageInputRequired
                    v-if="
                      !$v.meeting.emailInstructor.required &&
                      $v.meeting.emailInstructor.$dirty
                    "
                  />
                  <AppMessageInputError
                    v-if="
                      !$v.meeting.emailInstructor.email &&
                      $v.meeting.emailInstructor.$dirty
                    "
                    type-error="email"
                  />
                </div>
              </div>
              <!--  -->
              <div class="row align-items-start margin-bottom-10">
                <div class="col-12 col-md-6 md-margin-bottom-10">
                  <input
                    v-model="$v.meeting.subject.$model"
                    type="text"
                    class="
                      width-100
                      padding-10
                      radius-12
                      text-13
                      border-whiteDark-all
                    "
                    placeholder="عنوان الموضوع"
                  />
                  <AppMessageInputRequired
                    v-if="
                      !$v.meeting.subject.required && $v.meeting.subject.$dirty
                    "
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
                      border-whiteDark-all
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
                v-model="$v.meeting.details.$model"
                style="width: 100%; height: 7.3rem"
                class="padding-10 radius-12 text-13"
                placeholder="التفاصيل"
              ></textarea>
              <AppMessageInputRequired
                v-if="!$v.meeting.details.required && $v.meeting.details.$dirty"
              />
            </form>
          </div>
        </template>
        <!-- SUBMIT -->
        <AppBtn
          type="submit"
          style="width: 13.6rem; height: 4.2rem"
          class="
            btn-voodoo
            text-light text-12
            radius-14
            margin-top-15 margin-bottom-10
            mx-auto
          "
          @clicked="submit"
        >
          ارسال
        </AppBtn>
      </AppModel>
    </BackDrop>
  </main>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
// numeric
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
  validations: {
    report: {
      subject: {
        required,
      },
      email: {
        required,
        email,
      },
      reportMessage: {
        required,
      },
    },
    answer: {
      required,
    },
    newQuestion: {
      required,
    },
    task: {
      subject: {
        required,
      },
      unitName: {
        required,
      },
      selectFile: {
        required,
      },
    },
    meeting: {
      emailUser: {
        required,
        email,
      },
      emailInstructor: {
        required,
        email,
      },
      subject: {
        required,
      },
      details: {
        required,
      },
    },
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
        this.addMeeting ||
        this.addTask
      )
    },
  },
  watch: {
    statusToggleBackDrop(value) {
      this.$nextTick(() => {
        if (value && this.$refs.firstInput) this.$refs.firstInput.focus()
        if (!value) this.$v.$reset()
      })
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
    submit() {
      this.$v.$touch()
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
