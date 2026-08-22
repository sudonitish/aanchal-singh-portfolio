interface IconProps {
  className?: string;
}

export function LinkedInIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <path
        d="M7 9.5H9.6V17H7V9.5ZM8.3 8.4C7.48 8.4 6.9 7.8 6.9 7.05C6.9 6.3 7.5 5.7 8.32 5.7C9.14 5.7 9.7 6.3 9.72 7.05C9.72 7.8 9.14 8.4 8.3 8.4ZM11.1 9.5H13.6V10.6C13.96 10 14.7 9.32 15.9 9.32C17.9 9.32 18.6 10.6 18.6 12.7V17H16V13.2C16 12.1 15.6 11.4 14.7 11.4C14 11.4 13.6 11.9 13.6 12.7V17H11.1V9.5Z"
        fill="white"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 4h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 15v3a2 2 0 0 1-2 2C11.4 20 4 12.6 4 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EnvelopeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowUpRightBigIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResumeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export const iconById: Record<string, (props: IconProps) => ReturnType<typeof LinkedInIcon>> = {
  linkedin: LinkedInIcon,
  phone: PhoneIcon,
  email: EnvelopeIcon,
  visuals: EyeIcon,
  work: ArrowUpRightBigIcon,
  resume: ResumeIcon,
};
