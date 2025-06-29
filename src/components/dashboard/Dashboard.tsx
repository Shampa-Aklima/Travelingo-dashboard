"use client"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import DestinationCard from "@/components/travel/DestinationCard"
import DestinationList from "@/components/travel/DestinationList"
import PromoCard from "@/components/travel/PromoCard"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import Image from 'next/image'

// Sample data - you can move this to a separate data file
const featuredDestinations = [
  {
    title: "Mountaineering",
    location: "Mount Bromo",
    rating: 4.7,
    gradient: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    title: "Night camping",
    location: "Tumpak Sewu",
    rating: 4.8,
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    title: "Mount climbing",
    location: "Mount Semeru",
    rating: 4.9,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
]

const destinations = [
  {
    id: 1,
    name: "Green wood forest",
    location: "Bandung",
    price: 999,
    rating: 4.7,
    reviews: 12,
  },
  {
    id: 2,
    name: "Green forest Camp",
    location: "Bogor",
    price: 999,
    rating: 4.8,
    reviews: 8,
  },
  {
    id: 3,
    name: "Desert Festival",
    location: "Bromo",
    price: 999,
    rating: 4.9,
    reviews: 15,
  },
]

const user = {
  name: "Jemmy Max",
  title: "Travel Enthusiast",
  initials: "JM",
}

export default function Dashboard() {
  const [date, setDate] = useState<Date | null>(new Date())
  // Example schedule data
  const schedule = [
    {
      title: 'Crocked Forest',
      date: '20 May - 22 May',
      image: '/images/forest.jpg',
    },
    {
      title: 'Fern Waterfall',
      date: '21 May - 22 May',
      image: '/images/waterfall.jpg',
    },
    {
      title: 'Night Camping',
      date: '22 May - 23 May',
      image: '/images/camping.jpg',
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content + Right Sidebar */}
      <div className="flex-1 flex">
        {/* Main Content */}
        <div className="p-6 max-w-4xl w-full">
          {/* Header */}
          <Header user={user} />

          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.title}
                location={destination.location}
                rating={destination.rating}
                gradient={destination.gradient}
                onClick={() => console.log(`Clicked ${destination.title}`)}
              />
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex gap-6">
            <DestinationList destinations={destinations} onFilterClick={() => console.log("Filter clicked")} />
            <PromoCard
              title="Let's Explore the beauty"
              subtitle="Get special offers & more"
              buttonText="Join Now"
              onButtonClick={() => console.log("Join Now clicked")}
              className="w-80"
            />
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="w-80 p-6 flex flex-col gap-6 bg-white rounded-xl shadow-sm ml-4">
          {/* Calendar */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="font-semibold text-gray-700 mb-2">May 2025</div>
            <Calendar
              onChange={(value) => setDate(value as Date)}
              value={date}
              tileClassName={({ date: d }) =>
                [20, 21, 22, 23].includes(d.getDate()) && d.getMonth() === 4 ? 'bg-emerald-100 rounded-full text-emerald-600 font-bold' : ''
              }
              calendarType="gregory"
              prev2Label={null}
              next2Label={null}
            />
          </div>
          {/* My Schedule */}
          <div>
            <div className="font-semibold text-gray-700 mb-2">My Schedule</div>
            <div className="flex flex-col gap-4">
              {schedule.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex items-center justify-center">
                    <Image src={item.image} 
                     alt={item.title} 
                     height={48}
                     width={48}
                     className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
