<template>
  <section>
    <!--  -->
    <CourseContent
      :render-select="true"
      class="padding-top-30 padding-bottom-45 border-botton-whiteDark"
    >
      <!--  -->
      <button
        class="text-12 bg-light weight-br-300"
        @click="wrapper.selectAll = !wrapper.selectAll"
      >
        <GSvg
          class="svg-20 margin-end-5"
          name-icon="select"
          title="تحديد الكل"
        />
        <span>تحديد الكل</span>
      </button>
    </CourseContent>
  </section>
</template>

<script>
export default {
  name: 'UserCourseContent',
  inject: ['courseContent'],
  data() {
    return {
      wrapper: {
        selectAll: true,
      },
    }
  },
  provide() {
    return {
      selectAll: this.wrapper,
    }
  },
}
</script>

<style></style>
