<template>
  <section class="course__info padding-y-27">
    <!--  -->
    <div class="row g-0 justify-content-center align-items-end">
      <!--  -->
      <div class="col-12 col-lg-5 course__set-width-video position-relative">
        <!--  -->
        <figure class="margin-0 padding-0 radius-21 overflow-hidden">
          <img
            class="resize-img"
            src="~/assets/images/global/video.jpg"
            alt=""
          />
        </figure>
        <!--  -->
        <GSvg
          name-icon="video"
          title="تشغيل"
          class="
            course__play
            sm-svg-90
            svg-140
            cursor-pointer
            position-absolute
          "
          @click="playVideo"
        />
        <!--  -->
        <div role="instructor" class="course__instructor position-absolute">
          <!--  -->
          <h4 role="name" class="text-20">
            <span>أ/</span>
            <span>عاليا أحمد</span>
          </h4>
          <!--  -->
          <p role="major" class="margin-0 text-14 weight-br-300">
            مدربة معتمدة من شركة ادوبي
          </p>
        </div>
      </div>
      <!--  -->
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCourseInformation',
  methods: {
    playVideo() {
      this.$emit('openVideo', true)
    },
  },
}
</script>

<style></style>
