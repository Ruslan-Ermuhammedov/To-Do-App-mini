import React, { useRef, useState } from 'react'
import { house } from './components/house.js'
import HouseCard from './HouseCard'
function House() {
    const [uylar, setUylar] = useState(house)
    const [uylar2, setUylar2] = useState(house)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    // const [uylarRooms, setUylarRooms] = useState(uylar)
    const locations = house.map(item => item.location)
    const rooms = uylar.map(item => item.rooms)

    const options = ["All", ...new Set(locations)]
    const optionRooms = ["AllRooms", ...new Set(rooms)]
    const filterChange = (event) => {
        if (event.target.value === "All") {
            setUylar(house)
            return
        }
        const filtered = house.filter(item => item.location === event.target.value)
        setUylar(filtered)
        // console.log(filtered)
    }
    const sortHendlear = () => {          
        const sort = uylar.sort((a, b) => a.price > b.price ? 1 : -1)
        setUylar2(sort)

    }
    const RoomsFilterChange = (event) => {
        if (event.target.value === "AllRooms") {
            setUylar2(uylar)
            return
        }
        const filtered2 = uylar.filter(item => item.rooms === Number(event.target.value))
        setUylar2(filtered2)
    }
    // console.log(uylar)

    const priceFilter = (e) => {
        e.preventDefault();
        const filteredPrice = uylar2.filter((item) => item.price >= minPrice && item.price <= maxPrice)
        setUylar2(filteredPrice)
        console.log(filteredPrice)

    }


    return (
        <div>
            <div className='flex flex-row gap-6 p-5 bg-zinc-400 items-center'>
                <select onChange={filterChange}>
                    {options.map((element, index) =>
                        <option value={element} className='p-4 bg-slate-100 m-2' key={index}>
                            {element}
                        </option>
                    )}
                </select>
                <select onChange={RoomsFilterChange} >
                    {optionRooms.map((element, index) =>
                        <option value={element} className='p-4 bg-slate-100 m-2' key={index}>
                            {element}
                        </option>
                    )}
                </select>
                <form onSubmit={priceFilter} className='flex flex-row gap-4  items-center'>
                    <input type="number" className='p-2 outline-none rounded-md' onChange={(e) => setMinPrice(e.target.value)} placeholder='min price' />
                    <input type="number" className='p-2 outline-none rounded-md' onChange={(e) => setMaxPrice(e.target.value)} placeholder='max price' />
                    <button className='px-7 py-3 rounded-xl bg-blue-500 text-white'>
                        Enter
                    </button>
                </form>
                <button onClick={sortHendlear} className='px-7 py-3 rounded-xl bg-green-500 text-white'>Sort </button>
            </div>
            <div className='grid grid-cols-5 p-6 gap-7'>
                { 
                    uylar2.map((item, index) => (
                        <HouseCard key={index + 1} item={item} />
                    ))
                }

            </div>
        </div>
    )
}

//onChange={RoomsFilterChange}
export default House
