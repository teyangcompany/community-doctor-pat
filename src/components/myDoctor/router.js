/**
 * Created by Administrator on 2017/8/8.
 */
import index from './index'
import signDoctor from './signDoctor'
import recent from './recentMessage'
import chat from './chat'
import bookService from './bookService'
import institution from './selectItem/institution'
import institutionDetail from './selectItem/institutionDetail'
import teamCard from './selectItem/teamCard'
import doctorCard from './selectItem/doctorCard'
import verifyName from './selectItem/verifyName'
import signTeam from './selectItem/signTeam'
import pay from './selectItem/pay'
import applySuccess from './selectItem/applySuccess'
import onlineIndex from "../online/index"
import myConsult from '../online/myConsult'
import myIndex from "../my/index"
import signSingle from './selectItem/signSingle'
import bookService1 from './bookService1.vue'
export default[
  {
     path:'',
     redirect:"/index/recent"
  },
  {
    name:'index',
    path:"/index",
    component:index,
    redirect:"/index/recent",
    children:[
      {
        path:"signDoctor",
        component:signDoctor
      },
      {
        path:"recent",
        component:recent
      },
      {
        name:"onlineIndex",
        path:'/onlineIndex',
        component:onlineIndex,
        children:[
          {
            path:"/myConsult",
            component:myConsult
          }
        ]
      },
      {
        name:"myIndex",
        path:'/myIndex',
        component:myIndex
      },
      {
        path:"/institution",
        component:institution
      },
    ]
  },
  {
    path:"/chat",
    component:chat
  },
  {
    path:"/bookService",
    component:bookService
  },
  {
    path:"/bookService1",
    component:bookService1
  },
  {
    path:"/institutionDetail",
    component:institutionDetail
  },
  {
    path:"/teamCard",
    component:teamCard
  },
  {
    path:"/doctorCard",
    component:doctorCard
  },
  {
    path:"/verifyName",
    component:verifyName
  },
  {
    path:"/signTeam",
    component:signTeam
  },
  {
    path:"/pay",
    component:pay
  },
  {
    path:"/applySuccess",
    component:applySuccess
  },
  {
    path:"/signSingle",
    component:signSingle
  }
]
