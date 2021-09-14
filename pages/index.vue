<template>
  <main role="home" class="home">
    <!--  -->
    <Header />
    <!--  -->
    <OurServicesSection />
    <!--  -->
    <SectionAllSections :data="itemsSliderSectionAllSections" />
    <!--  -->
    <NewCoursesSection>
      <NavbarSelected>
        <template>
          <li
            v-for="item in itemsNavbarSelected"
            :key="item"
            :class="[
              'navbar-selected__item user-select-none cursor-pointer d-flex align-items-center justify-content-center text-dark radius-18 text-13 flex-shrink-0 weight-br-300',
              {
                'navbar-selected__active': item === selected,
              },
            ]"
            style="height: 5.5rem"
            @click="selected = item"
            v-text="item"
          />
        </template>
      </NavbarSelected>
    </NewCoursesSection>
    <!--  -->
    <SpecialCoursesSection />
    <!--  -->
    <ZoomMeetingsSection />
    <!--  -->
    <CombinedCoursesSection />
    <!--  -->
    <BlogSection />
    <!--  -->
    <TestimonialsSection />
  </main>
</template>

<script>
export default {
  asyncData() {
    const itemsSliderSectionAllSections = [
      {
        id: 0,
        title: 'التصميم',
        icon: 'paint-roller',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
      {
        id: 1,
        title: 'الميديا',
        icon: 'multimedia',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
      {
        id: 2,
        title: 'التسويق',
        icon: 'target',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
      {
        id: 3,
        title: 'التصميم',
        icon: 'paint-roller',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
      {
        id: 4,
        title: 'الميديا',
        icon: 'multimedia',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
      {
        id: 5,
        title: 'التسويق',
        icon: 'target',
        decription:
          'موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في الوطن العربي',
      },
    ]
    const itemsNavbarSelected = [
      'التصميم',
      'إدارة الاعمال',
      'البرمجة',
      'التصوير',
      'التسويق',
      'الميديا',
    ]
    const zoomMeetings = [1, 2, 3, 4, 5, 6]
    const combinedCourses = [1, 2, 3, 4, 5, 6]
    const specialCourses = [1, 2, 3, 4, 5, 6]
    const testmonials = [1, 2, 3, 4, 5, 6]
    return {
      itemsSliderSectionAllSections,
      itemsNavbarSelected,
      zoomMeetings,
      combinedCourses,
      specialCourses,
      testmonials,
    }
  },
  data() {
    return {
      selected: 'التصميم',
    }
  },
  provide() {
    return {
      zoomMeetingsData: this.zoomMeetings,
      combinedCoursesData: this.combinedCourses,
      specialCoursesData: this.specialCourses,
      testmonialsData: this.testmonials,
    }
  },
  head() {
    return {
      title: 'الرئيسية',
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

<style lang="scss">
.home {
  .navbar-selected {
    &__item,
    &__active {
      width: calc((106.5rem - 12rem) / 6);
    }

    &__item {
      &:not(:last-of-type) {
        margin-left: 2rem;
      }
    }
  }
}
</style>
