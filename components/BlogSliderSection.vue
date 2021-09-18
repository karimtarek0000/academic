<template>
  <section role="blogs" class="blog-slider space-between-slides">
    <Slider :add-settings="sliderSettings">
      <BlogCard
        v-for="s in 6"
        :key="s"
        dir="rtl"
        class="shadow__card-2 margin-y-20"
      >
        <figure
          class="
            col-12 col-sm-4
            blog-slider__image
            overflow-hidden
            margin-0
            padding-0
          "
          style="max-height: 20rem"
        >
          <img
            class="resize-img height-100"
            src="~/assets/images/global/course.png"
            alt=""
          />
        </figure>
      </BlogCard>
    </Slider>
  </section>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue'
export default {
  name: 'BlogSliderSection',
  components: {
    BlogCard,
  },
  data() {
    return {
      sliderSettings: {
        centerMode: true,
        centerPadding: '300px',
        variableWidth: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            },
          },
          {
            breakpoint: 843,
            settings: {
              centerPadding: '50px',
            },
          },
          {
            breakpoint: 990,
            settings: {
              centerPadding: '150px',
            },
          },
          {
            breakpoint: 1200,
            settings: {
              centerPadding: '200px',
            },
          },
          {
            breakpoint: 1300,
            settings: {
              centerPadding: '250px',
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.blog-slider {
  .blog {
    .blog-card__body {
      @media only screen and (max-width: 48em) {
        width: 100% !important;
      }
    }
  }

  &__image {
    border-radius: 0 21px 21px 0;
  }
}
</style>
