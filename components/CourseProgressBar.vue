<template>
  <div role="progress" class="progress text-center">
    <div class="progress__wrapper radius-21 bg-athens position-relative">
      <span
        class="position-absolute height-100 bg-emerald"
        :style="`width: ${progress}`"
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CourseProgressBar',
  inject: ['progress'],
}
</script>

<style lang="scss">
.progress {
  //
  &__wrapper {
    height: 10px;
    span {
      @include position('lt', $moveL: 0, $moveT: 0);
      border-radius: inherit;
    }
  }
}
</style>
