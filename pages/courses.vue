<template>
  <main>
    <!--  -->
    <header class="text-center padding-y-45">
      <h1 class="text-30 text-dark margin-bottom-10">قسم التصميم</h1>
      <p class="text-14 text-silver weight-br-300 mx-auto xxlg-width-30">
        هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر
        تصميم أو مجموعة من التصاميم
      </p>
    </header>
    <!--  -->
    <SectionCoursesSlider />
    <!--  -->
    <SectionSubSections :items="items" />
  </main>
</template>

<script>
export default {
  name: 'Courses',
  asyncData() {
    return {
      items: [
        {
          id: 0,
          name: 'ويب ديزاين',
          icon: 'web-design',
        },
        {
          id: 1,
          name: 'تصميم تجربة المستخدم',
          icon: 'wireframe',
        },
        {
          id: 2,
          name: 'جرافيك ديزابن',
          icon: 'pen',
        },
        {
          id: 3,
          name: 'موشن جرافيك',
          icon: 'clapperboard',
        },
      ],
    }
  },
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.categoryName) && params.categoryName
  },
  head() {
    return {
      title: `${this.$route.params.categoryName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر تصميم أو مجموعة من التصاميم',
        },
      ],
    }
  },
}
</script>

<style></style>
