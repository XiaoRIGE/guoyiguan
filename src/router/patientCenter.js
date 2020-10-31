export default {
  path: '/patientCenter',
  name: '患者中心',
  children: [
    {
      path: '/patientCenter',
      name: 'patientCenter',
      component: () => import('@/views/patientCenter/index'),
      meta: {
        title: '患者中心'
      }
    },
    {
      path: '/patientDetails',
      name: 'patientDetails',
      component: () => import('@/views/patientCenter/patientDetails'),
      meta: {
        title: '患者详情',
        parent: 'patientCenter',
        parentName: '患者中心'
      }
    }
  ]
}
