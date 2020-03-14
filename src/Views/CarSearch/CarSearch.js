import React from 'react';
import '../../scss/car_search.scss';
import Select from '../../Base/Select/Select';
import Input from '../../Base/Form/Input';
import Button from '../../Base/Buttons/Button';
function Details(props){
 return (
      <div className='details'>
      <div className="heading">{props.heading}</div>
      <div className="sub-heading">{props.sub}</div>
      </div>
 )
}


export default function CarSearch() {
      return (
            <div className="car-search">
                  <div className='content'>
                        <h1 className='hide'>The best car service awaits you</h1>
                        <h2 className='hide'>Get instant quotes for your car service <br/> in <span className='highlight'>Gurgaon</span> </h2>
                        <Select>
                        <option disabled value=''>Select your car</option>
                        <option>Hyundai i20</option>
                        <option>Maruti SX4</option>
                        <option>Ford Endeavour</option>
                        <option>Ford Aspire</option>
                        </Select>
                        <Input type='number' placeholder='Enter Mobile Number'/>
                        <Button color='primary' style={{width:'100%',marginTop:'15px'}}> CHECK PRICE </Button>
                  </div>
                  <div className='footer'>
                        <Details heading='4.7/5' sub='based on 500+ reviews'/>
                        <Details heading='2,50,000 +' sub='car services and repaired'/>
                  </div>
            </div>
      )
}
