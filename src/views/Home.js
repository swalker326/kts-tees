import React from 'react'
import Carousel from '../components/Carousel';


const Home = () => {
  const photos = [
    'https://images.unsplash.com/photo-1520413766594-6e635f8d9908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60',
    'https://images.unsplash.com/photo-1560363199-a1264d4ea5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1553175536-c4a6cb24acb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1520413766594-6e635f8d9908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60',
    'https://images.unsplash.com/photo-1560363199-a1264d4ea5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1553175536-c4a6cb24acb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1560362883-654430ce3bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  ]
  return (
    <div className='Home'>
      <div>Home Boyeee</div>
      <Carousel
        images={photos}
        delay={5000}
        thumbnails={true}
        showNavigation={true}/>
    </div>
  )
}

export default Home;