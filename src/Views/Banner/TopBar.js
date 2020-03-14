import React from 'react'
import Badge from '../../Base/Badges/Badge';
import Colors from '../../Assets/Colors';

export default function TopBar() {
      return (
            <div className='container-fluid top-bar'>
                  <div>
                  <Badge title = 'New' color={Colors.textWhite} background={Colors.primaryRed}/>
                  <span className='title'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                  <div>
                  <span className='title'> 24X7 Helpline</span>
                  <Badge title = '93855-93855' color={Colors.textWhite} background={Colors.badgeGreen}/>
                  </div>
            </div>
      )
}
