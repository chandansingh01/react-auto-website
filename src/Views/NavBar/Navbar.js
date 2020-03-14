import React,{useState} from 'react';
import '../../scss/navbar.scss';
import { Menu, TYPES } from '../../Data/NavBarData';
import ElementWithBadge from '../../Base/Badges/ElementWithBadge';
import Button from '../../Base/Buttons/Button';
import Colors from '../../Assets/Colors';


export default function Navbar() {
      const [toggle,setToggle] = useState(false);
      const { menuLeft, menuRight } = Menu;

      const getListWithType = (list) => {
            switch (list.type) {
                  case TYPES.withBadge:
                        return <li key={list.title}><a href={list.action}>
                              <ElementWithBadge
                                    badgeBackground={Colors.primaryRed}
                                    badgeColor={Colors.textWhite}
                                    badgeTitle={list.badgeTitle}>
                                    {list.title}
                              </ElementWithBadge>
                        </a>
                        </li>
                  
                  case TYPES.withNone:
                        return <li key={list.title}><a href={list.action}>{list.title}</a></li>

                  case TYPES.withButton:
                              return <li key={list.title}><Button color='primary'>{list.title}</Button></li>      
                  default:
                        break;
            }
      }
      return (
            <div className="container">

                  <div className="logo">
                        
                        <a href="/some">
                              <img src={menuLeft.logo.image} alt="logo" />
                        </a>
                  </div>
                  <div className="navbar">                        
                  <i onClick={()=>setToggle(true)}  className='fa fa-reorder hide-sm menu-toggle'></i>
                        <ul id="nav-lists" className={toggle?'_Menus-show':''}>
                              <li className="close"><span onClick={()=>setToggle(false)}>×</span></li>
                              {menuRight.map((list, index) => {
                                    return getListWithType(list)
                              })}
                              
                        </ul>

                  </div>
            </div>

      )
}
