<template>
  <div class="select-box">
    <!--  -->
    <select @change="sendNewSelected($event)">
      <option selected hidden v-text="title" />
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        v-text="option.title"
      />
    </select>

    <!--  -->
    <svg
      class="select-box__icon"
      version="1.1"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>arrow-drop-down</title>
      <path
        d="M16.006 20l-5.663-5.657 1.887-1.885 3.777 3.77 3.771-3.772 1.887 1.885z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    options: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: 'اختر',
    },
  },
  methods: {
    sendNewSelected(e) {
      this.$emit('newSelected', e.target.value)
    },
  },
}
</script>

<style lang="scss">
.select-box {
  position: relative;
  //
  select {
    border: 0;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: inherit;
    cursor: pointer;
  }

  //
  &__icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    pointer-events: none;
    width: 22px;
    height: 22px;
    pointer-events: none;
  }
}
</style>
