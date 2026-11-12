import { useEffect, useMemo, useRef } from 'react'
import { HERO_LINES, HERO_STATS } from '../../../data/hero'
import useTypewriter from '../../../hooks/useTypewriter'
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion'
import Button from '../../../Components/UI/Button'
import Counter from '../../../Components/UI/Counter'
import heroImage from '../../../assets/images/hero-gold-jewellery.jpg'
import './HeroSection.css'

const GEMS = [
  {
    depth: 0.85,
    style: { left: '5%', top: '22%', width: 52, animationDelay: '-2s' },
    svg: (
      <>
        <path
          d="M30 6l20 16-20 32L10 22z"
          stroke="#C9A24B"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity=".85"
        />
        <path
          d="M10 22h40M30 6l-8 16 8 32 8-32-8-16z"
          stroke="#C9A24B"
          strokeWidth=".9"
          strokeLinejoin="round"
          opacity=".6"
        />
      </>
    ),
  },
  {
    depth: 0.45,
    style: { right: '8%', top: '16%', width: 78, animationDelay: '-6s' },
    svg: (
      <>
        <circle cx="30" cy="30" r="22" stroke="#C9A24B" strokeWidth="1.1" opacity=".7" />
        <path
          d="M30 8a22 22 0 000 44 22 22 0 000-44z"
          stroke="#C9A24B"
          strokeWidth=".9"
          opacity=".45"
        />
        <circle
          cx="30"
          cy="30"
          r="15"
          stroke="#C9A24B"
          strokeWidth=".8"
          strokeDasharray="3 5"
          opacity=".55"
        />
      </>
    ),
  },
  {
    depth: 1.15,
    style: { right: '22%', bottom: '8%', width: 44, animationDelay: '-10s' },
    svg: (
      <>
        <path
          d="M30 8l18 14-18 30-18-30z"
          stroke="#E4CB92"
          strokeWidth="1.1"
          strokeLinejoin="round"
          opacity=".8"
        />
        <path d="M12 22h36" stroke="#E4CB92" strokeWidth=".8" opacity=".5" />
      </>
    ),
  },
  {
    depth: 1.45,
    style: { left: '13%', bottom: '12%', width: 34, animationDelay: '-4s' },
    svg: (
      <path
        d="M30 10l16 20-16 20-16-20z"
        stroke="#C9A24B"
        strokeWidth="1.1"
        strokeLinejoin="round"
        opacity=".7"
      />
    ),
  },
]

function buildSparkles() {
  return Array.from({ length: 48 }, () => {
    const isStar = Math.random() > 0.55
    const size = Math.random() * 3.4 + 1.6
    return {
      isStar,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      size: `${(isStar ? size : size * 1.7).toFixed(1)}px`,
      dur: `${(Math.random() * 5 + 4).toFixed(2)}s`,
      del: `${(Math.random() * 9).toFixed(2)}s`,
    }
  })
}

export default function HeroSection() {
  const reduced = usePrefersReducedMotion()
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const typed = useTypewriter(HERO_LINES, reduced)
  const sparkles = useMemo(() => buildSparkles(), [])

  /* Scroll parallax on the copy + pointer parallax on the decorative layers. */
  useEffect(() => {
    if (reduced) return undefined

    const hero = heroRef.current
    if (!hero) return undefined

    let scrollFrame = 0
    let pointerFrame = 0
    let mouseX = 0
    let mouseY = 0

    const applyScroll = () => {
      scrollFrame = 0
      const y = window.pageYOffset || document.documentElement.scrollTop || 0
      hero.style.setProperty('--sy', `${(y * 0.16).toFixed(1)}px`)
    }

    const applyPointer = () => {
      pointerFrame = 0
      bgRef.current?.style.setProperty('--px', `${(mouseX * -26).toFixed(2)}px`)
      bgRef.current?.style.setProperty('--py', `${(mouseY * -18).toFixed(2)}px`)

      hero.querySelectorAll('.gem').forEach((gem) => {
        const depth = parseFloat(gem.style.getPropertyValue('--depth')) || 1
        gem.style.setProperty('--px', `${(mouseX * 26 * depth).toFixed(2)}px`)
        gem.style.setProperty('--py', `${(mouseY * 18 * depth).toFixed(2)}px`)
      })
    }

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(applyScroll)
    }

    const onPointerMove = (event) => {
      const rect = hero.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(applyPointer)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (finePointer) {
      hero.addEventListener('mousemove', onPointerMove, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      hero.removeEventListener('mousemove', onPointerMove)
      window.cancelAnimationFrame(scrollFrame)
      window.cancelAnimationFrame(pointerFrame)
    }
  }, [reduced])

  return (
    <section className="hero" id="home" aria-labelledby="heroTitle" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true" ref={bgRef}>
        <div className="hero__photo">
          <img
            src={heroImage}
            alt=""
            width="1920"
            height="1280"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero__halo"></div>
        <div className="hero__ring"></div>

        <div className="sparkles">
          {sparkles.map((spark, index) => (
            <span
              key={index}
              className={`spark${spark.isStar ? ' spark--star' : ''}`}
              style={{
                left: spark.left,
                top: spark.top,
                width: spark.size,
                height: spark.size,
                '--dur': spark.dur,
                '--del': spark.del,
              }}
            />
          ))}
        </div>

        <div className="gems">
          {GEMS.map((gem, index) => (
            <div
              key={index}
              className="gem"
              style={{ ...gem.style, '--depth': gem.depth }}
            >
              <svg viewBox="0 0 60 60" fill="none">
                {gem.svg}
              </svg>
            </div>
          ))}
        </div>

        <div className="hero__grain"></div>
      </div>

      <div className="container hero__inner">
        <p className="eyebrow">Jaipur, India · Est. 1998 · BIS Hallmarked</p>

        <h1 className="hero__title" id="heroTitle">
          <span className="hero__rot">
            <span className="hero__rot-text">{typed}</span>
          </span>
        </h1>

        <p className="hero__sub">
          Aurelia Crafts is a full-service jewellery house from the heart of Johari Bazaar — CAD
          design, casting, diamond setting, hallmarking and assembly under one roof. We build gold,
          diamond and silver collections for retailers, wholesalers, private clients and export
          buyers across 34 countries.
        </p>

        <div className="hero__ctas">
          <Button href="#services">Explore Collections</Button>
          <Button href="#contact" variant="ghost">
            Book a Consultation
          </Button>
        </div>

        <div className="hero__stats">
          {HERO_STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <i></i>
        <span>Scroll</span>
      </div>
    </section>
  )
}
