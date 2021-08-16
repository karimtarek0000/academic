<template>
  <!--  -->
  <nuxt-link
    :to="{ name: path }"
    class="
      d-flex
      justify-content-center
      align-items-center
      width-61
      height-55
      radius-21
      bg-whiteDark
      position-relative
    "
  >
    <span
      v-if="count"
      class="
        width-24
        height-24
        text-center
        bg-emerald
        rounded-circle
        text-dark text-12 text-light
        count
        position-absolute
      "
      v-text="count"
    />
    <GSvg class="svg-22" :name-icon="icon" :title="iconTitle" />
    <span
      v-if="text"
      class="d-inline-block text-Voodoo margin-start-5"
      v-text="text"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserOptions',
  props: {
    path: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      required: true,
    },
    iconTitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.count {
  @include position('rt', $moveT: '-5px', $moveR: '-6px');
}
</style>
