<template>
  <header class="custom-container padding-y-67">
    <div class="row g-0 justify-content-center align-items-center">
      <slot name="video" />
      <!--  -->
      <div class="col margin-start-20 lg-margin-top-10">
        <div class="row g-0">
          <!--  -->
          <h1 role="head" class="col-12 text-20 text-dark margin-bottom-15">
            الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
          </h1>
          <!--  -->
          <p
            role="description"
            class="col-12 text-16 text-silver weight-br-300"
          >
            اختلط الأمر كثيراً عند المصممين وخصوصاً المبتدئين منهم رغم أن فن
            الكتابة أو فن الخط معروف لدى العرب
          </p>
          <!--  -->
          <div
            class="
              col-12
              d-flex
              text-14
              weight-br-300
              margin-top-10 margin-bottom-30
            "
          >
            <span class="text-silver margin-end-10">بواسطة</span>
            <nuxt-link
              to="/"
              role="author"
              class="underline text-chardonnay cursor-pointer"
            >
              أحمد حمدان
            </nuxt-link>
          </div>
          <!--  -->
          <div class="col-12 flex-shrink-0">
            <div class="row g-0 align-items-center">
              <slot name="progress" />
              <GSvg class="svg-20 col" name-icon="cup" title="التقدم" />
            </div>
            <slot name="btn" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderCousreUser',
}
</script>

<style></style>
