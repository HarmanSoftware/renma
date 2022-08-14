import React from 'react'
import AboutUs from '../Assets/Images/AboutUs.png'
export default function About() {
  return (
    <div>
      <div className='flex items-center content-center bg-mauve font-medium text-3xl px-2 w-ful h-12 text-black'>About Us</div>
      <img src={AboutUs} className='w-3/5 h-1/5 mx-auto' alt="about us img"/>
      <div className='container text-center mx-auto'>
      <p className=' px-4 py-1 font-normal text-lg text-justify'>       
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet lacus pulvinar, rhoncus massa a, egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium gravida enim at efficitur. In finibus felis non magna tincidunt, eget placerat libero dignissim. Donec lacinia eros vel est sodales, et fringilla justo porta. Cras a pretium nibh. Vestibulum mattis sollicitudin erat, quis posuere erat viverra a. In rhoncus eleifend sapien eget mattis. Morbi id sapien ante. Fusce ut lectus ut tortor porta facilisis. Phasellus vulputate, nisl at egestas feugiat, orci turpis tincidunt magna, eu auctor dui arcu sed elit. In vel iaculis tortor, eget vehicula libero. Fusce eget sodales orci. Sed ullamcorper vitae dui eget molestie. Quisque rutrum in felis vitae dapibus.
       Aliquam laoreet imperdiet interdum. Proin efficitur neque sit amet porttitor ultricies. Sed tincidunt urna ut massa elementum sagittis. Nam viverra volutpat mattis. Maecenas interdum tellus eu lorem egestas, vitae vestibulum mi imperdiet. Nulla facilisi. Sed nec est ac ante consequat eleifend. Nulla consectetur mauris non metus maximus, et sollicitudin lorem porttitor. Donec sed lorem ipsum. Praesent non mi eget ipsum rhoncus tincidunt. Phasellus congue ultrices ultrices. Suspendisse in pulvinar leo. Nulla feugiat vestibulum ipsum non eleifend. Duis posuere imperdiet nunc ac luctus.
       </p>      
      </div>
    </div>
  )
}
