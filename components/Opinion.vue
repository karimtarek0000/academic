<template>
  <div
    role="opinion"
    style="max-width: 83.1rem"
    class="opinion radius-21 sm-padding-20 md-padding-10 overflow-hidden"
  >
    <div class="row align-items-center" style="min-height: 15.8rem">
      <!--  -->
      <div
        class="
          col-12 col-sm-2
          flex-grow-0
          padding-x-5
          d-flex
          flex-column
          align-items-center
          justify-content-sm-center
        "
      >
        <!--  -->
        <figure
          style="width: 6.8rem; height: 6.8rem"
          class="margin-0 rounded-circle overflow-hidden"
        >
          <img
            class="resize-img"
            src="~/assets/images/global/avatar.png"
            alt=""
          />
        </figure>
        <!--  -->
        <client-only>
          <StarsRatings
            v-model="rating"
            :read-only="true"
            :show-rating="false"
            :rounded-corners="true"
            :star-size="14"
            active-color="#FEC108"
            inactive-color="#ffff"
            border-color="#FEC108"
            :border-width="1"
            :padding="0"
            class="margin-y-10"
          />
        </client-only>
      </div>
      <!--  -->
      <div class="col-12 col-sm-8 flex-grow-2">
        <p role="name" class="text-14">أحمد حمدان</p>
        <p role="date" class="text-silver text-14 weight-br-300">20/8/2020</p>
        <p role="description" class="text-12 weight-br-300 xxlg-width-75">
          موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن
          العربي مع التمتع بمميزات عديدة في أكاديمي
        </p>
      </div>
      <!--  -->
      <div class="col-12 col-sm-2 text-center md-margin-top-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opinion',
  data() {
    return {
      rating: 3,
    }
  },
}
</script>

<style></style>
