'use client'

import React, { useRef } from 'react'
import { alpha } from '@mui/material'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import ReactLenis from 'lenis/react'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionBackground } from '../ui/SectionBackground'
import { sectionIds, services } from '../../data/constants'

type Service = (typeof services)[number]

type StickyServiceCardProps = {
  i: number
  service: Service
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

const StickyServiceCard = ({
  i,
  service,
  progress,
  range,
  targetScale,
}: StickyServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])
  const Icon = service.icon

  return (
    <div ref={cardRef} className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-6vh + ${i * 18 + 200}px)`,
        }}
        className="group relative -top-1/4 flex h-[360px] w-full max-w-5xl origin-top flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] transition-all duration-500"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${alpha(
              service.color,
              0.18,
            )}, transparent 42%), radial-gradient(circle at 80% 8%, ${alpha(
              service.color,
              0.12,
            )}, transparent 36%), linear-gradient(140deg, ${alpha(
              service.color,
              0.08,
            )}, rgba(255,255,255,0.92))`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />

        <div className="relative z-10 grid h-full w-full grid-cols-1 gap-6 p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{
                  backgroundColor: service.color,
                  boxShadow: `0 15px 45px -18px ${alpha(service.color, 0.6)}`,
                }}
              >
                <Icon sx={{ fontSize: 28 }} />
              </span>
              <div className="flex flex-col">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500/70">
                  Hizmet
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-slate-700">
              {service.description}
            </p>
          
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ServicesSection() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <SectionContainer
      id={sectionIds.services}
      sx={{ bgcolor: 'background.default', position: 'relative', overflow: 'visible' }}
    >
      <SectionBackground />

      <div className="relative z-10">
        <SectionHeader
          overline="HİZMETLERİMİZ"
          title="Profesyonel Elektrik Çözümleri"
          description="Modern teknoloji ve uzman kadromuzla tüm elektrik ve elektronik ihtiyaçlarınız için yanınızdayız."
        />

        <ReactLenis root>
          <div
            ref={container}
            className="relative mx-auto flex w-full flex-col items-center justify-center pb-[25vh] "
          >
            {services.map((service, i) => {
              const targetScale = Math.max(
                0.8, // keep later kartlar full-size-ish
                1 - (services.length - i - 1) * 0.05,
              )

              return (
                <StickyServiceCard
                  key={service.title}
                  i={i}
                  service={service}
                  progress={scrollYProgress}
                  range={[i * 0.18, 1]}
                  targetScale={targetScale}
                />
              )
            })}
          </div>
        </ReactLenis>
      </div>
    </SectionContainer>
  )
}
