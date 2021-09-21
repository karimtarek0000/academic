<template>
  <main role="404" class="bg-voodoo overflow-hidden">
    <section>
      <div
        class="
          row
          flex-column
          align-items-center
          justify-content-center
          text-light
          overflow-hidden
        "
        style="min-height: 100vh"
      >
        <div
          class="
            col
            pointer-event-none
            d-flex
            justify-content-center
            flex-grow-0
            margin-bottom-20
          "
        >
          <Logo />
        </div>
        <!--  -->
        <div class="col flex-grow-0">
          <h1
            v-if="error.statusCode"
            class="text-center text-100"
            style="line-height: 100px"
            v-text="error.statusCode"
          />
        </div>
        <!--  -->
        <div class="col text-center flex-grow-0">
          <p class="text-18">{{ renderMessageError }}</p>
        </div>
        <!--  -->
        <div
          class="col d-flex justify-content-center margin-top-20 flex-grow-0"
        >
          <AppBtnGo
            to="index"
            class="
              btn-coral
              bg-coral
              padding-x-20 padding-y-10
              text-light text-12
              margin-x-auto
            "
            >اذهب الي الصفحة الرئيسية</AppBtnGo
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      notFound: 'هذه الصفحة غير موجوده في الموقع',
    }
  },
  computed: {
    renderMessageError() {
      return this.error.statusCode === 404 ? this.notFound : this.error.message
    },
  },
  head() {
    return {
      title: this.error.statusCode,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.renderMessageError} - ${this.error.statusCode}`,
        },
      ],
    }
  },
}
</script>

<style></style>
