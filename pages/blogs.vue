<template>
  <main class="blog">
    <!--  -->
    <header class="text-center padding-y-45">
      <h1 class="text-30 text-dark margin-bottom-10">المدونة</h1>
      <p class="text-14 text-silver weight-br-300 mx-auto col-lg-4">
        هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر
        تصميم أو مجموعة من التصاميم
      </p>
    </header>
    <!--   -->
    <BlogSliderSection class="margin-bottom-30" />
    <!--    -->
    <section role="blogs" class="padding-y-30 border-top-whiteDark">
      <div
        v-for="s in 6"
        :key="s"
        class="
          col-12 col-md-9
          mx-auto
          padding-top-25 padding-bottom-67
          border-bottom-whiteDark
          margin-bottom-20
        "
      >
        <BlogCard class="padding-x-10">
          <figure
            class="col-12 col-sm-4 radius-21 overflow-hidden margin-0 padding-0"
            style="max-height: 21.4rem"
          >
            <img
              class="resize-img position-top-img height-100"
              src="~/assets/images/global/course.png"
              alt=""
            />
          </figure>
        </BlogCard>
      </div>
    </section>
    <!--  Pagination   -->
    <client-only>
      <Pagination
        :current-page="currentPage"
        :total="104"
        class="direction-ltr mx-auto margin-bottom-76"
        @changePage="currentPage = $event"
      >
        <template slot="next">
          <GSvg class="svg-11" name-icon="angle-right" />
        </template>
        <template slot="prev">
          <GSvg class="svg-11" name-icon="angle-left-1" />
        </template>
      </Pagination>
    </client-only>
  </main>
</template>

<script>
export default {
  name: 'Blogs',
  // async asyncData({ $axios, query }) {
  //   const { data } = await $axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${
  //       query.page ? query.page : 1
  //     }`
  //   )
  //
  //   return {
  //     data,
  //   }
  // },
  data() {
    return {
      currentPage: 1,
    }
  },
  // watch: {
  //   $route() {
  //     this.$nuxt.refresh()
  //   },
  // },
  head() {
    return {
      title: 'المدونة',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'هو أسلوب فني إبداعي يهدف إلى إيصال فكرة معينة إلى الجمهور المستهدف عبر تصميم أو مجموعة من التصاميم',
        },
      ],
    }
  },
}
</script>

<style></style>
