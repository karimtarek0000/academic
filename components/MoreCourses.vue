<template>
  <section>
    <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-30">
      المزيد من الدورات
    </h2>
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
            <!--  -->
            <div class="col d-flex align-items-center">
              <GSvg
                class="svg-20 fill-coral"
                name-icon="notebook"
                title="المحاضرة"
              />
              <p role="number-lecture" class="margin-start-5 margin-0 text-13">
                <span>23</span>
                <span>محاضرة</span>
              </p>
            </div>
          </template>
          <template slot="part3">
            <!--  -->
            <div class="col d-flex align-items-center">
              <p
                role="new-price"
                class="d-flex text-15 text-coral margin-0 margin-end-10"
              >
                <span>S.R</span> <span class="margin-x-2">50</span>
              </p>
              <del
                role="discount"
                class="d-flex text-silver text-14 weight-br-300"
              >
                <span>S.R</span>
                <span class="margin-x-2">50</span>
              </del>
            </div>
            <div class="col flex-grow-0">
              <AppBtn
                style="width: 11.6rem; height: 4.1rem"
                class="bg-voodoo text-12 text-light btn-voodoo radius-18"
              >
                اضف الي السلة
              </AppBtn>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MoreCourses',
}
</script>

<style></style>
