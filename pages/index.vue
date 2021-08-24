<template>
  <main>
    <!--  -->
    <Header />
    <!--  -->
    <SectionOurServices />
    <!--  -->
    <SectionAllSections :data="itemsSliderSectionAllSections" />
    <!--  -->
    <SectionNewCourses>
      <NavbarSelected>
        <template>
          <li
            v-for="item in itemsNavbarSelected"
            :key="item"
            :class="[
              'navbar-selected__item user-select-none cursor-pointer d-flex align-items-center justify-content-center text-dark width-155 height-55 radius-18 text-13 flex-shrink-0 weight-br-300',
              {
                'navbar-selected__active': item === selected,
              },
            ]"
            @click="selected = item"
            v-text="item"
          />
        </template>
      </NavbarSelected>
    </SectionNewCourses>
    <!--  -->
    <SectionSpecialCourses />
    <!--  -->
    <SectionZoomMeetings />
    <!--  -->
    <SectionCombinedCourses />
    <!--  -->
    <Blog />
    <!--  -->
    <SectionTestimonials />
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
    return { itemsSliderSectionAllSections, itemsNavbarSelected }
  },
  data() {
    return {
      selected: 'التصميم',
    }
  },
  head: {
    title: 'الرئيسية',
  },
}
</script>

<style></style>
