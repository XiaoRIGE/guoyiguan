export default {
  path: '/resourcesManage',
  name: '资源管理',
  children: [
    {
      path: '/prescription',
      name: 'prescription',
      component: () => import('@/views/resourcesManage/prescription'),
      meta: {
        title: '中草药方剂管理'
      }
    },
    {
      path: '/acupuncture',
      name: 'acupuncture',
      component: () => import('@/views/resourcesManage/acupuncture'),
      meta: {
        title: '针灸管理'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/resourcesManage/product'),
      meta: {
        title: '成品管理'
      }
    },
    {
      path: '/herbal',
      name: 'herbal',
      component: () => import('@/views/resourcesManage/herbal'),
      meta: {
        title: '中草藥管理'
      }
    },
    {
      path: '/submitList',
      name: 'submitList',
      component: () => import('@/views/resourcesManage/submitList'),
      meta: {
        title: '提交記錄',
        parent: 'prescription',
        parentName: '資源管理'
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/resourcesManage/edit'),
      meta: {
        title: '編輯處方',
        parent: 'prescription',
        parentName: '資源管理'
      }
    },
    {
      path: '/herbalDetail',
      name: 'herbalDetail',
      component: () => import('@/views/resourcesManage/herbalDetail'),
      meta: {
        title: '中草藥詳情',
        parent: 'herbal',
        parentName: '中草藥管理'
      }
    }
  ]
}
