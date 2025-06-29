"use client"

import Card, { CardContent, CardHeader, CardTitle } from "../ui/Card"
import Button from "../ui/Button"
import { Star, Filter } from "lucide-react"

interface Destination {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image?: string
}

interface DestinationListProps {
  destinations: Destination[]
  title?: string
  subtitle?: string
  onFilterClick?: () => void
}

export default function DestinationList({
  destinations,
  title = "Best Destination 🏔️",
  subtitle = "100 Destination found",
  onFilterClick,
}: DestinationListProps) {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onFilterClick}>
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex-shrink-0" />

            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">{destination.name}</h4>
              <p className="text-sm text-gray-500">{destination.location}</p>
            </div>

            <div className="text-right">
              <div className="font-bold text-gray-900">${destination.price}</div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {destination.rating}
                <span>({destination.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
