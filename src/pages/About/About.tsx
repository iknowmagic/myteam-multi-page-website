import { useState } from 'react'
import { Link } from 'react-router-dom'

interface DirectorProps {
  avatar: string
  name: string
  title: string
  quote: string
}

/**
 * Director card component with expandable details
 */
function Director({ avatar, name, title, quote }: DirectorProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative flex flex-col items-center ${expanded ? 'bg-[#002529]' : 'bg-[#012f34]'} p-6 pb-14`}
    >
      {!expanded && (
        <img
          src={avatar}
          alt={name}
          className="mb-4 border-[#c4fffe] border-2 rounded-full w-24 h-24"
        />
      )}

      <h3 className="font-bold text-[#79c8c7] text-lg">{name}</h3>

      {!expanded ? (
        <p className="mt-1 font-medium text-sm italic">{title}</p>
      ) : (
        <>
          <p className="mt-4 mb-6">&quot;{quote}&quot;</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </>
      )}

      <button
        className={`absolute -bottom-7 w-14 h-14 rounded-full flex items-center justify-center ${
          expanded
            ? 'bg-[#79c8c7] hover:bg-[#f67e7e]'
            : 'bg-[#f67e7e] hover:bg-[#79c8c7]'
        } transition-colors`}
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Show less' : 'Show more'}
      >
        <img
          src={expanded ? '/images/icon-close-2.svg' : '/images/icon-cross.svg'}
          alt={expanded ? 'close' : 'expand'}
        />
      </button>
    </div>
  )
}

/**
 * About page component
 */
export default function About() {
  const directors = [
    {
      avatar: '/images/avatar-nikita.jpg',
      name: 'Nikita Marks',
      title: 'Founder & CEO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/images/avatar-christian.jpg',
      name: 'Christian Duncan',
      title: 'Co-founder & COO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/images/avatar-cruz.jpg',
      name: 'Cruz Hamer',
      title: 'Co-founder & CTO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/images/avatar-drake.jpg',
      name: 'Drake Heaton',
      title: 'Business Development Lead',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/images/avatar-griffin.jpg',
      name: 'Griffin Wise',
      title: 'Lead Marketing',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/images/avatar-aden.jpg',
      name: 'Aden Allan',
      title: 'Head of Talent',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
  ]

  return (
    <div className="overflow-hidden font-semibold text-white">
      {/* Intro Section */}
      <section className="relative px-6 pb-24 md:pb-30 lg:pb-36">
        {/* Background pattern */}
        <div className="-right-24 -bottom-24 bottom-0 absolute bg-[url('/images/bg-pattern-about-1-mobile-nav-1.svg')] bg-no-repeat bg-right-bottom w-52 h-52" />

        {/* Section content */}
        <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl lg:text-left text-center">
          About
        </h1>

        <div className="lg:max-w-3xl lg:text-left text-center">
          <div className="hidden lg:block bg-[#f67e7e] mb-10 w-12 h-1"></div>
          <p className="lg:text-lg lg:leading-8">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We&apos;ll bring those teams to you.
          </p>
        </div>
      </section>

      {/* Directors Section */}
      <section className="relative bg-[#004047] px-6 md:px-24 lg:px-10 py-24 md:py-28 lg:py-36 text-center">
        {/* Background patterns */}
        <div className="-top-24 top-0 -left-24 left-0 absolute bg-[url('/images/bg-pattern-about-2-contact-1.svg')] bg-no-repeat w-52 h-52" />
        <div className="hidden lg:block right-0 bottom-0 absolute bg-[url('/images/bg-pattern-home-4-about-3.svg')] bg-no-repeat w-52 h-52" />

        {/* Section heading */}
        <h2 className="mb-12 font-bold text-3xl lg:text-5xl">
          Meet the directors
        </h2>

        {/* Directors grid */}
        <div className="gap-14 md:gap-x-3 md:gap-y-20 lg:gap-x-8 lg:gap-y-16 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {directors.map((director, index) => (
            <Director
              key={index}
              avatar={director.avatar}
              name={director.name}
              title={director.title}
              quote={director.quote}
            />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative flex flex-col items-center bg-[#012f34] px-6 py-24 md:py-28 lg:py-36">
        {/* Background pattern */}
        <div className="-top-24 top-0 -left-24 left-0 absolute bg-[url('/images/bg-pattern-about-4.svg')] bg-no-repeat w-52 h-52" />

        {/* Section heading */}
        <h2 className="mb-16 font-bold text-3xl lg:text-5xl">
          Some of our clients
        </h2>

        {/* Client logos */}
        <div className="flex md:flex-row flex-col md:flex-wrap md:justify-center items-center md:gap-12 lg:gap-20">
          <img
            src="/images/logo-the-verge.png"
            alt="The Verge"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/images/logo-jakarta-post.png"
            alt="Jakarta Post"
            className="mt-14 md:mt-0 max-w-40 md:max-w-36 lg:max-w-44"
          />
          <img
            src="/images/logo-the-guardian.png"
            alt="The Guardian"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/images/logo-tech-radar.png"
            alt="Tech Radar"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/images/logo-gadgets-now.png"
            alt="Gadgets Now"
            className="mt-14 md:mt-0 max-w-24 md:max-w-20 lg:max-w-24"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative md:flex md:justify-around md:items-center bg-[#f67e7e] px-6 lg:px-36 py-20 md:py-0 lg:py-20 md:h-50 overflow-hidden text-center">
        <div className="bottom-0 left-0 absolute bg-[url('/images/bg-pattern-home-6-about-5.svg')] bg-no-repeat bg-left-bottom w-52 h-52" />

        <h2 className="mb-6 md:mb-0 font-bold text-[#012f34] text-3xl lg:text-5xl">
          Ready to get started?
        </h2>

        <Link to="/contact">
          <button className="hover:bg-[#012f34] px-8 py-2 border-[#012f34] border-2 rounded-full font-semibold text-[#012f34] hover:text-white text-lg transition-colors">
            contact us
          </button>
        </Link>
      </section>
    </div>
  )
}
