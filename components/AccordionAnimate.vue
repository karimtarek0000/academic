<template>
  <div class="accordion-animate padding-0">
    <!--  -->
    <div
      class="
        accordion-animate__action
        d-flex
        justify-content-between
        align-items-center
        bg-alabaster
        padding-start-20 padding-end-10 padding-y-10
        radius-10
        cursor-pointer
      "
      v-on="$listeners"
    >
      <!-- Add icon -->
      <slot name="icon" />
      <!--  -->
      <!-- Change title -->
      <slot name="title">
        <span
          slot="title"
          class="accordion-animate__action__text text-18 text-dark"
          v-text="title"
        />
      </slot>
      <!-- Icon -->
      <GSvg
        class="svg-20 arrow"
        :name-icon="
          toggleStatus ? 'arrow_drop_up_line__1' : 'arrow_drop_down_line__1'
        "
      />
      <!-- Time -->
      <slot name="time" />
    </div>
    <!--  -->
    <div
      :class="[
        'accordion-animate__box padding-top-10',
        { 'accordion-animate__box--active': toggleStatus },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionAnimate',
  props: {
    title: {
      type: String,
      default: '',
    },
    toggleStatus: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
//
.accordion-animate {
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
