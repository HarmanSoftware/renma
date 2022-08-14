import React from 'react'
import {Link} from 'react-router-dom'
import Tippy from '@tippyjs/react';
import '../Assets/DarkMode.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Email from '../Assets/Images/Emails.png'
import Call from '../Assets/Images/Call.png'
import ContactUs from '../Assets/Images/Contact.png'
import Mail from '../Assets/Images/Send.png'

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
       .required('Full name required')
       .max(30, 'Fullname must be 30 characters or less')
       .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      email: Yup.string()
       .email('Invalid email address')
       .required('Required'),
       phoneNumber: Yup.number()
       .typeError("That doesn't look like a phone number")
       .positive("A phone number can't start with a minus")
       .integer("A phone number can't include a decimal point")
       .min(8)
       .required('A phone number is required'),
       message:Yup.string()
       .required('Messege is required')
       .max(10,'Messege must be 150 or less chars')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className='flex items-center content-center bg-mauve font-medium text-3xl px-2 w-ful h-12 text-black'>Contact Us</div>
      <div className='container mx-auto grid lg:grid-cols-2 sm:w-auto sm:grid-cols-1 p-8'>
        <div className='bg-soft-purple my-4' id="contact-us">
<form className='p-4'>  
            <div className='text-center font-medium text-4xl text-white py-3'>Contact Us</div>
            <div className='text-center font-medium text-2xl text-white py-3'> <span className='text-red-500'>*</span> Indicates Required Fields</div>
<div class="relative z-0 mb-6 w-full group py-1">
      <input type="text" name="name" id="name"
       {...formik.getFieldProps('fullName')}
      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required=""/>
      <label for="name" className="peer-focus:font-medium absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Full name</label>
      {formik.touched.fullName && formik.errors.fullName ?
      (<div className='text-white py-2 text-center'>{formik.errors.fullName}</div> ) : null}
 
  </div>
  <div class="relative z-0 mb-6 w-full group py-1">
      <input type="email" name="floating_email" id="floating_email"
         {...formik.getFieldProps('email')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required=""/>
      <label for="floating_email" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Email address</label>
      {formik.touched.email && formik.errors.email ?
      (<div className='text-white py-2 text-center'>{formik.errors.email}</div> ) : null}
  </div>
  <div class="relative z-0 mb-6 w-full group py-1">
      <input type="tel" name="phone_number" id="phone_number"
      {...formik.getFieldProps('phoneNumber')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "/>
      <label for="phone_number" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (Optional)</label>
      {formik.touched.phoneNumber && formik.errors.phoneNumber ?
      (<div className='text-white py-2 text-center'>{formik.errors.phoneNumber}</div> ) : null}
  </div>  
  <div class="relative z-0 mb-6 w-full group py-1">
      <textarea type="text" name="text-area" id="text-area"
      {...formik.getFieldProps('message')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer rows=2 cols=50" placeholder=" " required=""/>
      <label for="text_area" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Message</label>
      {formik.touched.message && formik.errors.message ?
      (<div className='text-white py-2 text-center'>{formik.errors.message}</div> ) : null}
  </div>  
  
  <button type="submit" id="send-btn" className="flex items-center content-center mx-auto bg-bmauve hover:bg-lightmauve focus:ring-4 focus:outline-none focus:ring-mauve font-medium rounded-lg text-lg lg:w-26 lg:h-14 md:w-32 md:h-12 sm:w-18 sm:h-12 px-4 py-2 text-center dark:bg-mauve dark:hover:bg-lightpurple dark:focus:ring-mauve">
  <img src={Mail} className='w-8 h-8 mx-1' alt='Heart icon img'/>
  Send</button>
</form>
       
        </div>
        <div className='bg-lightpurple p-6' id='contact-info'>            
         <div className='text-center font-medium text-4xl py-2'>Contact Info</div>
         <div className='text-center text-2xl font-medium p-1'></div>
         <div className='text-center'>
          <img src={ContactUs} alt='Contact us img'/>
         </div>
         <div id="contact-info-phone" className='flex items-center font-medium py-2 my-2 text-xl rounded-sm bg-white shadow hover:shadow-md hover:scale-105 hover:duration-300'>
          <img src={Call} className='w-8 h-8 mx-2' alt='Call icon img'/>         
         <div className='font-medium px-12'>
         +(964) 751 046 1213
         </div>
         </div>

         <div id="contact-info-email" className='flex items-center font-medium py-2 my-2 text-xl rounded-sm bg-white shadow hover:shadow-md hover:scale-105 hover:duration-300'>
          <img src={Email} className='w-8 h-8 mx-2' alt='Email icon img'/>         
         <div className='font-medium px-12'>
         Herman.muhemed@gmail.com
         </div>
         </div>
 
         <div className='flex justify-between px-16 py-2 scale-110'>
         <Tippy content='Facebook'>
					<Link rel="noopener noreferrer" to="#" className="flex items-center p-2 scale-150 hover:text- ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</Link>
						</Tippy>

						<Tippy content='Twitter'>
					<Link rel="noopener noreferrer" to="#" className="flex items-center p-2 scale-150">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
					</Link>
						</Tippy>

						<Tippy content='Instagram'>
					<Link rel="noopener noreferrer" to="#" className="flex items-center p-2 scale-150">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</Link>
						</Tippy>
         </div>
      </div>
         </div>
    </div>   
  )
}
