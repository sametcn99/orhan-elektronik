'use client'

import { alpha, useMediaQuery, useTheme } from '@mui/material'
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { services } from '@/data/services'
import { sectionIds } from '../../data/constants'
import { SectionBackground } from '../ui/SectionBackground'
import { SectionContainer } from '../ui/SectionContainer'
import { SectionHeader } from '../ui/SectionHeader'

type Service = (typeof services)[number]

type StickyServiceCardProps = {
  i: number
  service: Service
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  isMobile: boolean
}

const StickyServiceCard = ({
  i,
  service,
  progress,
  range,
  targetScale,
  isMobile,
}: StickyServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])
  const Icon = service.icon

  // Mobil için daha küçük offset, masaüstü için mevcut değerler
  const topOffset = isMobile
    ? `calc(-2vh + ${i * 12 + 80}px)`
    : `calc(-6vh + ${i * 18 + 200}px)`

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex items-center justify-center px-4 md:px-0"
      id={sectionIds.services}
    >
      <motion.div
        style={{
          scale,
          top: topOffset,
        }}
        className="group relative -top-1/4 flex h-[280px] md:h-[360px] w-full max-w-5xl origin-top flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.4)] md:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] transition-all duration-500"
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

        <div className="relative z-10 grid h-full w-full grid-cols-1 gap-4 md:gap-6 p-5 md:p-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl text-white shadow-lg flex-shrink-0"
                style={{
                  backgroundColor: service.color,
                  boxShadow: `0 15px 45px -18px ${alpha(service.color, 0.6)}`,
                }}
              >
                <Icon sx={{ fontSize: isMobile ? 22 : 28 }} />
              </span>
              <div className="flex flex-col">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.35em] text-slate-500/70">
                  Hizmet
                </p>
                <h3 className="text-lg md:text-2xl font-extrabold text-slate-900">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="max-w-3xl text-sm md:text-base leading-relaxed text-slate-700">
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <SectionContainer
      id={sectionIds.services}
      sx={{
        bgcolor: 'background.default',
        position: 'relative',
        overflowX: 'clip',
        overflowY: 'visible',
      }}
    >
      <SectionBackground />

      <div className="relative z-10 overflow-x-clip">
        <SectionHeader
          overline="HİZMETLERİMİZ"
          title="Profesyonel Elektrik Çözümleri"
          description="Modern teknoloji ve uzman kadromuzla tüm elektrik ve elektronik ihtiyaçlarınız için yanınızdayız."
        />
        <div
          ref={container}
          className="relative mx-auto flex w-full flex-col items-center justify-center pb-[15vh] md:pb-[25vh]"
        >
          {services.map((service, i) => {
            const targetScale = isMobile
              ? Math.max(0.92, 1 - (services.length - i - 1) * 0.02)
              : Math.max(0.9, 1 - (services.length - i - 1) * 0.025)

            return (
              <StickyServiceCard
                key={service.title}
                i={i}
                service={service}
                progress={scrollYProgress}
                range={[i * 0.1, 1]}
                targetScale={targetScale}
                isMobile={isMobile}
              />
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}
