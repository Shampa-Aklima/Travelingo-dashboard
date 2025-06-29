"use client"

import Card from "../ui/Card"
import Badge from "../ui/Badge"
import { Star, Users } from "lucide-react"

interface DestinationCardProps {
  title: string
  location: string
  rating: number
  image?: string
  gradient: string
  onClick?: () => void
}

export default function DestinationCard({ title, location, rating, gradient, onClick }: DestinationCardProps) {
  return (
    <Card
      className={`relative overflow-hidden border-0 shadow-lg group cursor-pointer h-48 ${gradient}`}
      onClick={onClick}
    >
      <div className="relative p-6 text-white h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Badge className="bg-white/20 text-white border-0">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {rating}
          </Badge>
          <Users className="w-4 h-4 opacity-80" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-white/90 text-sm">{location}</p>
        </div>
      </div>
    </Card>
  )
}
