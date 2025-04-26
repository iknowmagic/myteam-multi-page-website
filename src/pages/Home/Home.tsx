import { Link } from 'react-router-dom'

/**
 * Home page component
 */
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative lg:flex lg:justify-between lg:items-end px-6 md:px-40 pt-0 md:pt-8 lg:pt-12 pb-44 md:pb-56 lg:pb-64">
        {/* Background patterns */}
        <div
          className="hidden lg:block top-12 top-14 -left-24 left-0 absolute bg-[url('/images/bg-pattern-home-1.svg')] bg-no-repeat bg-left-top w-52 h-52"
          aria-hidden="true"
        />
        <div
          className="bottom-0 absolute bg-[url('/images/bg-pattern-home-2.svg')] bg-no-repeat bg-center bg-bottom w-full h-25"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-8xl lg:text-left text-center leading-10 lg:leading-tight">
          Find the
          <br />
          best
          <span className="text-[#f67e7e]"> talent</span>
        </h1>

        <div className="lg:relative mx-auto lg:mx-0 mt-5 md:mt-6 lg:mt-0 lg:w-112 md:font-medium lg:font-semibold lg:text-left text-center">
          <div
            className="hidden lg:block lg:top-12 lg:absolute bg-[#79c8c7] mb-10 w-12 h-1"
            aria-hidden="true"
          ></div>
          Finding the right people and building high performing teams can be
          hard. Most companies aren&apos;t tapping into the abundance of global
          talent. We&apos;re about to change that.
        </div>
      </section>

      {/* Features Section */}
      <section className="relative lg:flex lg:justify-between bg-[#012f34] px-6 md:px-24 lg:px-40 py-16 md:py-24 lg:py-36">
        {/* Background Pattern */}
        <div
          className="top-0 -right-24 right-0 absolute bg-[url('/images/bg-pattern-home-3.svg')] bg-no-repeat bg-right-top w-52 h-52"
          aria-hidden="true"
        />

        {/* Section Heading */}
        <h2 className="mb-14 md:mb-12 pr-28 lg:pr-0 lg:w-112 font-bold text-3xl lg:text-5xl">
          <div
            className="bg-[#f67e7e] mb-8 lg:mb-12 w-12 h-1"
            aria-hidden="true"
          ></div>
          Build & manage distributed teams like no one else.
        </h2>

        {/* Feature boxes */}
        <div className="space-y-12 md:space-y-16 lg:mt-10 lg:w-136">
          {/* Feature 1 */}
          <div className="flex md:flex-row flex-col items-center md:items-start md:pr-4">
            <div
              className="bg-[url('/images/icon-person.svg')] bg-no-repeat bg-center w-20 h-20"
              aria-hidden="true"
            />
            <div className="md:ml-6 md:text-left text-center">
              <h3 className="mt-4 md:mt-0 mb-2 font-bold text-[#f67e7e] text-lg">
                Experienced Individuals
              </h3>
              <p className="text-white/80">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex md:flex-row flex-col items-center md:items-start md:pr-4">
            <div
              className="bg-[url('/images/icon-cog.svg')] bg-no-repeat bg-center w-20 h-20"
              aria-hidden="true"
            />
            <div className="md:ml-6 md:text-left text-center">
              <h3 className="mt-4 md:mt-0 mb-2 font-bold text-[#f67e7e] text-lg">
                Easy to Implement
              </h3>
              <p className="text-white/80">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex md:flex-row flex-col items-center md:items-start md:pr-4">
            <div
              className="bg-[url('/images/icon-chart.svg')] bg-no-repeat bg-center w-20 h-20"
              aria-hidden="true"
            />
            <div className="md:ml-6 md:text-left text-center">
              <h3 className="mt-4 md:mt-0 mb-2 font-bold text-[#f67e7e] text-lg">
                Enhanced Productivity
              </h3>
              <p className="text-white/80">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[#004047] px-6 md:px-24 lg:px-40 py-36 text-center">
        {/* Background patterns */}
        <div
          className="top-0 left-0 absolute bg-[url('/images/bg-pattern-home-4-about-3.svg')] bg-no-repeat w-52 h-52"
          aria-hidden="true"
        />
        <div
          className="right-0 bottom-0 absolute bg-[url('/images/bg-pattern-home-5.svg')] bg-no-repeat w-52 h-52"
          aria-hidden="true"
        />

        {/* Section Heading */}
        <h2 className="mb-16 md:px-12 font-bold text-3xl lg:text-5xl">
          Delivering real results for top companies. Some of our
          <span className="text-[#79c8c7]"> success stories.</span>
        </h2>

        {/* Testimonial Grid */}
        <div className="lg:flex lg:gap-x-6 lg:mt-20">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center mb-9 lg:mb-0">
            <div
              className="bg-[url('/images/icon-quotes.svg')] bg-no-repeat bg-top pt-10"
              aria-hidden="true"
            >
              <p className="mb-5 font-semibold">
                &ldquo;The team perfectly fit the specialized skill set
                required. They focused on the most essential features helping us
                launch the platform eight months faster than planned.&rdquo;
              </p>
            </div>
            <h3 className="font-bold text-[#79c8c7] text-lg">Kady Baker</h3>
            <p className="text-sm italic">Product Manager of Bookmark</p>
            <div className="mt-4">
              <img
                src="/assets/images/avatar-kady.jpg"
                alt="Kady Baker's portrait"
                className="border-[#c4fffe] border-2 rounded-full w-16 h-16"
              />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center mb-9 lg:mb-0">
            <div
              className="bg-[url('/images/icon-quotes.svg')] bg-no-repeat bg-top pt-10"
              aria-hidden="true"
            >
              <p className="mb-5 font-semibold">
                &ldquo;We needed to automate our entire onboarding process. The
                team came in and built out the whole journey. Since going live,
                user retention has gone through the roof!&rdquo;
              </p>
            </div>
            <h3 className="font-bold text-[#79c8c7] text-lg">Aiysha Reese</h3>
            <p className="text-sm italic">Founder of Manage</p>
            <div className="mt-4">
              <img
                src="/assets/images/avatar-aiysha.jpg"
                alt="Aiysha Reese's portrait"
                className="border-[#c4fffe] border-2 rounded-full w-16 h-16"
              />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center">
            <div
              className="bg-[url('/images/icon-quotes.svg')] bg-no-repeat bg-top pt-10"
              aria-hidden="true"
            >
              <p className="mb-5 font-semibold">
                &ldquo;Amazing. Our team helped us build an app that delivered a
                new experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.&rdquo;
              </p>
            </div>
            <h3 className="font-bold text-[#79c8c7] text-lg">Arthur Clarke</h3>
            <p className="text-sm italic">Co-founder of MyPhysio</p>
            <div className="mt-4">
              <img
                src="/assets/images/avatar-arthur.jpg"
                alt="Arthur Clarke's portrait"
                className="border-[#c4fffe] border-2 rounded-full w-16 h-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative md:flex md:justify-around md:items-center bg-[#f67e7e] px-6 lg:px-36 py-20 md:py-0 lg:py-20 md:h-50 overflow-hidden text-center">
        <div
          className="bottom-0 left-0 absolute bg-[url('/images/bg-pattern-home-6-about-5.svg')] bg-no-repeat bg-left-bottom w-52 h-52"
          aria-hidden="true"
        />

        <h2 className="mb-6 md:mb-0 font-bold text-[#012f34] text-3xl lg:text-5xl">
          Ready to get started?
        </h2>

        <Link to="/contact">
          <button className="hover:bg-[#012f34] px-8 py-2 border-[#012f34] border-2 rounded-full font-semibold text-[#012f34] hover:text-white text-lg transition-colors cursor-pointer">
            contact us
          </button>
        </Link>
      </section>
    </div>
  )
}
