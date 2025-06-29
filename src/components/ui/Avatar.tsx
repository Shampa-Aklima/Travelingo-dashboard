import Image from "next/image"

interface AvatarProps {
    src?: string
    alt?: string
    fallback?: string
    size?: "sm" | "md" | "lg"
    className?: string
  }
  
  export default function Avatar({ src, alt, fallback, size = "md", className = "" }: AvatarProps) {
    const sizes = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
    }
  
    return (
      <div
        className={`${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ${className}`}
      >
        {src ? (
          <Image src={src || "/placeholder.svg"} alt={alt || ""} fill className="object-cover" />
        ) : (
          <span className="font-medium text-gray-600">{fallback}</span>
        )}
      </div>
    )
  }
  