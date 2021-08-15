<template>
  <header class="overflow-hidden lg-margin-top-40">
    <div class="row align-items-center">
      <!--  -->
      <div
        class="
          col-12 col-md-6
          d-flex
          align-items-center align-items-md-start
          order-1 order-md-0
        "
      >
        <img
          class="resize-img animate-slide-right"
          src="~/assets/images/home/header/video.png"
          alt="video"
        />
      </div>
      <!--  -->
      <div
        class="
          col-12 col-md-5
          d-flex
          flex-column
          align-items-center align-items-md-start
          order-0 order-md-1
          md-margin-start-0
          margin-start-50
        "
      >
        <h2
          role="head"
          class="text-29 search"
          data-text="ابحث عن ما تريد وتعلم"
        >
          ابحث عن ما تريد وتعلم
        </h2>
        <h1 role="head" class="text-38 text-dark text-align-center after">
          في أي وقت وفي أي مكان
        </h1>
        <p
          role="description"
          class="
            text-18 text-coral
            weight-br-300
            w-75
            text-silver
            margin-top-10
            after
            text-align-center
          "
        >
          موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن
          العربي مع التمتع بمميزات عديدة في أكاديمي
        </p>
        <!--  -->
        <BtnPrimary
          class="
            btn-Voodoo
            after-btn
            height-60
            width-195
            margin-y-38
            text-16 text-light
          "
          title="ابدأ التعلم"
          to="sign-up"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
@media only screen and (min-width: 992px) {
  //
  .animate-slide-right {
    animation: slide-right 1.5s ease-in-out forwards;
    will-change: animation;
  }
  //
  @keyframes slide-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  //
  .after {
    position: relative;

    //
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scaleY(1);
      transform-origin: bottom;
      background-color: var(--light);
      @include position('allCenter');
      animation: scale-0 2s ease-in-out forwards;
      will-change: animation;
    }
  }

  //
  @keyframes scale-0 {
    from {
      transform: translate(-50%, -50%) scaleY(1);
    }
    to {
      transform: translate(-50%, -50%) scaleY(0);
    }
  }
  //
  .after-btn {
    animation: slide-up 1.5s ease-in-out forwards;
  }
  //
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}

.search {
  position: relative;
  color: transparent;
  width: 300px;

  //
  &::after {
    content: attr(data-text);
    position: absolute;
    width: 0%;
    height: 100%;
    display: block;
    color: var(--coral);
    top: 0;
    right: 0;
    display: block;
    border-left: 1px solid var(--gray);
    overflow: hidden;
    white-space: nowrap;
    animation: typing 5s 2s infinite;
    will-change: animation;
  }
}

@keyframes typing {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
