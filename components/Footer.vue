<template>
  <footer class="margin-top-40">
    <!--  -->
    <div class="bg-Voodoo radius-60 overflow-hidden">
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
              weight-br-300
              text-13
              lg-width-100
              width-75
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
                class="
                  social
                  width-41
                  height-41
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
        <div class="col-lg-4 lg-margin-bottom-10">
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
              class="
                padding-start-27
                bg-voodoo-light
                text-13 text-light
                width-100
                lg-width-50
                md-width-100
                height-55
                weight-br-300
                radius-21
              "
              type="email"
              placeholder="البريد الالكتروني"
              autocomplete="off"
            />

            <button
              type="submit"
              class="
                btn btn-coral
                width-155
                text-light text-14
                height-55
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
        <li class="width-58 height-33 margin-end-10">
          <img
            class="img-fluid"
            src="~/assets/images/global/icons/mastercard.svg"
            alt="mastercard"
          />
        </li>
        <li class="width-58 height-33 margin-end-10">
          <img
            class="img-fluid"
            src="~/assets/images/global/icons/visa.svg"
            alt="visa"
          />
        </li>
        <li class="width-58 height-33 margin-end-10">
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
          mr-auto
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
          class="img-fluid height-20 margin-x-5"
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
          path: 'index',
        },
        {
          name: 'المدونة',
          path: 'index',
        },
        {
          name: 'من نحن',
          path: 'index',
        },
        {
          name: 'اتصل بنا',
          path: 'index',
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
.social {
  svg {
    position: relative;
    z-index: 2;
  }
}
</style>
