<template>
  <!--  -->
  <div class="course-card d-flex radius-21 overflow-hidden">
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
      <div class="col-md-8 lg-padding-x-20 xxlg-padding-x-45 padding-y-20">
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
            class="
              width-41
              height-41
              rounded-circle
              d-flex
              align-items-center
              justify-content-center
              bg-whiteDark
              cursor-pointer
            "
          >
            <GSvg
              class="svg-20 fill-Voodoo"
              name-icon="heart-fill"
              title="مفضلة"
            />
          </div>
        </div>
        <!--  -->
        <BtnPrimary
          class="
            btn-Voodoo
            after-btn
            height-41
            width-116
            text-12 text-white
            m-s-auto
            margin-top-20
          "
          title="تصفح الكورس"
          to="sign-up"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
}
</script>

<style>
.course-card {
  box-shadow: 0px 1px 24px #70707012;
}
</style>
