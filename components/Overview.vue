<template>
  <section role="overview" class="overview">
    <h2 class="text-22 margin-bottom-30 text-dark">
      ما الذي سوف تتعلمه في هذه الدورة ؟
    </h2>
    <div class="row g-0">
      <p
        v-for="i in 3"
        :key="i"
        role="what-you-learn"
        class="
          col-12 col-sm-6
          text-14 text-silver
          align-items-baseline
          weight-br-300
          margin-bottom-30
          d-flex
        "
      >
        <GSvg class="svg-11 flex-shrink-0" name-icon="ellipse" />
        <span class="padding-end-30 padding-start-10">
          تقدم هذه الدورة التدريبية شرحاً عن قواعد وفنيات الخط الديواني بدءاً من
          الحروف المفردة مروراً بالحروف المتصلة وثم كتابة الكلمات والجمل.</span
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Overview',
}
</script>

<style></style>
