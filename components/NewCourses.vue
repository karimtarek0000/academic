<template>
  <section role="new-courses" class="margin-top-90">
    <!--  -->
    <NavbarSelectedCategory v-model="selected" />
    <!--  -->
    <div role="all-courses" class="set-padding margin-top-50">
      <div class="row justify-content-between">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewCourses',

  data() {
    return {
      selected: 'التصميم',
      num: 1,
      status: false,
    }
  },
}
</script>

<style lang="scss">
//
.set-padding {
  @media only screen and (min-width: 1350px) {
    padding: 0 100px;
  }
}
//
.new-courses {
  //
  &__items {
    max-width: 100%;
  }

  &__item {
    transition: all 0.1s ease;
    @include DetectHover {
      &:hover {
        font-weight: 400;
        background-color: var(--coral);
        color: var(--white);
      }
    }
  }

  &__active {
    font-weight: 400;
    background-color: var(--coral);
    color: var(--white);
  }
}
</style>
