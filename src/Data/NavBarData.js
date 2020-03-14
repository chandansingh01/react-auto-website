export const TYPES = {
      withNone:0,
      withBadge:1,
      withDropDown:2,
      withButton:3
}

export const Menu = {
      menuLeft:{
            logo:{
                  image:'https://gomechanic.in/assets/img/customerpage/logos/final_amp_logo.png',
                  alt:'go mechanic'
            },
            cites:[
                  {name:'Gurugram',value:'ggn'},
                  {name:'Delhi',value:'dl'},
                  {name:'Bhopal',value:'bpl'},
                  {name:'Himachal',value:'hp'}
            ]
      },
      menuRight:[
            {type:TYPES.withBadge,title:'Accessories',badgeTitle:'New',action:'/somewhere'},
            {type:TYPES.withNone,title:'Services',action:'/somewhere'},
            {type:TYPES.withNone,title:'Offers',action:'/somewhere'},
            {type:TYPES.withDropDown,title:'More',dropdown:[
                  {title:'More1',action:'/somewhere'},
                  {title:'More1',action:'/somewhere'},
                  {title:'More1',action:'/somewhere'}

            ]},
            {type:TYPES.withButton,title:'Login/SignUp',action:'/somewhere'},


      ]
      
      
}