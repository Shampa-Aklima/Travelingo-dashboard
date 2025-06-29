"use client"

import Card, { CardContent } from "../ui/Card"
import Button from "../ui/Button"

interface PromoCardProps {
  title: string
  subtitle: string
  buttonText: string
  icon?: string
  onButtonClick?: () => void
  className?: string
}

export default function PromoCard({
  title,
  subtitle,
  buttonText,
  icon = "🏔️",
  onButtonClick,
  className = "",
}: PromoCardProps) {
  return (
    <Card className={`bg-gradient-to-br from-slate-700 to-slate-800 border-0 text-white ${className}`}>
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-500 text-lg">{icon}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-6">{subtitle}</p>
        </div>

        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
