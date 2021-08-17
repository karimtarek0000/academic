<template>
  <svg v-on="$listeners">
    <use
      :xlink:href="require(`~/assets/icons/${src}.svg`) + '#icon-' + nameIcon"
    >
      <title v-text="title" />
    </use>
  </svg>
</template>

<script>
export default {
  name: 'GSvg',
  props: {
    title: {
      type: String,
      default: 'icon',
    },
    src: {
      type: String,
      default: 'sprite',
    },
    nameIcon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
