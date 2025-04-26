import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

type MobileMenuProps = {
  isVisible: boolean
  onClose: () => void
}

/**
 * Mobile menu component integrated into layout
 */
function MobileMenu({ isVisible, onClose }: MobileMenuProps) {
  if (!isVisible) return null

  return (
    <div className="z-50 fixed inset-0">
      {/* Backdrop */}
      <div
        className="z-40 fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Menu panel */}
      <div
        className="top-0 right-0 z-50 fixed bg-[#2c6269] w-64 h-full animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Close menu"
          >
            <img src="/images/icon-close.svg" alt="Close" />
          </button>
        </div>

        <nav className="flex flex-col px-12 py-4 font-semibold text-lg">
          <Link
            to="/"
            className="mb-7 hover:text-[#f67e7e] transition-colors"
            onClick={onClose}
          >
            home
          </Link>
          <Link
            to="/about"
            className="mb-7 hover:text-[#f67e7e] transition-colors"
            onClick={onClose}
          >
            about
          </Link>
          <Link to="/contact" onClick={onClose}>
            <button className="hover:bg-white mt-2 px-8 py-2 border-2 border-white rounded-full font-semibold hover:text-[#002529] text-lg transition-all cursor-pointer btn">
              contact us
            </button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

/**
 * Main layout component with header, footer, and navigation
 */
export default function MainLayout() {
  const [menuVisible, setMenuVisible] = useState(false)
  const location = useLocation()

  // Close mobile menu on route changes
  useEffect(() => {
    setMenuVisible(false)
  }, [location])

  return (
    <div className="flex flex-col bg-[#014e56] min-h-screen font-['Livvic'] text-white">
      {/* Header */}
      <header className="flex justify-between md:justify-start items-center px-6 md:px-10 lg:px-40 py-12 md:py-16 lg:py-18">
        <Link
          to="/"
          className="w-32 lg:w-40 h-8 lg:h-10"
          aria-label="MyTeam - Home"
        >
          <img src="/images/logo.svg" alt="MyTeam logo" />
        </Link>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuVisible(true)}
          aria-label="Open menu"
          aria-expanded={menuVisible}
        >
          <img src="/images/icon-hamburger.svg" alt="Menu" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:ml-12 lg:ml-20">
          <Link
            to="/"
            className="mr-10 font-semibold hover:text-[#f67e7e] text-lg transition-colors"
          >
            home
          </Link>
          <Link
            to="/about"
            className="font-semibold hover:text-[#f67e7e] text-lg transition-colors"
          >
            about
          </Link>
        </nav>

        {/* Contact button - desktop only */}
        <div className="hidden md:block ml-auto">
          <Link to="/contact">
            <button className="hover:bg-white px-8 py-2 border-2 border-white rounded-full font-semibold hover:text-[#002529] text-lg transition-all cursor-pointer">
              contact us
            </button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow mt-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#002529] px-6 md:px-10 lg:px-40 py-16 font-semibold text-white md:text-left text-center">
        <div className="flex md:flex-row flex-col md:justify-between">
          {/* Footer logo and links */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/logo.svg"
              alt="MyTeam logo"
              className="h-6 lg:h-10"
            />

            <div className="flex mt-4 md:mt-6">
              <Link
                to="/"
                className="md:mr-6 lg:mr-10 px-3 md:px-0 hover:text-[#f67e7e] transition-colors"
              >
                home
              </Link>
              <Link
                to="/about"
                className="px-3 md:px-0 hover:text-[#f67e7e] transition-colors"
              >
                about
              </Link>
            </div>
          </div>

          {/* Address */}
          <address className="mt-10 md:mt-0 text-white/60 md:text-right not-italic">
            987 Hillcrest Lane
            <br />
            Irvine, CA
            <br />
            California 92714
            <br />
            Call Us : 949-833-7432
          </address>
        </div>

        {/* Social links and copyright */}
        <div className="flex md:flex-row flex-col md:justify-between mt-10 md:mt-6">
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="hover:opacity-70 mx-2 transition-opacity cursor-pointer"
              aria-label="Facebook"
            >
              <img src="/images/icon-facebook.svg" alt="Facebook" />
            </a>
            <a
              href="#"
              className="hover:opacity-70 mx-2 transition-opacity cursor-pointer"
              aria-label="Pinterest"
            >
              <img src="/images/icon-pinterest.svg" alt="Pinterest" />
            </a>
            <a
              href="#"
              className="hover:opacity-70 mx-2 transition-opacity cursor-pointer"
              aria-label="Twitter"
            >
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-white/60">
            Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile menu */}
      <MobileMenu
        isVisible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </div>
  )
}
