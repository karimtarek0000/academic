<template>
  <!--  -->
  <nuxt-link to="/" class="blog-card d-flex radius-21 overflow-hidden">
    <!--  -->
    <div class="row g-0 align-items-center">
      <!--  -->
      <slot />
      <!--  -->
      <div
        class="
          col-12 col-sm-8
          blog-card__body
          padding-x-20 padding-y-20
          xxlg-padding-x-30
        "
      >
        <!--  -->
        <div class="row">
          <!--  -->
          <div class="col">
            <span
              role="hint"
              style="width: 7.8rem; height: 2.7rem"
              class="
                d-flex
                align-items-center
                justify-content-center
                text-12
                bg-emerald
                text-light
                radius-9
                margin-bottom-10
                weight-br-300
              "
              >تايبوجرافي</span
            >
            <h2 role="blog-title" class="truncut-text text-dark text-16">
              طريقة عمل تايبوجرافي خرافي وسهل بالاليستريتور
            </h2>
            <!--  -->
            <div class="d-flex align-items-center text-12">
              <div
                role="blog-info"
                class="
                  d-flex
                  align-items-center
                  text-dark
                  weight-br-300
                  margin-y-5
                "
              >
                <GSvg
                  class="svg-20 fill-silver"
                  name-icon="user"
                  title="الكاتب"
                />
                <span class="text-capitalize">ahmed hamdan</span>
              </div>
              <!--  -->
              <div class="margin-start-30 d-flex align-items-center">
                <GSvg
                  class="svg-20 fill-silver"
                  name-icon="time-line"
                  title="التاريخ"
                />
                <span class="text-silver weight-br-300 margin-start-5"
                  >3 يناير 2020</span
                >
              </div>
            </div>
            <p
              role="blog-description"
              class="text-silver weight-br-300 text-12"
            >
              تقدم هذه الدورة التدريبية شرحاً عن قواعد وفنيات الخط
              الديوانيموقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل
              المدربين في الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
            </p>
            <!--  -->
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BlogCard',
}
</script>

<style></style>
