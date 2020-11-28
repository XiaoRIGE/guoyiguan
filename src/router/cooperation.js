// cooperation
export default {
  path: '/cooperation',
  name: '门诊协作',
  children: [
    {
      path: '/consultation',
      name: 'consultation',
      component: () => import('@/views/cooperation/consultation'),
      meta: {
        title: '会诊'
      }
    },
    {
      path: '/addConsultation',
      name: 'addConsultation',
      component: () => import('@/views/cooperation/addConsultation'),
      meta: {
        title: '添加', // 添加会诊和添加转诊为同一个界面
        parent: 'consultation',
        parentName: '会诊'
      }
    },
    {
      path: '/referral',
      name: 'referral',
      component: () => import('@/views/cooperation/referral'),
      meta: {
        title: '转诊'
      }
    },
    {
      path: '/referralDetails',
      name: 'referralDetails',
      component: () => import('@/views/cooperation/referralDetails'),
      meta: {
        title: '详情', // 转诊详情
        parent: 'consultation',
        parentName: '会诊'
      }
    },
    {
      path: '/consultation/refuseList',
      name: 'refuseList',
      component: () => import('@/views/cooperation/refuseList'),
      meta: {
        title: '已拒絕列表',
        parent: 'consultation',
        parentName: '会诊'
      }
    }
  ]
}
