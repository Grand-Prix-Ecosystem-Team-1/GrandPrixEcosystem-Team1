import Image from 'next/image'

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
    <div className="h-[390px] w-[280px] overflow-hidden rounded-[12px] border border-[#7892ad] bg-white">
      {/* Photo */}
      <div className="flex justify-center">
          <Image
            width={245}
            height={170}
            src={member.photo || '/assets/team/placeholder.png'} 
            alt={member.name || 'Team member'}
            className="mt-[17.5px] h-[170px] w-[245px] rounded-t-[12px] object-cover"
          />
      </div>

      {/* Information */}
      <div className="p-5">
        {/* Name */}
        <div className="mb-1">
          {member.name ? (
            <h3 className="w-full truncate font-mono text-xl font-bold text-[#102a43]">
              {member.name}
            </h3>
          ) : (
            <p className="text-sm text-red-500">
              Name Unavailable
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-1">
          {member.role ? (
            <p className="font-mono text-m font-semibold text-[#102a43]">
              {member.role}
            </p>
          ) : (
            <p className="text-m text-red-500">
              Role Unavailable
            </p>
          )}
        </div>

        {/* Blurb */}
        {member.blurb ? (
          <p className="text-sm text-black">
            {member.blurb}
          </p>
        ) : (
          <p className="text-sm text-red-500">
            No Description Provided
          </p>
        )}
      </div>
    </div>
  )
}