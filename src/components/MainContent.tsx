"use client"

import DestinationCard from "./DestinationCard"
import DestinationList from "./DestinationList"
import ExploreCard from "./ExploreCard"

const destinations = [
  {
    id: 1,
    title: "Mountaineering",
    subtitle: "Explore Mountains",
    image: "/images/mountaineering.jpg",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 2,
    title: "Night camping",
    subtitle: "Under the stars",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 3,
    title: "Mount climbing",
    subtitle: "Reach new heights",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-emerald-500 to-teal-600",
  },
]

const bestDestinations = [
  {
    id: 1,
    name: "Green wood forest",
    location: "Bandung",
    rating: 4.9,
    reviews: 120,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Green forest Camp",
    location: "Bogor",
    rating: 4.8,
    reviews: 89,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Desert Festival",
    location: "Sahara",
    rating: 4.7,
    reviews: 156,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function MainContent() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Best Destinations - Takes 2 columns */}
        <div className="lg:col-span-2">
          <DestinationList destinations={bestDestinations} />
        </div>

        {/* Explore Card - Takes 1 column */}
        <div className="lg:col-span-1">
          <ExploreCard
            image="/explore-image.png"
            title="Explore Adventure"
            location="Various Locations"
            rating={4.9}
            price={1299}
          />
        </div>
      </div>
    </div>
  )
}
