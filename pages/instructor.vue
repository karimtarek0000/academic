<template>
  <main class="instructor">
    <header class="custom-container padding-y-45 border-bottom-whiteDark">
      <div class="row instructor g-0 padding-x-10">
        <div class="col-12 col-md-6 d-flex">
          <div class="row g-0 width-100">
            <!--  -->
            <div class="col-12 col-sm-6 d-flex flex-column align-items-center">
              <figure
                class="margin-0 instructor__image overflow-hidden radius-49"
              >
                <img
                  class="resize-img"
                  src="~/assets/images/global/test.png"
                  alt=""
                />
              </figure>
              <!--  -->
              <div
                class="
                  col-6 col-md-10 col-lg-8
                  d-flex
                  justify-content-between
                  margin-top-10
                "
              >
                <a
                  role="instagram"
                  style="width: 2.9rem; height: 2.9rem"
                  href="#"
                  target="_blank"
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    bg-instagram
                    rounded-circle
                  "
                >
                  <GSvg
                    class="svg-18 fill-light"
                    name-icon="instagram"
                    title="instagram"
                  />
                </a>
                <a
                  role="facebook"
                  style="width: 2.9rem; height: 2.9rem"
                  href="#"
                  target="_blank"
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    bg-facebook
                    rounded-circle
                  "
                >
                  <GSvg
                    class="svg-18 fill-light"
                    name-icon="facebook"
                    title="facebook"
                  />
                </a>
                <a
                  role="twitter"
                  style="width: 2.9rem; height: 2.9rem"
                  href="#"
                  target="_blank"
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    bg-twitter
                    rounded-circle
                  "
                >
                  <GSvg
                    class="svg-18 fill-light"
                    name-icon="twitter"
                    title="twitter"
                  />
                </a>
                <a
                  role="google"
                  style="width: 2.9rem; height: 2.9rem"
                  href="#"
                  target="_blank"
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    bg-light
                    rounded-circle
                    border-whiteDark
                  "
                >
                  <GSvg class="svg-18" name-icon="google" title="google" />
                </a>
              </div>
            </div>
            <!--  -->
            <figure
              class="
                col-12 col-sm-6
                d-flex
                flex-column
                align-items-center align-items-sm-start
                margin-bottom-0
                sm-margin-top-10
                padding-start-5
              "
            >
              <p role="name" class="text-18">أحمد حمدان</p>
              <p
                role="email"
                class="text-14 text-silver weight-br-300 margin-bottom-5"
              >
                ibtdi.com@gmail.com
              </p>
              <p
                role="job"
                class="
                  text-light
                  bg-emerald
                  text-12
                  radius-9
                  weight-br-300
                  text-center
                  col-lg-6 col-md-9 col-6
                  padding-y-5
                "
              >
                أستاذ موارد بشرية
              </p>
              <div
                class="d-flex justify-content-center justify-content-sm-start"
              >
                <figure role="students" class="text-center margin-end-50">
                  <p role="count" class="text-25">155</p>
                  <p role="title" class="text-silver text-12 weight-br-300">
                    عدد الطلاب
                  </p>
                </figure>
                <figure role="courses" class="text-center">
                  <p role="count" class="text-25">15</p>
                  <p role="title" class="text-silver text-12 weight-br-300">
                    عدد الكورسات
                  </p>
                </figure>
              </div>
            </figure>
          </div>
        </div>
        <!--  -->
        <div class="col-12 col-md-6 text-dark md-margin-top-20">
          <h1 role="head" class="text-25 margin-bottom-15">ماذا تعرف عني ؟</h1>
          <p role="description" class="text-12 weight-br-300">
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
            تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة هنالك
            العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
            تعديلها بشكل
          </p>
        </div>
      </div>
    </header>
    <!--  -->
    <section class="custom-container padding-y-30">
      <h2 role="head" class="text-22 text-dark margin-end-20 margin-bottom-20">
        <span role="title" class="text-25 margin-end-5">كورساتي</span>
        <span role="count-courses" class="text-16 weight-br-300 text-silver"
          >(كورس 6)</span
        >
      </h2>
      <div role="courses" class="row justify-content-between">
        <Card v-for="d in 6" :key="d" class="margin-bottom-30">
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
          </template>
        </Card>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Instructor',
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.name) && params.name
  },
  head() {
    return {
      title: `${this.$route.params.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'عن المدرب',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.instructor {
  &__image {
    width: 19.9rem;
    height: 17rem;
  }
}
</style>
