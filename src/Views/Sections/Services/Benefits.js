import React from 'react';
import HeadingWithSub from '../../../Base/Headings/HeadingWithSub';
import '../../../scss/sections/benefits.scss'
import SideImageCard from '../../../Base/Cards/SideImageCard';

const benefits = [
      {heading:'Lorem ipsum',subHeading:'lorem ipsum sit ammet dora foto'},
      {heading:'Lorem ipsum',subHeading:'lorem ipsum sit ammet dora foto'},
      {heading:'Lorem ipsum',subHeading:'lorem ipsum sit ammet dora foto'},
      {heading:'Lorem ipsum',subHeading:'lorem ipsum sit ammet dora foto'},
]


export default function Benefits() {
      return (
            <div className='section_benefits'>
                  <HeadingWithSub>
                       <h1>GoMechanic Benefits</h1>                      
                 </HeadingWithSub> 
                 <div className='section-benefits-wrapper'>                 
                  {benefits.map((card,index)=>{
                        return <SideImageCard key={index} heading={card.heading} subHeading={card.subHeading}/>
                  })}                                  
                 </div>
            </div>
      )
}
