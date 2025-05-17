import Header from 'components/Header'
import StatCard from 'components/StatCard'
import TripCard from 'components/TripCard'
import React from 'react'

const dashboard = () => {
  const user = {
    name: 'Fethul'
  }

  const dasboardStats = {
    totalUsers: 12450,
    usersJoined: {
      currentMonth: 280,
      lastMonth: 176
    },
    totalTrips: 3201,
    tripCreated: {
      currentMonth: 150,
      lastMonth: 250
    },
    userRole: {
      total: 62,
      currentMonth: 25,
      lastMonth: 15
    }


  }
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
            headerTitle="Total Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />

        </div>
      </section>

      <TripCard />
    </main>
  )
}

export default dashboard