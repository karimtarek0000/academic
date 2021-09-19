<template>
  <nuxt-link
    v-if="link"
    :to="{ name: path }"
    style="width: 6.1rem; height: 5.5rem"
    class="
      d-flex
      justify-content-center
      align-items-center
      radius-21
      bg-whiteDark
      position-relative
    "
  >
    <span
      v-if="count"
      style="width: 2.4rem; height: 2.4rem"
      class="
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
      class="d-inline-block text-voodoo margin-start-5"
      v-text="text"
    />
  </nuxt-link>
  <div
    v-else
    style="width: 6.1rem; height: 5.5rem"
    class="
      d-flex
      justify-content-center
      align-items-center
      radius-21
      bg-whiteDark
      position-relative
      cursor-pointer
    "
    @click.stop="clicked"
  >
    <span
      v-if="count"
      style="width: 2.4rem; height: 2.4rem"
      class="
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
      class="d-inline-block text-voodoo margin-start-5"
      v-text="text"
    />
  </div>
</template>

<script>
export default {
  name: 'UserOptions',
  props: {
    link: {
      type: Boolean,
      default: true,
    },
    path: {
      type: String,
      default: '',
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
  methods: {
    clicked() {
      this.$emit('clicked')
    },
  },
}
</script>

<style lang="scss">
.count {
  @include position('rt', $moveT: '-5px', $moveR: '-6px');
}
</style>
