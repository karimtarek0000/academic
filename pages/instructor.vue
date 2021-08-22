<template>
  <main class="instructor">
    <header class="padding-y-45 border-botton-whiteDark">
      <AboutInstructor class="custom-container" />
    </header>
    <!--  -->
    <section class="custom-container padding-y-30">
      <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-20">
        <span role="title" class="text-25 margin-end-5">كورساتي</span>
        <span role="count-courses" class="text-16 weight-br-300 text-silver"
          >(كورس 6)</span
        >
      </h2>
      <div role="courses" class="row justify-content-between">
        <Card v-for="d in 6" :key="d" class="margin-bottom-30" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Instructor',
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.name) && params.name
  },
  head() {
    return {
      title: `${this.$route.params.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'عن المدرب',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.instructor {
  &__image {
    width: 19.9rem;
    height: 17rem;
  }
}
</style>
