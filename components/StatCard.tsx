import { calculateTrendPercentage, cn } from 'lib/utils'
import React from 'react'

const StatCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount
}: StatsCard) => {
  const { trend, percentage } = calculateTrendPercentage(currentMonthCount,
    lastMonthCount
  )
  const isDecrement = trend === 'decrement';
  return (
    <article>
      <h3 className='text-base font-medium'>
        {headerTitle}
      </h3>
      <div className='content'>
        <div className="flex flex-col gap4">
          <h2 className='text-4xl font-semibold'>
            {total}
          </h2>

          <div className='flex items-center gap-2' >
            <figure className='flex items-center gap-1'>
              <img src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`} alt="" />
              <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-green-500')}>
                {Math.round(percentage)}%
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StatCard