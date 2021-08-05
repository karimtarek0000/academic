<template>
  <footer class="bg-Voodoo radius-60 padding-y-67 padding-x-89 margin-top-110">
    <div class="row justify-content-between">
      <!--  -->
      <div class="col-3">
        <Logo class="text-white margin-bottom-21" />
        <p
          role="description"
          class="text-snuff weight-br-300 text-13 margin-top-18"
        >
          موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن
          العربي مع التمتع بمميزات عديدة في أكاديمي
        </p>
      </div>
      <!--  -->
      <div class="col-4">
        <div class="row">
          <!--  -->
          <div class="col">
            <p role="site" class="text-white text-14 margin-bottom-21">
              الموقع
            </p>
            <ul class="list-unstyled">
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
            <p role="sections" class="text-white text-14 margin-bottom-21">
              الأقسام
            </p>
            <ul class="row list-unstyled">
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
      <div class="col-4">
        <p role="subscription" class="text-14 text-white margin-bottom-21">
          اشترك في النشرة البريدية
        </p>
        <form
          class="
            custom-input custom-input--object-2
            height-100
            position-relative
          "
        >
          <input
            class="
              padding-start-27
              bg-voodoo-light
              text-13 text-white
              width-100
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
              text-white text-14
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
          name: '.التصميم',
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
    }
  },
}
</script>

<style></style>
