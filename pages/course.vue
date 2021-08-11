<template>
  <p>{{ $route.params.courseName }}</p>
</template>

<script>
export default {
  name: 'Course',
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.courseName) && params.courseName
  },
}
</script>

<style></style>
