<template>
  <div class="booking">
    <div class="row padding-y-10">
      <!--  -->
      <div class="col-12 text-center padding-y-10">
        <h4 role="hint" class="text-18">سارع لحجز مكانك</h4>
      </div>
      <!--  -->
      <div class="col-12">
        <div
          class="
            row
            g-0
            align-items-center
            padding-x-30 padding-y-5
            bg-roseWhite
          "
        >
          <!--  -->
          <div class="col margin-end-30 d-flex align-items-center">
            <p
              role="new-price"
              class="d-flex text-29 text-coral margin-0 margin-end-10"
            >
              <span>S.R</span> <span class="margin-start-5">50</span>
            </p>
            <del role="discount" class="d-flex text-dark text-17 weight-br-300">
              <span>S.R</span>
              <span class="margin-x-2">100</span>
            </del>
          </div>
          <!--  -->
          <div class="col">
            <p role="discount" class="d-flex text-14 text-coral weight-br-300">
              <span>خصم</span>
              <span class="margin-x-2">75%</span>
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        role="course-content"
        class="col-12 padding-x-20 padding-top-10 padding-bottom-30"
      >
        <p
          role="title"
          class="text-silver text-14 margin-bottom-20 weight-br-300"
        >
          تحتوي الدورة على:
        </p>
        <!--  -->
        <ul
          role="course-content"
          class="list-unstyled text-13 weight-br-300 text-dark"
        >
          <li
            v-for="(content, index) in totalCourseContent"
            :key="index"
            class="padding-y-5"
          >
            <GSvg
              class="svg-20 margin-end-10"
              :name-icon="bookingStatic[index].icon"
              :title="bookingStatic[index].title"
            />
            <span v-text="content" />
            <span v-text="bookingStatic[index].title" />
          </li>
          <!--  -->
          <li class="padding-y-5">
            <GSvg
              class="svg-20 margin-end-10"
              name-icon="file-download-fill"
              title="عن طريق الجوال أو الكمبيوتر"
            />
            <span>عن طريق الجوال أو الكمبيوتر</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="col-12">
        <addToShop class="width-100" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  inject: ['bookingStatic', 'totalCourseContent'],
}
</script>

<style lang="scss">
.booking {
  box-shadow: 0px 15px 24px #89888817;
  border-radius: 0 0 18px 18px;
}
</style>
