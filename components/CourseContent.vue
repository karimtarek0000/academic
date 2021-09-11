<template>
  <section role="course-content">
    <div class="row">
      <div
        class="
          col-12
          d-flex
          flex-column flex-sm-row
          align-items-sm-center
          margin-bottom-30
        "
      >
        <h2 role="head" class="text-22 text-dark margin-end-20">
          محتوى الدورة
        </h2>
        <div
          class="
            d-flex
            text-13
            bg-emerald
            weight-br-300
            text-light
            padding-y-10 padding-x-20
            radius-9
          "
        >
          <figure
            role="count-videos"
            class="d-flex margin-bottom-0 padding-x-5"
          >
            7 مقاطع
          </figure>
          -
          <figure
            role="count-lecture"
            class="d-flex margin-bottom-0 padding-x-5"
          >
            12 محاضرة
          </figure>
          -
          <figure role="what-hours" class="d-flex margin-bottom-0 padding-x-5">
            2 ساعة
          </figure>
          <figure
            role="what-minutes"
            class="d-flex margin-bottom-0 padding-x-5"
          >
            0 دقيقة
          </figure>
        </div>
      </div>
      <!--  -->
      <div
        class="
          col-12 col-lg-10
          padding-y-30 padding-x-45
          md-padding-x-10
          border-whiteDark
          radius-21
        "
      >
        <div>
          <div
            class="
              d-flex
              flex-column flex-sm-row
              align-items-center
              justify-content-between
              margin-bottom-10
            "
          >
            <h3 role="head" class="text-18 text-dark">
              الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
            </h3>
            <slot />
          </div>
          <!-- Parent -->
          <div
            v-for="(course, index) in wrapperCourseContent.courseContent"
            :key="course.title"
            class="d-flex align-items-baseline"
          >
            <!-- Select button -->
            <button
              v-if="renderSelect"
              style="width: 25px; height: 25px"
              class="
                rounded-circle
                border-whiteDark
                margin-end-10
                bg-athens
                flex-shrink-0
                cursor-pointer
                d-flex
                align-items-center
                justify-content-center
              "
              @click.stop="selectedData(course)"
            >
              <GSvg
                v-show="course.status === 'complete'"
                class="svg-20"
                name-icon="select"
                title="تحديد الكل"
              />
            </button>
            <!--  -->
            <AccordionAnimate
              :toggle-status="index === selectAccordion"
              class="accordion-animate--change flex-grow-1"
              @click="toggleAccordion(index)"
            >
              <!--  -->
              <div slot="title" class="d-flex align-items-center weight-br-300">
                <p
                  role="title-section"
                  class="text-16 margin-end-30"
                  v-text="course.title"
                />
                <div
                  class="
                    d-flex
                    text-11
                    bg-emerald
                    padding-10
                    text-light
                    radius-9
                  "
                >
                  <figure class="padding-x-5 margin-bottom-0">
                    {{ course.lectures }} محاضرة
                  </figure>
                  -
                  <figure class="padding-x-5 margin-bottom-0">
                    {{ course.time }} دقيقة
                  </figure>
                </div>
              </div>
              <!-- Sub -->
              <!-- If contain description will render accordion -->
              <AccordionAnimate
                v-for="index2 in 1"
                :key="index2"
                class="
                  accordion-animate--change-sub
                  weight-br-300
                  col-11
                  mx-auto
                  border-botton-whiteDark
                  margin-y-5
                "
                :toggle-status="index2 === selectAccordionSub"
                @click="toggleAccordionSub(index2)"
              >
                <GSvg
                  slot="icon"
                  class="svg-20 margin-end-5"
                  name-icon="movie-fill"
                  title="فيديو"
                />
                <!--  -->
                <p slot="title" class="text-14">الدرس الاول</p>
                <!--  -->
                <p slot="time" class="text-14 mr-auto">03:22</p>
                <!--  -->
                <p
                  style="width: 75%"
                  role="description"
                  class="
                    text-silver text-12
                    padding-bottom-20 padding-start-30
                    md-width-100
                  "
                >
                  تقدم هذه الدورة التدريبية شرحاً عن قواعد وفنيات الخط الديواني
                  بدءاً من الحروف المفردة مروراً بالحروف المتصلة وثم كتابة
                  الكلمات والجمل
                </p>
              </AccordionAnimate>
              <!-- Normal lesson -->
              <div
                class="
                  d-flex
                  align-items-center
                  border-botton-whiteDark
                  col-11
                  mx-auto
                  padding-y-10
                  margin-y-5
                "
              >
                <GSvg
                  slot="icon"
                  class="svg-20 margin-end-5"
                  name-icon="movie-fill"
                  title="فيديو"
                />
                <p role="title" class="text-14 weight-br-300">الدرس الثاني</p>
                <p role="time" class="text-14 weight-br-300 mr-auto">03:22</p>
              </div>
              <!-- PDF -->
              <div
                class="
                  d-flex
                  align-items-center
                  border-botton-whiteDark
                  col-11
                  mx-auto
                  padding-y-10
                  margin-y-5
                "
              >
                <GSvg
                  slot="icon"
                  class="svg-20 margin-end-5"
                  name-icon="file-list-2-fill-1"
                  title="ملف"
                />
                <p role="title" class="text-14 weight-br-300">ملف pdf</p>
                <p role="time" class="text-14 weight-br-300 mr-auto">03:22</p>
              </div>
            </AccordionAnimate>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseContent',
  inject: ['wrapperCourseContent', 'wrapperSelectAll'],
  props: {
    renderSelect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectAccordion: 0,
      selectAccordionSub: null,
    }
  },
  watch: {
    'wrapperSelectAll.selectAll': {
      deep: true,
      handler(value) {
        if (value) {
          this.wrapperCourseContent.courseContent.map(
            (content) => (content.status = 'complete')
          )
        }
      },
    },
    selectAccordion() {
      if (this.selectAccordionSub !== null) this.selectAccordionSub = null
    },
  },
  methods: {
    toggleAccordion(index) {
      // 1) - If index equal select which mean's toggle close or open will select to be null.
      if (this.selectAccordion === index) return (this.selectAccordion = null)
      // 2) If not will be select equal index.
      this.selectAccordion = index
    },
    toggleAccordionSub(index) {
      // 1) - If index equal select which mean's toggle close or open will select to be null.
      if (this.selectAccordionSub === index)
        return (this.selectAccordionSub = null)
      // 2) If not will be select equal index.
      this.selectAccordionSub = index
    },
    selectedData(course) {
      if (course.status === 'complete') {
        this.wrapperSelectAll.selectAll = false
        return (course.status = 'not-complete')
      }
      course.status = 'complete'
    },
  },
}
</script>

<style lang="scss">
.accordion-animate {
  //
  &--change {
    .arrow {
      width: 30px;
      height: 30px;
    }
  }

  &--change-sub {
    //
    .accordion-animate__action {
      background-color: var(--light);
      padding-left: 0px;
      padding-right: 0px;
    }

    //
    .accordion-animate__box {
      padding-top: 0px;
    }
  }
}
</style>
