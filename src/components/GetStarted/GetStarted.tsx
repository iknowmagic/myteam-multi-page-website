import { Link } from 'react-router-dom'

/**
 * Reusable CTA component that appears at the bottom of multiple pages
 * Converts the GetStarted.vue component from the original Vue.js project
 */
export default function GetStarted() {
  return (
    <section className="relative md:flex md:justify-around md:items-center bg-[#f67e7e] px-6 lg:px-36 py-20 md:py-0 lg:py-20 md:h-50 overflow-hidden text-center">
      {/* Background pattern */}
      <div
        className="bottom-0 left-0 absolute bg-[url('/assets/images/bg-pattern-home-6-about-5.svg')] bg-no-repeat bg-left-bottom w-52 h-52"
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
  )
}
