import { useState } from 'react'

interface MeetBoxProps {
  avatar: string
  avatarName: string
  avatarTitle: string
  quote: string
}

/**
 * MeetBox component that displays team member cards with expandable details
 * Converts the MeetBox.vue component from the original Vue.js project
 */
export default function MeetBox({
  avatar,
  avatarName,
  avatarTitle,
  quote,
}: MeetBoxProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative flex flex-col items-center p-6 pb-14 ${
        expanded ? 'bg-[#002529]' : 'bg-[#012f34]'
      } transition-colors duration-500`}
    >
      {/* Avatar image - only shown when not expanded */}
      {!expanded && (
        <div className="mb-4">
          <img
            src={avatar}
            alt={avatarName}
            className="border-[#c4fffe] border-2 rounded-full w-24 h-24"
          />
        </div>
      )}

      {/* Name is always shown */}
      <div className="font-bold text-[#79c8c7] text-lg">{avatarName}</div>

      {/* Content changes based on expanded state */}
      {!expanded ? (
        <div className="mt-1 font-medium text-sm italic">{avatarTitle}</div>
      ) : (
        <>
          <div className="mt-4 mb-6">&ldquo;{quote}&rdquo;</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </>
      )}

      {/* Toggle button */}
      <div
        className={`absolute -bottom-7 w-14 h-14 flex items-center justify-center cursor-pointer rounded-full ${
          expanded
            ? 'bg-[#79c8c7] hover:bg-[#f67e7e]'
            : 'bg-[#f67e7e] hover:bg-[#79c8c7]'
        } transition-colors`}
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Close details' : 'Show more'}
      >
        <img
          src={
            expanded
              ? '/assets/images/icon-close-2.svg'
              : '/assets/images/icon-cross.svg'
          }
          alt={expanded ? 'close' : 'more'}
        />
      </div>
    </div>
  )
}
