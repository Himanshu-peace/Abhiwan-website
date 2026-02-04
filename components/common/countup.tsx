import { useEffect, useState, useRef } from "react"

function CountUp({ value, end, suffix, duration = 2000 }: { value?: string; end?: number; suffix?: string; duration?: number }) {
  // Handle both old string format and new number format
  let numericValue: number
  let displaySuffix: string = ""
  
  if (end !== undefined) {
    // New format: use end and suffix
    numericValue = end
    displaySuffix = suffix || ""
  } else if (value) {
    // Old format: parse string value
    const valueStr = String(value)
    const isPercent = valueStr.includes("%")
    const isPlus = valueStr.includes("+")
    numericValue = parseInt(valueStr.replace(/[^\d]/g, ""))
    displaySuffix = isPercent ? "%" : isPlus ? "+" : ""
  } else {
    // Fallback
    numericValue = 0
    displaySuffix = ""
  }

  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation()
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated, numericValue])

  const startAnimation = () => {
    let start = 0
    const startTime = performance.now()

    function animate(time: number) {
      const progress = Math.min((time - startTime) / duration, 1)
      const current = Math.floor(progress * numericValue)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <div ref={elementRef}>
      {count}
      {displaySuffix}
    </div>
  )
}

export default CountUp