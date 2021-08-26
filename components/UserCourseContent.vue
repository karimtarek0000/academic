<template>
  <section>
    <!--  -->
    <CourseContent
      :render-select="true"
      class="padding-top-30 padding-bottom-45"
    >
      <!--  -->
      <button
        class="text-12 bg-light weight-br-300"
        @click="wrapperSelectAll.selectAll = !wrapperSelectAll.selectAll"
      >
        <GSvg
          class="svg-20 margin-end-5"
          name-icon="select"
          title="تحديد الكل"
        />
        <span>تحديد الكل</span>
      </button>
    </CourseContent>
    <!--  -->
    <div class="col-12 col-lg-10">
      <BtnPrimary
        :disabled="true"
        style="width: 23.6rem; height: 6rem"
        class="btn-Voodoo m-x-auto bg-Voodoo text-light radius-21 text-14"
      >
        تحديد كمكتملة
      </BtnPrimary>
    </div>
    <!--  -->
  </section>
</template>

<script>
export default {
  name: 'UserCourseContent',
  inject: ['wrapperCourseContent'],
  data() {
    return {
      wrapperSelectAll: {
        selectAll: false,
      },
    }
  },
  provide() {
    return {
      wrapperSelectAll: this.wrapperSelectAll,
    }
  },
}
</script>

<style></style>
