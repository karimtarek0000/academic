<template>
  <section>
    <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-30">
      المزيد من الدورات
    </h2>
    <div class="row justify-content-between">
      <Card v-for="d in 3" :key="d" class="margin-bottom-30" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MoreCourses',
}
</script>

<style></style>
