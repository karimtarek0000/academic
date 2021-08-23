<template>
  <!--  -->
  <div class="video__set-width-video position-relative">
    <!--  -->
    <figure class="margin-0 padding-0 radius-21 overflow-hidden">
      <img class="resize-img" src="~/assets/images/global/video.jpg" alt="" />
    </figure>
    <!--  -->
    <GSvg
      name-icon="video"
      title="تشغيل"
      class="video__play sm-svg-90 svg-140 cursor-pointer position-absolute"
      @click="playVideo"
    />
    <!--  -->
    <div role="instructor" class="video__instructor position-absolute">
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
</template>

<script>
export default {
  name: 'Video',
  methods: {
    playVideo() {
      this.$emit('openVideo', true)
    },
  },
}
</script>

<style lang="scss">
.video {
  //
  &__play {
    @include position('allCenter');
  }
  //
  &__instructor {
    @include position('lb', $moveL: '3rem', $moveB: '2rem');
  }

  //
  &__set-width-video {
    width: 55.1rem;
  }
}
</style>
