"use client"

import { useEffect, useRef } from "react"

interface FloatingParticlesProps {
  particleCount?: number
  minVelocity?: number
  maxVelocity?: number
  minSize?: number
  maxSize?: number
  color?: string
  particleOpacity?: number
  canvasOpacity?: number
}

export const FloatingParticles = ({
  particleCount = 50,
  minVelocity = 0.2,
  maxVelocity = 0.8,
  minSize = 1,
  maxSize = 3,
  color = "34, 197, 94", // RGB for green-500
  particleOpacity = 0.3,
  canvasOpacity = 0.4,
}: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const velocityRange = maxVelocity - minVelocity
    const sizeRange = maxSize - minSize

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * velocityRange + minVelocity,
        vy: (Math.random() - 0.5) * velocityRange + minVelocity,
        size: Math.random() * sizeRange + minSize,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.fillStyle = `rgba(${color}, ${particleOpacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, minVelocity, maxVelocity, minSize, maxSize, color, particleOpacity])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: canvasOpacity }}
    />
  )
}
