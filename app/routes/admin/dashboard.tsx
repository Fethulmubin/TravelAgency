import Header from 'components/Header'
import StatCard from 'components/StatCard'
import TripCard from 'components/TripCard'
import React from 'react'

const dashboard = () => {
  const user = {
    name : 'Fethul'
  }
  return (
    <main className='dashboard wrapper'>
      <Header title = {`Wellcome ${user?.name ?? 'Guest' }`}
        description = 'Track activity, trends and popular destinations in real time'
      />

      <StatCard/>
      <TripCard/>
    </main>
  )
}

export default dashboard