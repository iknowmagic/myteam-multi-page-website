import MeetBox from '@/components/MeetBox'
import GetStarted from '@/components/GetStarted'

/**
 * About page component
 */
export default function About() {
  const directors = [
    {
      avatar: '/assets/images/avatar-nikita.jpg',
      name: 'Nikita Marks',
      title: 'Founder & CEO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/assets/images/avatar-christian.jpg',
      name: 'Christian Duncan',
      title: 'Co-founder & COO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/assets/images/avatar-cruz.jpg',
      name: 'Cruz Hamer',
      title: 'Co-founder & CTO',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/assets/images/avatar-drake.jpg',
      name: 'Drake Heaton',
      title: 'Business Development Lead',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/assets/images/avatar-griffin.jpg',
      name: 'Griffin Wise',
      title: 'Lead Marketing',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
    {
      avatar: '/assets/images/avatar-aden.jpg',
      name: 'Aden Allan',
      title: 'Head of Talent',
      quote:
        'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    },
  ]

  return (
    <div className="overflow-hidden font-semibold text-white">
      {/* Intro Section */}
      <section className="relative lg:items-start px-6 pb-24 md:pb-30 lg:pb-36">
        {/* Background pattern */}
        <div
          className="-right-24 right-0 -bottom-24 bottom-0 absolute bg-[url('/assets/images/bg-pattern-about-1-mobile-nav-1.svg')] bg-no-repeat bg-right-bottom w-52 h-52"
          aria-hidden="true"
        />

        {/* Section content */}
        <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl lg:text-left text-center">
          About
        </h1>

        <div className="lg:max-w-3xl lg:text-left text-center">
          <div
            className="hidden lg:block bg-[#f67e7e] mb-10 w-12 h-1"
            aria-hidden="true"
          ></div>
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
        <div
          className="-top-24 top-0 -left-24 left-0 absolute bg-[url('/assets/images/bg-pattern-about-2-contact-1.svg')] bg-no-repeat w-52 h-52"
          aria-hidden="true"
        />
        <div
          className="hidden lg:block right-0 bottom-0 absolute bg-[url('/assets/images/bg-pattern-home-4-about-3.svg')] bg-no-repeat w-52 h-52"
          aria-hidden="true"
        />

        {/* Section heading */}
        <h2 className="mb-12 font-bold text-3xl lg:text-5xl">
          Meet the directors
        </h2>

        {/* Directors grid */}
        <div className="gap-14 md:gap-x-3 md:gap-y-20 lg:gap-x-8 lg:gap-y-16 grid md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {directors.map((director, index) => (
            <MeetBox
              key={index}
              avatar={director.avatar}
              avatarName={director.name}
              avatarTitle={director.title}
              quote={director.quote}
            />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative flex flex-col items-center bg-[#012f34] px-6 py-24 md:py-28 lg:py-36">
        {/* Background pattern */}
        <div
          className="-top-24 top-0 -left-24 left-0 absolute bg-[url('/assets/images/bg-pattern-about-4.svg')] bg-no-repeat w-52 h-52"
          aria-hidden="true"
        />

        {/* Section heading */}
        <h2 className="mb-16 font-bold text-3xl lg:text-5xl">
          Some of our clients
        </h2>

        {/* Client logos */}
        <div className="flex md:flex-row flex-col md:flex-wrap md:justify-center items-center md:gap-12 lg:gap-20">
          <img
            src="/assets/images/logo-the-verge.png"
            alt="The Verge logo"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/assets/images/logo-jakarta-post.png"
            alt="Jakarta Post logo"
            className="mt-14 md:mt-0 max-w-40 md:max-w-36 lg:max-w-44"
          />
          <img
            src="/assets/images/logo-the-guardian.png"
            alt="The Guardian logo"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/assets/images/logo-tech-radar.png"
            alt="Tech Radar logo"
            className="mt-14 md:mt-0 max-w-36 md:max-w-32 lg:max-w-40"
          />
          <img
            src="/assets/images/logo-gadgets-now.png"
            alt="Gadgets Now logo"
            className="mt-14 md:mt-0 max-w-24 md:max-w-20 lg:max-w-24"
          />
        </div>
      </section>

      {/* CTA Section - Using the GetStarted component */}
      <GetStarted />
    </div>
  )
}
