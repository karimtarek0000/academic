<template>
  <section class="about-teacher">
    <slot name="head">
      <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-40">
        المدرب
      </h2>
    </slot>
    <div class="row" style="max-width: 83.1rem">
      <div class="col-12 d-flex flex-column align-items-center col-sm-4">
        <!--  -->
        <figure
          class="
            margin-0
            width-100
            about-teacher__image
            overflow-hidden
            radius-21
          "
        >
          <img
            class="resize-img"
            src="~/assets/images/global/test.png"
            alt=""
          />
        </figure>
        <slot name="social" />
      </div>
      <div class="col-12 col-sm-8">
        <p role="name" class="text-18">أحمد حمدان</p>
        <p
          role="job"
          class="text-14 text-silver weight-br-300 margin-bottom-10"
        >
          أستاذ موارد بشرية
        </p>
        <p role="description" class="text-14 weight-br-300">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
          سيلهي القارئ عن التركيز على الشكل الخارجي للنص
        </p>
        <!--  -->
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutTeacher',
}
</script>

<style></style>
