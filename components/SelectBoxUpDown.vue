<template>
  <div class="select-animate padding-0">
    <!--  -->
    <div
      class="
        select-animate__action
        d-flex
        justify-content-between
        align-items-center
        bg-alabaster
        padding-start-20 padding-end-10 padding-y-10
        radius-10
        cursor-pointer
      "
      @click="toggle = !toggle"
    >
      <!--  -->
      <span
        class="select-animate__action__text text-18 text-dark"
        v-text="title"
      />
      <!--  -->
      <GSvg
        class="svg-20"
        :name-icon="
          toggle ? 'arrow_drop_up_line__1' : 'arrow_drop_down_line__1'
        "
      />
    </div>
    <!--  -->
    <div
      :class="[
        'select-animate__box padding-top-10',
        { 'select-animate__box--active': toggle },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBoxUpDown',
  props: {
    title: {
      type: String,
      default: '',
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      toggle: this.status,
    }
  },
}
</script>

<style lang="scss">
//
.select-animate {
  //
  &__box {
    overflow-y: hidden;
    max-height: 0px;
    transition: all 0.5s ease-in-out;

    //
    &--active {
      max-height: 500px;
    }
  }
}
</style>
