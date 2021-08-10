<template>
  <div
    class="
      col
      flex-column
      align-items-center
      text-center
      shadow-cards
      padding-y-30
      radius-21
    "
  >
    <!--  -->
    <figure class="width-91 height-91 rounded-circle mx-auto">
      <img
        class="resize-img"
        src="~/assets/images/home/other/avatar2.png"
        alt=""
      />
    </figure>
    <!--  -->
    <div class="width-75 mx-auto d-flex flex-column align-items-center">
      <p role="opnion" class="text-13 text-black weight-br-300">
        موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن
        العربي مع التمتع بمميزات عديدة في أكاديمي
      </p>
      <!--  -->
      <client-only>
        <StarsRatings
          v-model="rating"
          :read-only="true"
          :show-rating="false"
          :rounded-corners="true"
          :star-size="20"
          active-color="#FEC108"
          inactive-color="#ffffff"
          border-color="#FEC108"
          :border-width="1"
          :padding="5"
          class="margin-y-10 direction-ltr"
        />
      </client-only>
    </div>
    <!--  -->
    <div>
      <p role="name" class="text-black text-14 margin-0">أحمد حمدان</p>
      <p role="job" class="text-silver weight-br-300 text-12">
        أستاذ موارد بشرية
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTestimonials',
  data() {
    return {
      rating: 3,
    }
  },
}
</script>

<style></style>
