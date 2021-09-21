<template>
  <main>
    <header
      class="
        row
        g-0
        flex-column
        align-items-center
        text-center
        padding-y-45
        border-bottom-whiteDark
      "
    >
      <div class="custom-container">
        <h1 class="text-30 text-dark">
          طريقة عمل تايبوجرافي خرافي وسهل بالاليستريتور
        </h1>
        <!--  -->
        <div
          class="
            d-flex
            align-items-center
            justify-content-center
            text-14
            margin-top-20
            weight-br-300
            text-dark
          "
        >
          <div role="blog-info" class="d-flex align-items-center margin-y-5">
            <GSvg
              class="svg-20 fill-silver margin-end-5"
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
            <span class="margin-start-5">3 يناير 2020</span>
          </div>
        </div>
      </div>
    </header>
    <!--    -->
    <section role="article-body" class="custom-container padding-y-45 text-12">
      <div class="col-11 col-md-7 mx-auto">
        <p
          v-for="i in 2"
          :key="i"
          class="margin-bottom-40"
          style="line-height: 29px"
        >
          هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
          تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
          إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس
          هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
          تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع
          من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة هنالك العديد من
          الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
          هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
          تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
          إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس
          هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
          تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع
          من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة هنالك العديد من
          الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
        </p>
        <!--        -->
        <figure class="margin-bottom-40 radius-21 overflow-hidden">
          <img
            class="resize-img"
            src="~/assets/images/global/article.png"
            alt=""
          />
        </figure>
        <!--        -->
        <p
          v-for="i in 2"
          :key="i"
          class="margin-bottom-40"
          style="line-height: 29px"
        >
          هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
          تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
          إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس
          هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
          تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع
          من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة هنالك العديد من
          الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
          هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
          تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
          إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس
          هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
          تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع
          من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة هنالك العديد من
          الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Article',
  validate({ params }) {
    // Must be params number not string and params exsist.
    return /^\d+$/.test(params.id) && params.id
  },
  layout: 'site',
  head() {
    return {
      title: 'مقال',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'مقال',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
