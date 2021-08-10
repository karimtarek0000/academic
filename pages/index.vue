<template>
  <main>
    <!--  -->
    <Header />
    <!--  -->
    <SectionOurServices />
    <!--  -->
    <SectionAllSections :data="itemsSliderSectionAllSections" />
    <!--  -->
    <SectionNewCourses />
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
    return { itemsSliderSectionAllSections }
  },
  head: {
    title: 'الرئيسية',
  },
}
</script>

<style></style>
