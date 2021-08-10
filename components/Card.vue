<template>
  <div role="card" class="card specific-size shadow-cards padding-0 radius-21">
    <!--  -->
    <figure>
      <img
        class="resize-img"
        src="~/assets/images/home/other/card.png"
        alt=""
      />
    </figure>
    <!--  -->
    <div class="padding-y-10 padding-x-25">
      <!-- Part 1 -->
      <div>
        <h6 role="category-name" class="text-12 text-picton">التصميم</h6>
        <h4 role="title" class="text-15 text-black width-75">
          الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
        </h4>
      </div>
      <!-- Part 2 -->
      <div class="row border-botton-whiteDark padding-y-15">
        <!-- Part 1 -->
        <div class="col d-flex align-items-center">
          <!--  -->
          <figure
            class="width-32 flex-shrink-0 margin-0 height-32 rounded-circle"
          >
            <img
              class="resize-img"
              src="~/assets/images/home/other/avatar.png"
              alt=""
            />
          </figure>
          <!--  -->
          <span class="margin-start-5 text-black text-10">أحمد حمدان</span>
        </div>
        <!-- Part 2 -->
        <template v-if="!time">
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
            <GSvg class="svg-20" name-icon="notebook" title="المحاضرة" />
            <p role="number-lecture" class="margin-start-5 margin-0 text-13">
              <span>23</span>
              <span>محاضرة</span>
            </p>
          </div>
        </template>
        <template v-else>
          <div class="col d-flex align-items-center">
            <!--  -->
            <div class="margin-end-5 d-flex align-items-center">
              <GSvg class="svg-20" name-icon="time-line" title="الوقت" />
              <span class="text-silver text-11 margin-start-5">يبدا</span>
            </div>
            <!--  -->
            <div class="d-flex align-items-center text-black">
              <span role="date">20/8/2020</span>
              <span class="margin-x-5">|</span>
              <span role="time">12:00AM</span>
            </div>
          </div>
        </template>
      </div>
      <!-- Part 3 -->
      <div class="row justify-content-between padding-y-15">
        <template v-if="!btnMeeting">
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
            <BtnCard
              class="
                bg-Voodoo
                text-12
                width-116
                height-41
                text-white
                btn-Voodoo
                radius-18
              "
            />
          </div>
        </template>
        <template v-else>
          <div class="col">
            <BtnCard
              title="انضم الى الاجتماع"
              class="
                bg-Voodoo
                text-12
                width-116
                height-41
                text-white
                btn-Voodoo
                mx-auto
                radius-18
              "
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    time: {
      type: Boolean,
      default: false,
    },
    btnMeeting: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
//
.card {
  //
  @include DetectHover {
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-10px);
    }
  }
}

.specific-size {
  @media only screen and (min-width: 1350px) {
    flex-basis: calc(97% / 3);
  }

  @media only screen and (max-width: 1350px) {
    flex-basis: calc(97% / 3);
  }

  @media only screen and (max-width: 992px) {
    flex-basis: calc(97% / 2);
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
}
</style>
