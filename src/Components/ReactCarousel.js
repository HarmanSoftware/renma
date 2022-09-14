import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function ReactCarousel() {
  return (
    <>   
    <Carousel  infiniteLoop={true} autoPlay={true} showIndicators={true} showStatus={false} inetrval={2500} showThumbs={false}>
                <div>
                    <img src="https://images.unsplash.com/photo-1618914241652-ff0a094b5a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMGFjaGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1645005512827-48ff6f97848a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fG5ldXJvbG9naWNhbCUyMHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG5ldXJvbG9naWNhbCUyMHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG5ldXJvbG9naWNhbCUyMHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
            </Carousel>
       
    </>
  )
}
