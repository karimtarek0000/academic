<template>
  <section>
    <div class="row flex-column g-0">
      <div
        class="col d-flex align-items-center justify-content-between padding-0"
      >
        <div>
          <h2 role="welcome" class="text-22 text-dark" v-text="data.head" />
          <p
            role="description"
            class="text-12 text-silver weight-br-300"
            v-text="data.desc"
          />
        </div>
        <div
          v-if="data.back"
          class="d-flex align-items-center text-12 cursor-pointer"
          @click="goBack"
        >
          <span>العودة</span>
          <GSvg class="svg-9 margin-start-5" name-icon="angle-left-1" />
        </div>
      </div>
      <!--  -->
      <div class="col margin-top-50">
        <slot name="form" />
      </div>
      <!--  -->
      <slot name="other" />
      <!--  -->
      <div class="col margin-bottom-10 margin-top-15">
        <slot name="submit" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChangeInformationRegister',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style></style>
