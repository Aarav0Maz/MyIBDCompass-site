"use client"

import { useEffect, useState } from "react"

const screens = [
  { src: "/app-screens/home-dashboard.png", alt: "Home Dashboard" },
  { src: "/app-screens/symptom-tracker.png", alt: "Symptom Tracker" },
  { src: "/app-screens/meal-planner.png", alt: "Meal Planner" },
  { src: "/app-screens/insights.png", alt: "Insights" },
  { src: "/app-screens/profile.png", alt: "Profile" },
]

export function PhoneMockupSlideshow() {
  const [currentScreen, setCurrentScreen] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 3000) // Change screen every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      {/* Phone Frame */}
      <div className="relative h-[600px] w-[300px] rounded-[3rem] border-[14px] border-foreground bg-foreground shadow-2xl lg:h-[700px] lg:w-[350px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-7 w-40 -translate-x-1/2 rounded-b-3xl bg-foreground" />

        {/* Screen Container with overflow hidden */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-background">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentScreen * 100}%)`,
            }}
          >
            {screens.map((screen, index) => (
              <div key={index} className="h-full w-full flex-shrink-0">
                <img src={screen.src || "/placeholder.svg"} alt={screen.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-[17px] top-28 h-12 w-1 rounded-l-lg bg-foreground" />
        <div className="absolute -left-[17px] top-44 h-16 w-1 rounded-l-lg bg-foreground" />
        <div className="absolute -left-[17px] top-64 h-16 w-1 rounded-l-lg bg-foreground" />
        <div className="absolute -right-[17px] top-48 h-20 w-1 rounded-r-lg bg-foreground" />
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute -bottom-8 flex gap-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScreen(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentScreen ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to screen ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute -left-4 top-20 h-20 w-20 rounded-full bg-accent/10 blur-2xl animate-float" />
      <div
        className="absolute -right-4 bottom-20 h-24 w-24 rounded-full bg-accent/10 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
