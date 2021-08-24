<template>
  <section role="new-courses" class="margin-top-90">
    <!--  -->
    <Heading h5="تعلم أولا" h2="الكورسات المضافة حديثا" />
    <!--  -->
    <slot />
    <!--  -->
    <div role="all-courses" class="set-padding margin-top-50">
      <div class="row justify-content-between padding-x-15">
        <Card v-for="i in 3" :key="i" class="margin-bottom-30">
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
                <span>S.R</span> <span class="m-s-2">50</span>
              </p>
              <del
                role="discount"
                class="d-flex text-silver text-14 weight-br-300"
              >
                <span>S.R</span>
                <span class="m-s-2">50</span>
              </del>
            </div>
            <div class="col flex-grow-0">
              <BtnPrimary
                class="
                  bg-Voodoo
                  text-12
                  width-116
                  height-41
                  text-light
                  btn-Voodoo
                  radius-18
                "
              >
                أضف الى السلة
              </BtnPrimary>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <!--  -->
    <BtnGo
      class="
        btn-Voodoo
        width-181
        height-55
        margin-y-38
        text-14 text-light
        mx-auto
      "
      to="index"
    >
      شاهد المزيد
    </BtnGo>
  </section>
</template>

<script>
export default {
  name: 'SectionNewCourses',
}
</script>

<style lang="scss">
.navbar-selected {
  //
  &__active {
    font-weight: 400;
    background-color: var(--coral);
    color: var(--light);
  }

  //
  &__item {
    @include DetectHover {
      &:hover {
        background-color: var(--coral);
        color: var(--light);
      }
    }
  }
}
</style>
