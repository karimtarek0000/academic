<template>
  <section role="new-courses" class="margin-top-90">
    <!--  -->
    <Heading h5="تعلم أولا" h2="الكورسات المضافة حديثا" />
    <!--  -->
    <NavbarSelected v-model="selected" />
    <!--  -->
    <div role="all-courses" class="set-padding margin-top-50">
      <div class="row justify-content-between padding-x-15">
        <Card v-for="dd in d" :key="dd" class="margin-bottom-30" />
      </div>
    </div>
    <!--  -->
    <BtnPrimary
      class="
        btn-Voodoo
        width-181
        height-55
        margin-y-38
        text-14 text-light
        mx-auto
      "
      title="شاهد المزيد"
      to="index"
    />
  </section>
</template>

<script>
export default {
  name: 'SectionNewCourses',
  data() {
    return {
      selected: 'التصميم',
      d: 3,
    }
  },
}
</script>

<style lang="scss">
.navbar-selected {
  //
  &__active {
    font-weight: 400;
    background-color: var(--coral);
    color: var(--light);
  }

  //
  &__item {
    @include DetectHover {
      &:hover {
        background-color: var(--coral);
        color: var(--light);
      }
    }
  }
}
</style>
