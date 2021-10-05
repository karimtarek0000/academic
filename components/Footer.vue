<template>
  <footer class="margin-top-40 footer">
    <!--  -->
    <div class="bg-voodoo radius-60 overflow-hidden">
      <div
        class="
          row
          padding-y-67
          custom-container
          md-padding-x-30
          justify-content-between
        "
      >
        <!--  -->
        <div class="col-lg-4 lg-margin-bottom-10">
          <Logo class="text-light margin-bottom-15" />
          <p
            role="description"
            class="
              text-snuff
              col-9
              weight-br-300
              text-13
              lg-width-100
              margin-top-18
            "
          >
            موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن
            العربي مع التمتع بمميزات عديدة في أكاديمي
          </p>
          <ul class="list-unstyled d-flex margin-top-40">
            <li v-for="so in social" :key="so.icon" class="margin-end-10">
              <a
                :href="so.link"
                style="width: 4.1rem; height: 4.1rem"
                class="
                  social
                  d-flex
                  justify-content-center
                  align-items-center
                  bg-voodoo-light
                  rounded-circle
                  position-relative
                  shape shape__coral
                "
              >
                <GSvg
                  class="svg-20 fill-light"
                  :name-icon="so.icon"
                  :title="so.icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="col-lg-4 lg-margin-bottom-10 footer__links">
          <div class="row">
            <!--  -->
            <div class="col">
              <p role="site" class="text-light text-14">الموقع</p>
              <ul class="list-unstyled margin-top-18">
                <li v-for="site in ourSite" :key="site.name">
                  <nuxt-link
                    class="text-snuff text-14 weight-br-300"
                    :to="{ name: site.path }"
                    >{{ site.name }}</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <!--  -->
            <div class="col">
              <p role="sections" class="text-light text-14">الأقسام</p>
              <ul class="row list-unstyled margin-top-18">
                <li
                  v-for="(section, index) in sections"
                  :key="index"
                  class="col-6"
                >
                  <nuxt-link
                    class="text-snuff text-14 weight-br-300"
                    :to="{ name: section.path }"
                    >{{ section.name }}</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-lg-4">
          <p role="subscription" class="text-14 text-light margin-bottom-21">
            اشترك في النشرة البريدية
          </p>
          <form
            class="
              custom-input custom-input--object-2
              height-100
              position-relative
              margin-top-18
              d-flex
              flex-column
            "
          >
            <input
              style="height: 5.5rem"
              class="
                padding-start-27
                bg-voodoo-light
                text-13 text-light
                col-sm-7 col-lg-12
                weight-br-300
                radius-21
              "
              type="email"
              placeholder="البريد الالكتروني"
              autocomplete="off"
            />

            <button
              style="width: 15.5rem; height: 5.5rem"
              type="submit"
              class="
                btn btn-coral
                bg-coral
                text-light text-14
                radius-21
                margin-top-30
              "
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="row justify-content-center justify-content-lg-between padding-y-15"
    >
      <!--  -->
      <ul
        class="
          col
          list-unstyled
          d-flex
          justify-content-center justify-content-lg-start
          xxlg-padding-start-20
          lg-margin-bottom-10
          margin-bottom-0
        "
      >
        <li style="width: 5.8rem; height: 3.3rem" class="margin-end-10">
          <img
            class="img-fluid"
            src="~/assets/images/global/icons/mastercard.svg"
            alt="mastercard"
          />
        </li>
        <li style="width: 5.8rem; height: 3.3rem" class="margin-end-10">
          <img
            class="img-fluid"
            src="~/assets/images/global/icons/visa.svg"
            alt="visa"
          />
        </li>
        <li style="width: 5.8rem; height: 3.3rem" class="margin-end-10">
          <img
            class="img-fluid"
            src="~/assets/images/global/icons/mada.svg"
            alt="mada"
          />
        </li>
      </ul>
      <p
        role="copyright"
        class="
          col-lg-5
          margin-start-auto
          d-flex
          text-16
          justify-content-center
          align-items-center
          weight-br-300
          text-rhino
        "
      >
        <span>تصميم وبرمجة</span>
        <img
          style="height: 20px"
          class="img-fluid margin-x-5"
          src="~/assets/images/global/logos/designBy.svg"
          alt="ibtdi"
        />
        <span>جميع الحقوق محفوظة ©{{ year }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      ourSite: [
        {
          name: 'الرئيسية',
          path: 'index',
        },
        {
          name: 'انضم الينا كمدرب',
          path: 'join-us-instructor',
        },
        {
          name: 'المدونة',
          path: 'blogs',
        },
        {
          name: 'من نحن',
          path: 'who-we-are',
        },
        {
          name: 'اتصل بنا',
          path: 'contact-us',
        },
      ],
      sections: [
        {
          name: 'التصميم',
          path: 'index',
        },
        {
          name: ' التصوير',
          path: 'index',
        },
        {
          name: 'ميديا',
          path: 'index',
        },
        {
          name: 'التسويق',
          path: 'index',
        },
        {
          name: 'البرمجة',
          path: 'index',
        },
        {
          name: 'التصميم',
          path: 'index',
        },
        {
          name: 'التصوير',
          path: 'index',
        },
        {
          name: 'ميديا',
          path: 'index',
        },
        {
          name: 'التسويق',
          path: 'index',
        },
        {
          name: 'البرمجة',
          path: 'index',
        },
      ],
      social: [
        {
          icon: 'facebook',
          link: '#',
        },
        {
          icon: 'twitter',
          link: '#',
        },
        {
          icon: 'instagram',
          link: '#',
        },
        {
          icon: 'google-plus',
          link: '#',
        },
      ],
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss">
.footer {
  .social {
    svg {
      position: relative;
      z-index: 2;
    }
  }

  &__links a {
    @include DetectHover {
      &:hover {
        text-decoration: underline;
        color: var(--light);
      }
    }
  }
}
</style>
