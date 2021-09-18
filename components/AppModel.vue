<template>
  <div
    class="
      model
      bg-light
      radius-21
      md-padding-x-20
      padding-x-45 padding-y-10
      slide-up-enter-active
    "
    @click.stop
  >
    <div
      class="row g-0 position-relative border-bottom-whiteDark margin-bottom-20"
    >
      <div
        style="width: 3rem; height: 3rem"
        class="
          model__close
          position-absolute
          bg-light
          radius-9
          cursor-pointer
          d-flex
          align-items-center
          justify-content-center
        "
        @click="$emit('clicked')"
      >
        <GSvg class="svg-17" name-icon="close" title="اقفل" />
      </div>
      <slot name="head" />
    </div>
    <!--  -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppModel',
  props: {
    head: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.model {
  width: 65.9rem;
  //
  @media only screen and (max-width: 48em) {
    width: 100%;
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
}
</style>
