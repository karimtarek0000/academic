<template>
  <main>
    <header class="text-center padding-y-45 border-bottom-whiteDark">
      <h1 class="text-30 text-dark margin-bottom-10">دوراتي</h1>
      <p class="text-14 text-silver weight-br-300 mx-auto col-lg-4">
        هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر
        تصميم أو مجموعة من التصاميم
      </p>
    </header>
    <!--  -->
    <section class="custom-container padding-y-45">
      <div
        class="
          row row-cols-1 row-cols-sm-2 row-cols-lg-3
          g-4
          justify-content-center justify-content-lg-between
        "
      >
        <div v-for="d in 3" :key="d" class="col">
          <Card>
            <template slot="part2">
              <div class="col d-flex align-items-center">
                <GSvg
                  class="svg-20"
                  name-icon="star-with-five-points"
                  title="التقييم"
                />
                <span role="rating" class="margin-start-5 text-13">4.5</span>
                <span class="text-picton text-12 weight-br-300 margin-start-5"
                  >(400)</span
                >
              </div>
            </template>
            <!--  -->
            <CourseProgressBar slot="part3">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  margin-top-15
                  text-11
                "
              >
                <p role="hint" class="margin-end-5">تم الاكتمال</p>
                <p role="percentage">50%</p>
              </div>
            </CourseProgressBar>
          </Card>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MyCourses',
  layout: 'site',
  provide() {
    return {
      progress: '70%',
    }
  },
  head() {
    return {
      title: 'كورساتي',
    }
  },
}
</script>

<style></style>
