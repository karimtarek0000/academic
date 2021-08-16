<template>
  <main>
    <!--  -->
    <HeaderCoursePage />
  </main>
</template>

<script>
export default {
  name: 'Course',
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.courseName) && params.courseName
  },
  provide() {
    return {
      rating: this.rating,
    }
  },
  data() {
    return {
      rating: 4,
    }
  },
  head() {
    return {
      title: `${this.$route.params.courseName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'اختلط الأمر كثيراً عند المصممين وخصوصاً المبتدئين منهم رغم أن فن الكتابة أو فن الخط معروف لدى العرب',
        },
      ],
    }
  },
}
</script>
<style></style>
