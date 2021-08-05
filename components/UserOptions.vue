<template>
  <!--  -->
  <div
    class="
      d-flex
      justify-content-center
      align-items-center
      width-61
      height-55
      radius-21
      bg-whiteDark
      position-relative
      margin-x-10
    "
    @click="$emit('clicked')"
  >
    <span
      v-if="count"
      role="count-notifi"
      class="
        width-24
        height-24
        text-center
        bg-emerald
        rounded-circle
        text-black text-12 text-white
        count-notifi
        position-absolute
      "
      v-text="count"
    />
    <GSvg class="svg-22" :name-icon="icon" :title="iconTitle" />
  </div>
</template>

<script>
export default {
  name: 'Notifi',
  props: {
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
  },
}
</script>

<style></style>
