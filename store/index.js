export const state = () => ({
  sections_items: [],
  statusSideBarMenu: false,
  statusSideBarUser: false,
  statusSideNotification: false,
  statusAsideFilter: false,
  isAuth: false,
})

export const mutations = {
  sideBarMenu(state, status) {
    state.statusSideBarMenu = status
  },
  sideBarUser(state, status) {
    state.statusSideBarUser = status
  },
  sideNotification(state, status) {
    state.statusSideNotification = status
  },
  asideFilter(state, status) {
    state.statusAsideFilter = status
  },
  setSectionsItems(state, payload) {
    state.sections_items = payload
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    const sectionsItems = [
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
    ]
    commit('setSectionsItems', sectionsItems)
  },
}
