import React from 'react'
import { Link, useLocation } from 'react-router'

const TripCard = ({id, name, location, imageUrl, tags, price}:TripCardProps) => {
  const path = useLocation()
  return (
    <Link className='trips-card' to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} >
        <img className='w-50' src={imageUrl} alt={name} />

        <article>
          <h2>{name}</h2>
          <figure>
            <img src='/assets/icons/location-mark.svg' alt="" />
            <figcaption>{location}</figcaption>
          </figure>
          <div className="flex justify-around">
            {tags.map((tag, index) =>(
              <span key={index} className='text-sm font-medium text-gray-100 bg-gray-200/20 rounded-full px-2 py-1'>{tag}</span>
            ))}
          </div>
        </article>
    </Link>
  )     
}

export default TripCard