"use client"

import { useEffect, useState, useRef } from "react"

const symptomData = [
  { day: "Mon", pain: 2, bloating: 1, fatigue: 4 },
  { day: "Tue", pain: 1, bloating: 2, fatigue: 3 },
  { day: "Wed", pain: 4, bloating: 2, fatigue: 3 },
  { day: "Thu", pain: 3, bloating: 3, fatigue: 2 },
  { day: "Fri", pain: 1, bloating: 4, fatigue: 2 },
  { day: "Sat", pain: 3, bloating: 2, fatigue: 1 },
  { day: "Sun", pain: 4, bloating: 1, fatigue: 4 },
]

const maxValue = 5
const chartHeight = 500
const chartWidth = 900
const padding = 80

export function AnimatedSymptomChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 3000
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
        setAnimationProgress(eased)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    }
  }, [isVisible])

  const getYPosition = (value: number) => {
    return chartHeight - padding - (value / maxValue) * (chartHeight - padding * 2)
  }

  const getXPosition = (index: number) => {
    const spacing = (chartWidth - padding * 2) / (symptomData.length - 1)
    return padding + index * spacing
  }

  const createPath = (dataKey: "pain" | "bloating" | "fatigue") => {
    const points = symptomData.map((d, i) => ({
      x: getXPosition(i),
      y: getYPosition(d[dataKey]),
    }))

    const visiblePoints = points.slice(0, Math.ceil(points.length * animationProgress))

    if (visiblePoints.length === 0) return ""

    let path = `M ${visiblePoints[0].x} ${visiblePoints[0].y}`

    for (let i = 1; i < visiblePoints.length; i++) {
      path += ` L ${visiblePoints[i].x} ${visiblePoints[i].y}`
    }

    return path
  }

  const colors = {
    pain: "#ef4444",
    bloating: "#f59e0b",
    fatigue: "#6366f1",
  }

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center py-8">
      <div className="relative w-full">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Symptom Trends</h3>

        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))" }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1={padding}
              y1={getYPosition(i)}
              x2={chartWidth - padding}
              y2={getYPosition(i)}
              stroke="#d1d5db"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity={0.4}
            />
          ))}

          {/* Pain line */}
          <path
            d={createPath("pain")}
            fill="none"
            stroke={colors.pain}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bloating line */}
          <path
            d={createPath("bloating")}
            fill="none"
            stroke={colors.bloating}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Fatigue line */}
          <path
            d={createPath("fatigue")}
            fill="none"
            stroke={colors.fatigue}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {symptomData.map((d, i) => {
            const pointProgress = i / (symptomData.length - 1)
            const isVisible = animationProgress >= pointProgress

            return (
              <g key={i}>
                {/* Pain point */}
                <circle
                  cx={getXPosition(i)}
                  cy={getYPosition(d.pain)}
                  r="10"
                  fill={colors.pain}
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: "opacity 0.5s ease-out",
                  }}
                />
                {/* Bloating point */}
                <circle
                  cx={getXPosition(i)}
                  cy={getYPosition(d.bloating)}
                  r="10"
                  fill={colors.bloating}
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: "opacity 0.5s ease-out",
                  }}
                />
                {/* Fatigue point */}
                <circle
                  cx={getXPosition(i)}
                  cy={getYPosition(d.fatigue)}
                  r="10"
                  fill={colors.fatigue}
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: "opacity 0.5s ease-out",
                  }}
                />
              </g>
            )
          })}

          {/* X-axis labels */}
          {symptomData.map((d, i) => (
            <text
              key={i}
              x={getXPosition(i)}
              y={chartHeight - 25}
              textAnchor="middle"
              className="text-base fill-foreground/70 font-semibold"
              opacity={animationProgress}
            >
              {d.day}
            </text>
          ))}
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-center gap-10 mt-10">
          {[
            { label: "Pain", color: colors.pain },
            { label: "Bloating", color: colors.bloating },
            { label: "Fatigue", color: colors.fatigue },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
              style={{
                opacity: animationProgress,
                transition: "opacity 0.8s ease-out",
              }}
            >
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-lg font-semibold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
