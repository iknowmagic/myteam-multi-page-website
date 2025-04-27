import { Link } from 'react-router-dom'

interface MobileMenuProps {
  isVisible: boolean
  onClose: () => void
}

/**
 * Mobile menu component that appears on small screens
 */
export default function MobileMenu({ isVisible, onClose }: MobileMenuProps) {
  if (!isVisible) return null

  return (
    <div className="mobile-menu-container">
      {/* Backdrop - covers the entire screen and closes menu when clicked */}
      <div
        className="z-40 fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Mobile menu panel */}
      <div
        className="top-0 right-0 z-50 fixed bg-[#2c6269] w-64 h-full animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Menu header with close button */}
        <div className="flex justify-end p-6">
          <button
            className="cursor-pointer"
            onClick={onClose}
            aria-label="Close menu"
          >
            <img src="/images/icon-close.svg" alt="Close" />
          </button>
        </div>

        {/* Menu links */}
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
            <button className="hover:bg-white mt-2 px-8 py-2 border-2 border-white rounded-full font-semibold hover:text-[#002529] text-lg transition-all cursor-pointer">
              contact us
            </button>
          </Link>
        </nav>
      </div>
    </div>
  )
}
