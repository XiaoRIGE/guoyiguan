export default {
  path: '/doctor',
  name: '医师',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/doctor/home')
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('@/views/doctor/subscribe'),
      meta: {
        title: '门诊预约'
      }
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('@/views/doctor/review'),
      meta: {
        title: '门诊回顾'
      }
    },
    {
      path: '/home/prescribing',
      name: 'prescribing',
      component: () => import('@/views/doctor/prescribing'),
      meta: {
        title: '開處方',
        parent: 'home',
        parentName: '醫師工作臺'
      }
    },
    {
      path: '/home/medicalDetail',
      name: 'medicalDetail',
      component: () => import('@/views/doctor/medicalDetail'),
      meta: {
        title: '病案詳情',
        parent: 'prescribing',
        parentName: '開處方'
      }
    },
    {
      path: '/home/goodDetail',
      name: 'goodDetail',
      component: () => import('@/views/doctor/goodDetail'),
      meta: {
        title: '成品詳情',
        parent: 'home',
        parentName: '開處方'
      }
    },
    {
      path: '/home/todayDetail',
      name: 'todayDetail',
      component: () => import('@/views/doctor/todayDetail'),
      meta: {
        title: '就診日期',
        parent: 'review',
        parentName: '門診回顧'
      }
    }
  ]
}
