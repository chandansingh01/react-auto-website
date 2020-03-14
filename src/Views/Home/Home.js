import React from 'react';
import Banner from '../Banner/Banner';
import SliderMenu from '../SliderMenu/SliderMenu';
import Services from '../Sections/Services/Services';
import Benefits from '../Sections/Services/Benefits';
import CarSearch from '../CarSearch/CarSearch';
export default function Home() {
      return (
            <div className='home' >
                 <Banner/> 
                 <div className='hide-sm'>
                 <CarSearch/>
                 </div>
                 <div className='container-66'>
                 <SliderMenu/>
                 <Services/>
                 <Benefits/>
                 </div>
            </div>
      )
}
