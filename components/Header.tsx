import { cn } from 'lib/utils'
import React from 'react'
import { useLocation } from 'react-router'
interface props{
    title: string
    description: string
}
const Header = ({title, description}:props) => {
    const location = useLocation()
  return (
    <header className='header'>
        <article>
            <h1 className={cn('text-dark-100',
                location.pathname === '/' ? 'text-2xl md:text-4xl font-bold':
                'text-xl md:text-2xl font-semibold'
             )}>{title}</h1>
              <p className={cn('text-gray-100 font-normal',
                location.pathname === '/' ? 'text-base md:text-lg':
                'text-sm md:text-lg font-semibold'
             )}>{title}</p>
        </article>

    </header>
  )
}

export default Header