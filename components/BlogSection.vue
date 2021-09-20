<template>
  <section role="blog" class="blog margin-top-90">
    <!--  -->
    <Heading h5="دون وتعلم" h2="المدونة" />
    <!--  -->
    <div class="row justify-content-center">
      <!--  -->
      <div v-for="d in s" :key="d" class="col-4 blog__card lg-margin-bottom-30">
        <nuxt-link :to="{ name: '_article', params: { id: 1 } }">
          <!--  -->
          <figure class="radius-21 overflow-hidden">
            <img
              class="resize-img"
              src="~/assets/images/home/other/blog.png"
              alt=""
            />
          </figure>
          <!--  -->
          <div>
            <h6 role="category-blog" class="text-12 text-picton">التصميم</h6>
            <h4 role="blog-title" class="text-16 text-dark">
              طريقة عمل تايبوجرافي خرافي وسهل بالاليستريتور
            </h4>
            <!--  -->
            <div
              role="author-info"
              class="
                d-flex
                align-items-center
                text-dark
                weight-br-300
                margin-y-5
              "
            >
              <GSvg
                class="svg-20 margin-end-5"
                name-icon="user"
                title="الكاتب"
              />
              <span class="text-capitalize">ahmed hamdan</span>
            </div>
            <!--  -->
            <p
              style="width: 75%"
              role="description-blog"
              class="text-12 text-silver weight-br-300"
            >
              موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في
              الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!--  -->
    <AppBtnGo
      style="width: 18.1rem; height: 5.5rem"
      class="btn-voodoo margin-top-40 text-14 text-light mx-auto"
      to="blogs"
    >
      شاهد المزيد
    </AppBtnGo>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      s: 2,
    }
  },
}
</script>

<style>
.blog__card {
  flex-basis: 432px;
}
</style>
