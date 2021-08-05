<template>
  <div>
    <!-- Start container -->
    <div class="toggler__wrapper">
      <!-- Start inner navbar -->
      <div class="toggler__inner">
        <!-- 2) - Toggler -->
        <div class="toggler__toggler" @click.stop="toggler">
          <!-- Burger -->
          <div
            :class="[
              'toggler__toggler__burger',
              { 'toggler__toggler__burger--active': toggleNavbar },
            ]"
          >
            <span v-for="index of 5" :key="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toggler',
  props: {
    statusToggler: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggleNavbar: false,
    }
  },
  watch: {
    statusToggler(n) {
      this.toggleNavbar = n
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.toggleNavbar = false
      this.$emit('toggler', this.toggleNavbar)
    })
  },
  methods: {
    //
    toggler() {
      this.toggleNavbar = !this.toggleNavbar
      this.$emit('toggler', this.toggleNavbar)
    },
  },
}
</script>

<style lang="scss">
// Navbarbar vue 1
.toggler {
  direction: ltr;
  // 1) - Wrapper
  &__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    //
    @media (max-width: 992px) {
      padding: 0 5px;
    }
  }
  // 2) - Inner
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // 3) - Logo
  &__logo {
    height: 100%;
    margin-right: 100px;

    //
    img {
      max-width: 100%;
    }
  }
  // 4) - Toggler
  &__toggler {
    display: none;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    direction: rtl;
    overflow: hidden;

    // Responsive
    @media (max-width: 992px) {
      display: flex;
    }
    // 1) - Burger
    &__burger {
      position: relative;
      width: 40px;
      height: 40px;
      cursor: pointer;
      // Span
      span {
        position: absolute;
        display: block;
        height: 4px;
        width: 40px;
        border-radius: 100px;
        transform-origin: center;
        opacity: 1;
        transition: opacity 0.6s ease-in-out;
        will-change: right, transform;

        // 1)
        &:nth-of-type(1) {
          top: 8px;
          width: 30px;
          right: 5px;
          transition: all 0.6s ease-in-out;
        }
        // 2)
        &:nth-of-type(2) {
          width: 20px;
          top: 18px;
          right: 5px;
          transition: all 0.6s 0.2s ease-in-out;
        }
        // 3)
        &:nth-of-type(3) {
          width: 10px;
          top: 28px;
          right: 5px;
          transition: all 0.6s 0.4s ease-in-out;
        }
        // 4), 5)
        &:nth-of-type(4),
        &:nth-of-type(5) {
          right: -0.2px;
          top: 17.5px;
          opacity: 0;
        }
        // 4)
        &:nth-of-type(4) {
          transform: rotate(45deg) translate3d(-60px, 0, 0);
          transition: all 0.6s 0.8s ease-out, all 0.7s 0s ease-in;
        }
        // 5)
        &:nth-of-type(5) {
          transform: rotate(-45deg) translate3d(-60px, 0, 0);
          transition: all 0.6s 0.8s ease-out, all 0.7s 0s ease-in;
        }
      }

      //
      &--active {
        //
        span {
          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3) {
            right: -40px;
            opacity: 0;
          }
          //
          &:nth-of-type(4),
          &:nth-of-type(5) {
            opacity: 1;
          }
          //
          &:nth-of-type(4) {
            transform: rotate(45deg) translate3d(0, 0, 0);
          }
          // 5)
          &:nth-of-type(5) {
            transform: rotate(-45deg) translate3d(0, 0, 0);
          }
        }
      }
    }
  }
  // 5) - Others
  &__others {
    display: flex;
    align-items: center;
    width: 75%;

    //
    @media (max-width: 992px) {
      position: fixed;
      flex-direction: column;
      justify-content: space-between;
      top: 0;
      left: 0;
      width: 200px;
      height: 100vh;
      transform: translateX(-100%);
      transition: transform 0.7s ease-in-out;
      will-change: transform;
      z-index: 9999;
    }

    //
    &--active {
      //
      @media (max-width: 992px) {
        transform: translateX(0);
      }
    }
  }
  // 5) - Items
  &__items {
    display: flex;
    background-color: transparent;
    color: white;
    text-transform: capitalize;
    margin-right: auto;

    //
    @media (max-width: 992px) {
      flex-direction: column;
      margin-right: 0;
    }
  }
}
</style>
