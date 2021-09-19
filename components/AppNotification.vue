<template>
  <div role="notification" class="notification bg-light">
    <div
      class="
        row
        border-bottom-whiteDark
        justify-content-between
        align-items-center
        padding-y-10 padding-x-20
      "
    >
      <div v-if="close" class="col flex-grow-0 cursor-pointer" @click="clicked">
        <GSvg class="svg-20" name-icon="close" />
      </div>
      <div class="col flex-grow-0 text-12">
        <span>الاشعارات</span>
      </div>
      <div class="col flex-grow-0">
        <AppBtn
          class="text-coral text-12 bg-light no-wrap"
          @clicked="$emit('deleteAll')"
          >مسح الكل</AppBtn
        >
      </div>
    </div>
    <!-- RENDER ALL NOTIFICATION -->
    <div
      class="row padding-x-20 change-scrollbar-y"
      style="max-height: 92vh; overflow-y: auto"
    >
      <!--  -->
      <div
        v-for="i in 2"
        :key="i"
        class="
          col-12
          d-flex
          align-items-center
          padding-y-20
          notification__notfi
        "
      >
        <figure
          class="margin-0 radius-12 overflow-hidden flex-shrink-0"
          style="width: 76px; height: 57px"
        >
          <img
            class="resize-img"
            src="~/assets/images/who-we-are/2.png"
            alt=""
          />
        </figure>
        <!--  -->
        <div class="weight-br-300 d-flex text-12 margin-start-10">
          <span> </span>
          <p class="weight-br-300">
            لقد قمت بالتسجيل في
            <span class="weight-br-400">
              كورس الفرق ما بين التايبوجرافي والكاليجرافي وفن التعريب
            </span>
            وتم الدفع
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNotification',
  props: {
    close: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clicked() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.notification {
  z-index: 10000;
  &__notfi {
    &:not(:last-child) {
      border-bottom: 2px solid $whiteDark;
    }
  }
}
</style>
