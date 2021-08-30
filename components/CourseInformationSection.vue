<template>
  <section class="course__info padding-y-27">
    <!--  -->
    <div class="row g-0 justify-content-center align-items-end">
      <slot name="video" />
      <!--  -->
      <slot name="booking" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseInformationSection',
}
</script>

<style></style>
