import React from 'react'
import { Link, useLocation } from 'react-router'

const TripCard = ({id, name, location, imageUrl, tags, price}:TripCardProps) => {
  const path = useLocation()
  return (
    <Link className='trips-card' to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} >
        <img src={imageUrl} alt={name} />

        <article>
          <h2>{name}</h2>
          <figure>
            <img src='/assets/icons/location-mark.svg' alt="" />
            <figcaption>{location}</figcaption>
          </figure>
        </article>
    </Link>
  )     
}

export default TripCard