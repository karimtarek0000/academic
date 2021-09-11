<template>
  <!--  -->
  <div class="course-card shadow__card-2 d-flex radius-21 overflow-hidden">
    <!--  -->
    <div class="row flex-column flex-md-row g-0">
      <!--  -->
      <figure class="col col-md-4 margin-0 padding-0">
        <img
          class="resize-img height-100"
          src="~/assets/images/global/course.png"
          alt=""
        />
      </figure>
      <!--  -->
      <div class="col-md-8 padding-x-20 xxlg-padding-x-45 padding-y-20">
        <!--  -->
        <div class="row">
          <!--  -->
          <div class="col">
            <span role="hint" class="text-coral text-12">كورس مميز</span>
            <h2 role="course-title" class="truncut-text text-15">
              الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
            </h2>
            <p
              role="course-description"
              class="text-silver weight-br-300 text-12"
            >
              تقدم هذه الدورة التدريبية شرحاً عن قواعد وفنيات الخط الديواني
            </p>
            <!--  -->
            <div class="text-14 weight-br-300">
              <span role="last-update" class="text-silver">اخر تحديث</span>
              <span role="date" class="text-chardonnay">20/8/2020</span>
            </div>
            <!--  -->
            <div class="row g-0 margin-top-10">
              <div class="col col-md-4 d-flex align-items-center">
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
              <div class="col col-md-4 d-flex align-items-center">
                <GSvg
                  class="svg-20 fill-coral"
                  name-icon="notebook"
                  title="المحاضرة"
                />
                <p
                  role="number-lecture"
                  class="margin-start-5 margin-0 text-13"
                >
                  <span>23</span>
                  <span>محاضرة</span>
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div
            v-if="!addPrice"
            style="width: 4.1rem; height: 4.1rem"
            class="
              rounded-circle
              d-flex
              align-items-center
              justify-content-center
              bg-whiteDark
              cursor-pointer
              md-margin-top-20
            "
          >
            <GSvg
              class="svg-20 fill-voodoo"
              name-icon="heart-fill"
              title="مفضلة"
            />
          </div>
        </div>
        <!--  -->
        <div v-if="addPrice" class="d-flex align-items-center margin-top-20">
          <p
            role="new-price"
            class="d-flex text-15 text-dark margin-0 margin-end-10"
          >
            <span>S.R</span> <span class="m-s-2">50</span>
          </p>
          <del role="discount" class="d-flex text-silver text-14 weight-br-300">
            <span>S.R</span>
            <span class="m-s-2">50</span>
          </del>
        </div>
        <!--  -->
        <BtnGo
          v-if="!addPrice"
          style="width: 11.6rem; height: 4.1rem"
          class="btn-voodoo text-12 text-light m-s-auto margin-top-20"
          to="sign-up"
        >
          تصفح الكورس
        </BtnGo>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    addPrice: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
