import React from 'react'
import NeurologicalPhysio from '../Assets/Images/NeurologicalPhysio.jpg'
import SportsPhysio from '../Assets/Images/SportsPhysio.png'
import HeatPhysio from '../Assets/Images/HeatPhysio.jpg'
import PediatricPhysio from '../Assets/Images/PediatricPhysio.jpg'
import OrthopedicPhysio from '../Assets/Images/OrthopedicPhysio.jpg'
import CardiovascularPhysio from '../Assets/Images/CardiovascularPhysio.jpg'

export default function Services() {
  return (
    <>
    <div className='container mx-auto text-center text-3xl font-medium bg-soft-purple rounded-lg p-6 mt-8 text-white'>Renma Services</div>
      <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-8 m-8 -z-50'>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto'>
          <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Neurological Physiotherapy</h2>
          <div><img className='object-cover' src={NeurologicalPhysio} alt="Neurological Physiotherapy img"/></div>
          <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
            Neurological physiotherapy involves the treatment of people with movement and function disorders that have originated from problems within the body's nervous and neuromuscular system.
          </div>
        </div>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto '>
        <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Sports Physiotherapy</h2>
        <div><img className='object-cover' src={SportsPhysio} alt="Sports Physiotherapy img"/></div>
        <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
        Sports physiotherapy is a speciality within physiotherapy which is dedicated to the assessment and treatment of injuries related to sports and exercise at all levels and ages.
        </div>
        </div>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto'>
        <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Heat Physiotherapy</h2>
        <div><img className='object-cover' src={HeatPhysio} alt="Neurological Physiotherapy img"/></div>
        <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
        Thermotherapy, or heat therapy, is the use of heat in therapy. The therapeutic effects of heat include increasing extensibility of soft tissues, decreasing joint stiffness, reducing pain.
        </div>
        </div>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto'>
        <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Pediatric Physiotherapy</h2>
        <div><img className='object-cover' src={PediatricPhysio} alt="Pediatric Physiotherapy img"/></div>
        <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
        Pediatric physiotherapy is effective in the management of perinatal conditions, conditions diagnosed in early childhood, and injuries sustained throughout childhood and the transition to adult care. Pediatric physiotherapy improves physical function and quality of life.
        </div>
        </div>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto '>
        <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Orthopedic Physiotherapy</h2>
        <div><img className='object-cover' src={OrthopedicPhysio} alt="Neurological Physiotherapy img"/></div>
        <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
        Orthopedic Physiotherapy is a medical practice that specifically focuses on the correction of deformities or functional impairments to the skeletal system, particularly the extremities and the spine or associated structures like muscles and ligaments.
        </div>
        </div>
        <div className='hover:scale-105 ease-in-out duration-500 w-auto'>
        <h2 className='sm:text-xl lg:text-2xl text-center font-medium py-3 rounded-t-lg text-white bg-soft-purple'>Cardiovascular Physiotherapy</h2>
        <div><img className='object-cover' src={CardiovascularPhysio} alt="Neurological Physiotherapy img"/></div>
        <div className='p-2 sm:text-lg lg:text-xl text-justify font-normal rounded-b-lg bg-lightmauve'>
        Cardiorespiratory physiotherapy is an area of physiotherapy that specialises in the prevention, rehabilitation, and compensation of clients with diseases and injuries in the heart and lungs. These conditions may manifest themselves as shortness of breath, persistent cough.
        </div>
        </div>
      </div>
    </>
  )
}
