<template>
  <header class="header radius-21 margin-top-20">
    <!--  -->
    <div
      class="
        row
        g-0
        justify-content-between
        padding-y-67 padding-x-30
        set-padding
      "
    >
      <!-- 1 -->
      <div class="col-12 col-md-8 padding-0">
        <!-- 1 -->
        <div>
          <h1 role="head" class="text-29 text-light">
            الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
          </h1>
          <p
            role="description"
            class="text-16 text-snuff weight-br-300 margin-top-20 xxlg-width-75"
          >
            اختلط الأمر كثيراً عند المصممين وخصوصاً المبتدئين منهم رغم أن فن
            الكتابة أو فن الخط معروف لدى العرب
          </p>
        </div>
        <!-- 2 -->
        <div class="row g-0 align-items-center margin-y-30">
          <!-- 1 -->
          <div class="col-12 col-sm-8 padding-x-0 d-flex align-items-center">
            <client-only>
              <StarsRatings
                v-model="rating"
                :read-only="true"
                :rounded-corners="true"
                :star-size="20"
                active-color="#FEC108"
                inactive-color="#362654"
                border-color="#FEC108"
                :border-width="1"
                :padding="5"
                class="margin-y-10"
              />
            </client-only>
            <div role="review" class="d-flex text-snuff weight-br-300 text-14">
              (
              <p class="margin-x-5">400</p>
              <p class="margin-end-5">مراجعة</p>
              )
            </div>
          </div>
          <!-- 2 -->
          <div
            class="
              col-12 col-sm-3
              padding-x-0
              d-flex
              align-items-center
              text-snuff
              weight-br-300
              text-14
            "
          >
            <GSvg
              class="svg-20 fill-light margin-end-5"
              name-icon="user"
              title="طالب"
            />
            <p role="count-students" class="margin-end-5">20</p>
            <p>شخص مشترك</p>
          </div>
        </div>
        <!-- 3 -->
        <div class="row g-0 text-14 weight-br-300">
          <!-- 1 -->
          <div class="col col-lg-3 d-flex">
            <span class="text-snuff margin-end-10">بواسطة</span>
            <nuxt-link
              to="/"
              role="author"
              class="author text-chardonnay cursor-pointer"
            >
              أحمد حمدان
            </nuxt-link>
          </div>
          <!-- 2 -->
          <div class="col col-lg-3 d-flex text-14">
            <span class="text-snuff">اخر تحديث</span>
            <p role="last-update" class="text-chardonnay margin-start-10">
              20/8/2020
            </p>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div
        class="
          col-12 col-md-3
          d-flex
          justify-content-center
          md-margin-top-50
          justify-content-md-end
          padding-0
        "
      >
        <!--  -->
        <div
          class="
            icons
            bg-smoky
            radius-18
            d-flex
            flex-column
            align-items-center
            justify-content-center
            cursor-pointer
            margin-end-10
          "
        >
          <!--  -->
          <GSvg
            class="svg-22 fill-light"
            name-icon="heart-fill"
            title="المفضلة"
          />
          <!--  -->
          <span class="text-light text-12">المفضلة</span>
        </div>
        <!--  -->
        <div
          class="
            icons
            bg-smoky
            radius-18
            d-flex
            flex-column
            align-items-center
            justify-content-center
            cursor-pointer
          "
        >
          <!--  -->
          <GSvg
            class="svg-22 fill-light"
            name-icon="share-forward-fill"
            title="شارك"
          />
          <!--  -->
          <span class="text-light text-12">شارك</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderCoursePage',
  inject: ['rating'],
}
</script>

<style lang="scss">
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~assets/images/global/banar.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  .icons {
    width: 8.3rem;
    height: 7.4rem;
  }

  .author {
    text-decoration: underline;
    //
    &:hover {
      color: var(--chardonnay);
    }
  }

  .vue-star-rating-rating-text {
    font-family: inherit;
    font-size: 1.4rem;
    color: var(--light);
    margin: 0 1rem;
  }
}
</style>
