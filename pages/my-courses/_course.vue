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
          class="
            btn-emerald
            radius-18
            course-user__continue
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
    <div class="bg-Voodoo radius-30 margin-bottom-50">
      <div
        class="row g-0 custom-container align-items-center"
        style="height: 9.9rem"
      >
        <div class="col d-flex align-items-center">
          <p role="question" class="text-18 text-light margin-end-20">
            هل قمت باكمال الدورة ؟
          </p>
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
        <div class="col flex-grow-0">
          <BtnGo
            style="width: 17.4rem; height: 5rem"
            class="text-14 text-light btn-voodoo-light radius-14"
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
          :key="item"
          style="width: 16.7rem; height: 6.5rem"
          :class="[
            'navbar-selected__item user-select-none cursor-pointer d-flex align-items-center justify-content-center text-dark radius-18 text-16 flex-shrink-0 weight-br-300',
            {
              'navbar-selected__active': item === selected,
            },
          ]"
          @click="selected = item"
          v-text="item"
        />
      </template>
    </NavbarSelected>
    <!--  -->
    <article class="custom-container">
      <OverviewCourseUser>
        <template slot="about-instructor">
          <AboutTeacher>
            <h2
              slot="head"
              role="head"
              class="text-dark text-18 margin-end-20 margin-bottom-20"
            >
              المدرب
            </h2>
            <!--  -->
            <div
              slot="social"
              class="
                col-5 col-md-7 col-lg-8
                d-flex
                justify-content-between
                margin-top-10
              "
            >
              <a
                role="instagram"
                href="#"
                target="_blank"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  width-29
                  height-29
                  bg-instagram
                  rounded-circle
                "
              >
                <GSvg
                  class="svg-18 fill-light"
                  name-icon="instagram"
                  title="instagram"
                />
              </a>
              <a
                role="facebook"
                href="#"
                target="_blank"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  width-29
                  height-29
                  bg-facebook
                  rounded-circle
                "
              >
                <GSvg
                  class="svg-18 fill-light"
                  name-icon="facebook"
                  title="facebook"
                />
              </a>
              <a
                role="twitter"
                href="#"
                target="_blank"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  width-29
                  height-29
                  bg-twitter
                  rounded-circle
                "
              >
                <GSvg
                  class="svg-18 fill-light"
                  name-icon="twitter"
                  title="twitter"
                />
              </a>
              <a
                role="google"
                href="#"
                target="_blank"
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  width-29
                  height-29
                  bg-light
                  rounded-circle
                  border-whiteDark
                "
              >
                <GSvg class="svg-18" name-icon="google" title="google" />
              </a>
            </div>
          </AboutTeacher>
        </template>
      </OverviewCourseUser>
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
      itemsNavbarSelected: [
        'نظرة عامة',
        'محتوى المادة',
        'أسئلة وأجوبة',
        'اختبار',
        'اعلانات',
        'مهمة',
        'موعد',
      ],
    }
  },
  provide() {
    return {
      progress: '70%',
    }
  },
  data() {
    return {
      toggleBackDrop: false,
      selected: 'نظرة عامة',
      options: {
        ratio: '16:9',
      },
    }
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
  &__continue {
    width: 29.4rem;
    height: 6rem;
  }

  //
  .navbar-selected {
    //
    &__item {
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
}
</style>
