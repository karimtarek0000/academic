<template>
  <div
    role="card"
    class="card specific-size shadow__card-1 padding-0 radius-21"
  >
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
        <h4 role="title" class="text-15 text-dark">
          الفرق بين التايبوجرافي و الكاليجرافي وفن التعريب
        </h4>
      </div>
      <!-- Part 2 -->
      <div class="row border-bottom-whiteDark padding-y-15">
        <!-- Part 1 -->
        <div class="col d-flex align-items-center">
          <!--  -->
          <figure
            style="width: 3.2rem; height: 3.2rem"
            class="flex-shrink-0 margin-0 rounded-circle"
          >
            <img
              class="resize-img"
              src="~/assets/images/home/other/avatar.png"
              alt=""
            />
          </figure>
          <!--  -->
          <span class="margin-start-5 text-dark text-10">أحمد حمدان</span>
        </div>
        <!-- Part 2 -->
        <slot name="part2" />
      </div>
      <!-- Part 3 -->
      <div class="row justify-content-between padding-y-15">
        <slot name="part3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
</style>
