<template>
  <section role="overview">
    <div>
      <h2 role="head" class="text-dark text-18 margin-bottom-15">آخر نشاط</h2>
      <!--  -->
      <div
        class="
          border-whiteDark
          padding-y-20
          lg-padding-start-30 lg-padding-end-30
          padding-start-67
          radius-21
        "
      >
        <div class="row col-lg-11 g-0 justify-content-between">
          <!--  -->
          <div class="col-12 col-md-6 md-padding-end-0 padding-end-20">
            <div>
              <!--  -->
              <h6 class="row margin-bottom-10">
                <span class="col text-16 text-dark">آخر الاسئلة</span>
                <BtnPrimary
                  class="
                    col-2
                    fit-content
                    btn-light
                    cursor-pointer
                    text-start text-12 text-coral
                  "
                  @clicked="goToComp('UserQuestionAndAnswer')"
                >
                  عرض الكل
                </BtnPrimary>
              </h6>
              <!--  -->
              <div class="row g-0 flex-column">
                <div
                  style="min-height: 10.6rem"
                  class="
                    col
                    d-flex
                    flex-column flex-sm-row
                    align-items-center
                    bg-alabaster
                    padding-x-20 padding-y-10
                    radius-10
                    margin-bottom-15
                  "
                >
                  <figure
                    class="margin-bottom-0 rounded-circle flex-shrink-0"
                    style="width: 6.8rem; height: 6.8rem"
                  >
                    <img
                      class="resize-img"
                      src="~/assets/images/home/other/avatar2.png"
                      alt=""
                    />
                  </figure>
                  <p
                    role="question"
                    class="
                      margin-start-10
                      sm-margin-top-10
                      md-width-100
                      width-75
                      text-13 text-dark
                      weight-br-300
                    "
                  >
                    ما هو الكاليجرافي وما هو فن التعريب أرجو الشرح بطريقة اوضح؟
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-12 col-md-6 md-padding-start-0 padding-start-20">
            <div style="min-height: 10.6rem">
              <!--  -->
              <h6 class="row g-0 align-items-center margin-bottom-10">
                <span class="col text-16 text-dark">آخر الاعلانات</span>
                <BtnPrimary
                  class="
                    col-2
                    fit-content
                    btn-light
                    cursor-pointer
                    text-start text-12 text-coral
                  "
                  @clicked="goToComp('Ads')"
                >
                  عرض الكل
                </BtnPrimary>
              </h6>
              <!--  -->
              <div class="row g-0 flex-column">
                <div
                  style="min-height: 10.6rem"
                  class="
                    col
                    d-flex
                    flex-column flex-sm-row
                    align-items-center
                    bg-alabaster
                    padding-x-20 padding-y-10
                    radius-10
                    margin-bottom-15
                  "
                >
                  <figure
                    class="margin-bottom-0 rounded-circle flex-shrink-0"
                    style="width: 6.8rem; height: 6.8rem"
                  >
                    <img
                      class="resize-img"
                      src="~/assets/images/home/other/avatar2.png"
                      alt=""
                    />
                  </figure>
                  <p
                    role="question"
                    class="
                      margin-start-10
                      sm-margin-y-10
                      md-width-100
                      width-75
                      text-13 text-dark
                      weight-br-300
                    "
                  >
                    لا يوجد محاضرة اليوم أرجو اعلام الغائب
                  </p>
                  <GSvg class="svg-60" name-icon="megaphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div role="about-course" class="padding-y-30 border-botton-whiteDark">
      <h2 role="head" class="text-dark text-18 margin-bottom-15">عن الدورة</h2>
      <p role="description" class="text-16 text-silver weight-br-300">
        اختلط الأمر كثيراً عند المصممين وخصوصاً المبتدئين منهم رغم أن فن الكتابة
        أو فن الخط معروف لدى العرب
      </p>
    </div>
    <!--  -->
    <div
      role="information"
      class="
        d-flex
        flex-column flex-sm-row
        align-items-start align-items-sm-center
        padding-y-45
        border-botton-whiteDark
      "
    >
      <h2
        role="head"
        class="text-dark text-18 sm-margin-bottom-15 margin-end-20"
      >
        بالارقام
      </h2>
      <div class="d-flex">
        <figure
          role="count-lecture"
          style="min-height: 3.9rem"
          class="
            margin-bottom-0 margin-end-10
            text-13 text-light
            weight-br-300
            text-center
            bg-emerald
            d-flex
            align-items-center
            justify-content-center
            radius-9
            padding-x-20
          "
        >
          12 محاضرة
        </figure>
        <figure
          role="count-students"
          style="min-height: 3.9rem"
          class="
            margin-bottom-0 margin-end-10
            text-13 text-light
            weight-br-300
            text-center
            bg-emerald
            d-flex
            align-items-center
            justify-content-center
            radius-9
            padding-x-20
          "
        >
          12 شخص مشترك
        </figure>
        <figure
          role="language-lectures"
          style="min-height: 3.9rem"
          class="
            margin-bottom-0
            text-13 text-silver
            weight-br-300
            text-center
            bg-gallery
            d-flex
            align-items-center
            justify-content-center
            radius-9
            padding-x-20
          "
        >
          اللغة الانجليزية
        </figure>
      </div>
    </div>
    <!--  -->
    <div role="description" class="padding-y-30 border-botton-whiteDark">
      <h2 role="head" class="text-dark text-18 margin-end-20 margin-bottom-20">
        الوصف
      </h2>
      <p class="text-14 text-silver weight-br-300 col-lg-10">
        فن الكاليجرافي أو فن الخط الجميل ، هو نوع من أنواع الخطوط اليدوية التي
        استمدت مصطلحها من تركيب الكلمتين اليونانيتين ” جمال ” بمعنى (كالوس) و ”
        للكتابة ” بمعنى (غرافين) ، يتوقف الكاليجرافي على معرفة أكيدة بالشكل
        الصحيح للحروف بمعنى آخر الإشارات التقليدية التي يمكن من خلالها توصيل
        اللغة ، مع معرفة المهارة لجعلها سهلة لترتيب الأجزاء المختلفة من تلك
        الحروف ، مع توفير الانسجام في النسب ، والتي يكون سهل التعرف عليها عينا
        من قبل ذوي الخبرة ، كتكوين عمل فني سلس وجميل
      </p>
      <br />
      <br />
      <p class="text-14 text-silver weight-br-300 col-lg-10">
        فن الكاليجرافي أو فن الخط الجميل ، هو نوع من أنواع الخطوط اليدوية التي
        استمدت مصطلحها من تركيب الكلمتين اليونانيتين ” جمال ” بمعنى (كالوس) و ”
        للكتابة ” بمعنى (غرافين) ، يتوقف الكاليجرافي على معرفة أكيدة بالشكل
        الصحيح للحروف بمعنى آخر الإشارات التقليدية التي يمكن من خلالها توصيل
        اللغة ، مع معرفة المهارة لجعلها سهلة لترتيب الأجزاء المختلفة من تلك
        الحروف ، مع توفير الانسجام في النسب ، والتي يكون سهل التعرف عليها عينا
        من قبل ذوي الخبرة ، كتكوين عمل فني سلس وجميل
      </p>
    </div>
    <!--  -->
    <div role="about-intructor" class="padding-y-20">
      <AboutTeacher>
        <h2
          slot="head"
          role="head"
          class="text-dark text-18 margin-end-20 margin-bottom-20"
        >
          المدرب
        </h2>
        <div
          slot="social"
          class="col-5 col-sm-8 d-flex justify-content-between margin-top-10"
        >
          <a
            role="instagram"
            href="#"
            target="_blank"
            class="
              d-flex
              align-items-center
              justify-content-center
              width-29
              height-29
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
            href="#"
            target="_blank"
            class="
              d-flex
              align-items-center
              justify-content-center
              width-29
              height-29
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
            href="#"
            target="_blank"
            class="
              d-flex
              align-items-center
              justify-content-center
              width-29
              height-29
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
            href="#"
            target="_blank"
            class="
              d-flex
              align-items-center
              justify-content-center
              width-29
              height-29
              bg-light
              rounded-circle
              border-whiteDark
            "
          >
            <GSvg class="svg-18" name-icon="google" title="google" />
          </a>
        </div>
      </AboutTeacher>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserCourseOverview',
  methods: {
    goToComp(nameComp) {
      this.$emit('goToComponent', nameComp)
    },
  },
}
</script>

<style></style>
