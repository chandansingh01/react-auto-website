import React from 'react';
import HeadingWithSub from '../../../Base/Headings/HeadingWithSub';
import '../../../scss/sections/services.scss'

const services = [
      {title:'Scheduled Services'},
      {title:'AC Services'},
      {title:'Cleaning Services'},
      {title:'Wheel & Rim Services'},
      {title:'Denting & Painting Services'},
      {title:'Insurance Services'},
      {title:'Custom Repair'},
      {title:'Accessories'},
]

const ServicesBlock = (props)=>{
      return(
            <div className='services-type-block'>
                  <div>
                        {props.title}      
                  </div>
            </div>
      )
}

export default function Services() {
      return (
            <div className='section_services'>
                 <HeadingWithSub>
                       <h1>Our Services</h1>
                       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque diam vestibulum sollicitudin feugiat. Aliquam dapibus imperdiet orci, id viverra orci ultricies eu. Vestibulum facilisis tincidunt orci a consequat. </h2>
                 </HeadingWithSub> 
                 <div className='services-type-wrapper'>
                        {
                              services.map((service)=>{
                                    return <ServicesBlock key={service.title} title={service.title}/>
                              })
                        }
                 </div>
            </div>
      )
}
