import { User } from 'lucide-react'

export type TeamMember = {
  name?: string
  photo?: string
  role?: string
  blurb?: string
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  // Do not render the card if all information is unavailable
  if (!member.name && !member.photo && !member.role && !member.blurb) {
    return null
  }

  return (
    <div className="h-[390px] w-[280px] overflow-hidden rounded-[12px] border border-[#D9E2EC] bg-white">
      {/* Photo */}
      <div className="flex justify-center">
        <div className="mt-[12px] flex h-[170px] w-[245px] flex-col items-center justify-center rounded-t-[12px] bg-[#F0F4F8]">
      <User
        className="h-[80px] w-[80px] text-[#486581]"
        strokeWidth={1.5}
      />
      <span className="mt-2 font-space-mono text-sm text-[#486581] uppercase font-bold">
        Photo Unavailable
      </span>
    </div>

      </div>

      {/* Information */}
      <div className="p-4">
        {/* Name */}
        <div className="mb-1">
          {member.name ? (
            <h3 className="w-full truncate font-space-mono text-xl font-bold text-[#102a43]">
              {member.name}
            </h3>
          ) : (
            <p className="text-sm text-[#D64545]">
              Name Unavailable
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-1">
          {member.role ? (
            <p className="font-space-mono text-m font-semibold text-[#102a43]">
              {member.role}
            </p>
          ) : (
            <p className="text-m text-[#D64545]">
              Role Unavailable
            </p>
          )}
        </div>

        {/* Blurb */}
        {member.blurb ? (
          <p className="line-clamp-6 text-sm text-black">
            {member.blurb}
          </p>
        ) : (
          <p className="text-sm text-[#D64545]">
            No Description Provided
          </p>
        )}
      </div>
    </div>
  )
}