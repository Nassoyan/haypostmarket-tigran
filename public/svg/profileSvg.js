import * as React from "react"

function ProfileSvg() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx={10}
        cy={5}
        r={4.25}
        stroke="#5F6D7C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19.25H1.784a8.251 8.251 0 0116.432 0H10z"
        stroke="#5F6D7C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ProfileSvg