import Header from 'components/Header'
import StatCard from 'components/StatCard'
import TripCard from 'components/TripCard'
import React from 'react'
import {dasboardStats, user, allTrips} from '~/constants'

const dashboard = () => {

  const { totalUsers, usersJoined, totalTrips, tripCreated, userRole } = dasboardStats

  return (
    <main className='dashboard wrapper'>
      <Header title={`Wellcome ${user?.name ?? 'Guest'}`}
        description='Track activity, trends and popular destinations in real time'
      />
      <section className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          <StatCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripCreated.currentMonth}
            lastMonthCount={tripCreated.lastMonth}
          />
          <StatCard
            headerTitle="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />

        </div>
      </section>

      <section className='container'>
        <h1 className='text-xl font-semibold text-dark-100'>Created Trips</h1>

        <div className='trip-grid'>
          {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) =>(
            <TripCard
            key={id}
            id={id.toString()}
            name={name}
            imageUrl={imageUrls[0]}
            location={itinerary?.[0]?.location}
            tags={tags}
            price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default dashboard