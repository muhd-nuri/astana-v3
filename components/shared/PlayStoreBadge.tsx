"use client";

interface PlayStoreBadgeProps {
  href: string;
}

export function PlayStoreBadge({ href }: PlayStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className="group inline-flex h-[3.25rem] items-center gap-3 rounded-[0.7rem] bg-[#1a1a1a] px-5 transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.8 1.8L11.6 11L0.8 22.2V1.8Z" fill="url(#ps-a)" />
        <path d="M0.8 1.8L11.6 11L15.4 8.4L3.8 1.2L0.8 1.8Z" fill="url(#ps-b)" />
        <path d="M15.4 8.4L18.8 10L15.4 11.6L11.6 11L15.4 8.4Z" fill="url(#ps-c)" />
        <path d="M0.8 22.2L3.8 22.8L15.4 15.6L11.6 11L0.8 22.2Z" fill="url(#ps-d)" />
        <defs>
          <linearGradient id="ps-a" x1="0.8" y1="12" x2="11.6" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#0060D6" />
          </linearGradient>
          <linearGradient id="ps-b" x1="0.8" y1="1.8" x2="15.4" y2="8.4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD400" />
            <stop offset="1" stopColor="#FF9500" />
          </linearGradient>
          <linearGradient id="ps-c" x1="11.6" y1="10" x2="18.8" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4E28" />
            <stop offset="1" stopColor="#FF0000" />
          </linearGradient>
          <linearGradient id="ps-d" x1="0.8" y1="22.2" x2="15.4" y2="15.6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00CF55" />
            <stop offset="1" stopColor="#00AE44" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col gap-[1px] leading-none">
        <span className="text-[8px] font-normal uppercase tracking-[0.15em] text-white/70">
          Get it on
        </span>
        <span className="text-[1.25rem] font-medium tracking-tight text-white">
          Google Play
        </span>
      </div>
    </a>
  );
}
