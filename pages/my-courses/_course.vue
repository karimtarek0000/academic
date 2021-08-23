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
        <BtnCard
          title="الاستمرار الى المحاضرة"
          class="
            btn-emerald
            radius-18
            course-user__continue
            text-light text-14
            bg-emerald
            margin-top-40
          "
        />
      </template>
    </HeaderCousreUser>
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
  provide() {
    return {
      progress: '70%',
    }
  },
  data() {
    return {
      toggleBackDrop: false,
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
}
</style>
