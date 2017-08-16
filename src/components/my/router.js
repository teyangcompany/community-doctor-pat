/**
 * Created by Administrator on 2017/8/8.
 */
import healthFile from './healthFile/healthFile'
import recordDetail from './healthFile/deleteRecord'
import addRecord from './healthFile/addRecord'
import ill from './healthFile/ill'
import pastHistory from './healthFile/pastHistory'
import familyHistory from './healthFile/familyHistory'
import allergyHistory from './healthFile/allergyHistory'
import addPatient from './patient/addPatient'
import detailPatient from './patient/detailPatient'
import add from './patient/add'
import mySignService from './mySignService/mySignService'
import detailService from './mySignService/detailService'
import detailPage from './healthFile/detailPage'
export default[
  {
    path:'/healthFile',
    component:healthFile,
    children:[
      {
        path:'/ill',
        component:ill,
      },
      {
        path:'/pastHistory',
        component:pastHistory,
      },
      {
        path:'/familyHistory',
        component:familyHistory,
      },
      {
        path:'/allergyHistory',
        component:allergyHistory,
      },
    ]
  },
  {
    path:'/deleteRecord',
    component:recordDetail,
  },
  {
    path:'/addRecord',
    component:addRecord,
  },
  {
    path:'/addPatient',
    component:addPatient,
  },
  {
    path:'/detailPatient',
    component:detailPatient,
  },
  {
    path:"/mySignService",
    component:mySignService,
  },
  {
    path:"/detailService",
    component:detailService
  },
  {
    path:"/add",
    component:add
  },
  {
    path:"/detailPage",
    component:detailPage
  }
]
