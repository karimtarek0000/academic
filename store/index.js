export const state = () => ({
  sections_items: [
    {
      title: 'التصميم',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
    {
      title: 'البرمجة',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
    {
      title: 'الميديا',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
    {
      title: 'التسويق',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
    {
      title: 'التصوير',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
    {
      title: 'إدارة الأعمال',
      subCategory: {
        items: [
          {
            title: 'ويب ديزاين',
            path: 'index',
          },
          {
            title: 'تصميم تجربة المستخدم',
            path: 'index',
          },
          {
            title: 'جرافيك ديزابن',
            path: 'index',
          },
          {
            title: 'موشن جرافيك',
            path: 'index',
          },
        ],
      },
    },
  ],
  statusToggler: false,
  statusToggleNavbarUser: false,
})

export const mutations = {
  toggler(state, status) {
    state.statusToggler = status
  },
  toggleNavbarUser(state, status) {
    state.statusToggleNavbarUser = status
  },
}
