<template>
  <div
    v-show="show"
    role="add-to"
    class="
      row
      quick-add
      align-items-center
      bg-light
      padding-y-5 padding-x-10
      radius-21
    "
  >
    <!--  -->
    <AddToShop />
    <!--  -->
    <div class="col text-center">
      <p role="price" class="text-22 text-coral">50$</p>
      <del role="descount" class="text-18 weight-br-300">20$</del>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickAddInMobile',
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    if (this.$mq === 'tablet') {
      const heightWindow = document.body.scrollHeight / 2
      document.addEventListener('scroll', () => {
        if (window.scrollY > heightWindow) return (this.show = true)
        this.show = false
      })
    }
  },
}
</script>

<style lang="scss">
.quick-add {
  position: fixed;
  @include position('rb', $moveR: '50%', $moveB: 0px);
  min-width: 30rem;
  z-index: 77777;
  box-shadow: 0px -3px 10px #f9efef;
}
</style>
