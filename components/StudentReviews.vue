<template>
  <section>
    <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-20">
      تقييمات الطلاب
    </h2>
    <!--  -->
    <TotalRatingsStudents class="margin-bottom-40 margin-top-30" />
    <!--  -->
    <Opinion
      v-for="d in 3"
      :key="d"
      class="border-whiteDark margin-bottom-15"
    />
  </section>
</template>

<script>
export default {
  name: 'StudentReviews',
}
</script>

<style></style>
