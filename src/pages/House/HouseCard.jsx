import React from 'react'

function HouseCard({item}) {
  return (
    <div className='bg-blue-300 flex flex-col gap-2 p-5 rounded-xl'>
    <h1>Rooms:{item.rooms}</h1>
    <h1>Rooms:{item.location}</h1>
    <h1>Rooms:{item.price}</h1>
</div>
  )
}

export default HouseCard
