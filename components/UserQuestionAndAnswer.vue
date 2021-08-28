<template>
  <section role="question-and-answer">
    <div class="row">
      <!--  -->
      <div
        class="
          col-12 col-lg-10
          d-flex
          align-items-center
          justify-content-between
          margin-bottom-30
        "
      >
        <h2 role="head" class="text-18 text-dark margin-end-20">
          <span class="margin-end-5">4</span>
          <span>أسئلة في هذه الدورة</span>
        </h2>
        <!--  -->
        <BtnPrimary
          style="width: 17.4rem; height: 5rem"
          class="btn-coral radius-14 bg-coral text-light text-14"
          >سؤال جديد</BtnPrimary
        >
      </div>
      <!--  -->
      <div
        class="
          col-12 col-lg-10
          padding-y-30 padding-x-45
          md-padding-x-10
          border-whiteDark
          radius-21
        "
      >
        <div
          v-for="i in 3"
          :key="i"
          class="
            row
            g-0
            align-items-center
            bg-alabaster
            padding-20
            radius-10
            margin-bottom-15
          "
        >
          <div class="col-12 col-sm-1 flex-grow-0 margin-end-20">
            <!--  -->
            <figure
              style="width: 6.8rem; height: 6.8rem"
              class="margin-0 rounded-circle overflow-hidden mx-auto"
            >
              <img
                class="resize-img"
                src="~/assets/images/global/avatar.png"
                alt=""
              />
            </figure>
          </div>
          <!--  -->
          <div
            class="
              col-12 col-sm-8
              d-flex
              flex-column
              align-items-center align-items-sm-start
              sm-margin-y-15
            "
          >
            <p role="name" class="text-14">أحمد حمدان</p>
            <p role="date" class="text-silver text-14 weight-br-300">
              20/8/2020
            </p>
            <p role="description" class="text-12 weight-br-300">
              ما هو الكاليجرافي وما هو فن التعريب أرجو الشرح بطريقة اوضح؟
            </p>
          </div>
          <!--  -->
          <div
            class="
              col-12 col-sm-2
              flex-grow-0
              d-flex
              flex-row flex-sm-column
              align-items-center
              justify-content-center
              mx-auto
            "
          >
            <button
              role="add-answer"
              style="width: 10.1rem; height: 3rem"
              class="btn btn-coral text-light text-11 bg-coral radius-9"
              @click="addAnswer"
            >
              إضافة اجابة
            </button>
            <button
              role="report"
              style="width: 10.1rem; height: 3rem"
              class="
                btn btn-coral
                text-coral text-11
                border-coral-1
                radius-9
                margin-y-5
                sm-margin-x-10
              "
              @click="addReport"
            >
              ابلاغ
            </button>
            <figure
              role="count-answer"
              style="width: 10.1rem; height: 3rem"
              class="
                margin-bottom-0
                d-flex
                align-items-center
                justify-content-center
                text-silver text-12
                weight-br-300
              "
            >
              22 اجابة
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserQuestionAndAnswer',
  methods: {
    addAnswer() {
      this.$emit('addAnswer', true)
    },
    addReport() {
      this.$emit('addReport', true)
    },
  },
}
</script>

<style></style>
