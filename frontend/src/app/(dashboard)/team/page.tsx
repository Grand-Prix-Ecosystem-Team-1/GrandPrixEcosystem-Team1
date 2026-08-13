import type { Metadata } from 'next'
import {requireAuth} from "@/actions/auth.actions";
import { TeamMember, TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Team Page'
}

const teamMembers: TeamMember[] = [
    {
        name: 'Thierry Keane',
        role: 'UX Expert',
        blurb: 'Designs clear, consistent interfaces and helps translate user needs into developer-ready specification.'
    },
    {
        name: 'Sowndharyaa Ramanathan Manikandan',
        role: 'Project Manager',
        blurb: 'Coordinates the team, manages project progress and ensures tasks are completed on time and aligned with project goals.'
    },
    {
        name: 'Kerry Theodorou',
        role: 'Business Analyst',
        blurb: 'Defines and documents project requirements, communicates stakeholder needs & ensures the solution meets business objectives.'
    },
    {
        name: 'Robert Vo-Ho',
        role: 'Developer',
        blurb: 'Implements, tests and maintains the application, translating requirements and designs into functional software.'
    },
    {
        name: 'Mahmudal Hasan Rafid Khan',
        role: 'Developer',
        blurb: 'Implements, tests and maintains the application, translating requirements and designs into functional software.'
    }
]

export default async function TeamPage() {
    await requireAuth()

    const teamMembersData = teamMembers.filter(
        (member) =>
            member.name ||
            member.photo ||
            member.role ||
            member.blurb
    )

    return (
  <main className="min-h-full bg-[#F0F4F8] px-10 py-8">
    {teamMembersData.length === 0 ? (
      <div className="flex min-h-[calc(100vh-124px)] flex-col items-center justify-center text-[#102a43]">
        <Image
          width={80}
          height={80}
          src="/assets/team/icon.png"
          alt=""
          className="mb-5 h-[80px] w-[80px]"
        />

        <p className="font-space-mono text-[20px] font-bold text-[#486581]">
          No team members found
        </p>

        <p className="mt-2 font-space-mono text-[14px] text-[#486581]">
          Team members will appear here once added.
        </p>
      </div>
    ) : (
      <>
        <h1 className="ml-[90px] mb-8 font-space-mono text-4xl font-bold text-[#102a43]">
          Our Team
        </h1>

        <div className="ml-[90px] mb-8 text-[#102a43]">
          <p className="font-space-mono text-3xl font-bold">
            Meet the people behind Grand Prix Ecosystem Operations.
          </p>
        </div>

        <div className="ml-[90px] mr-[90px] grid grid-cols-4 justify-items-center gap-8">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
            />
          ))}
        </div>
      </>
    )}
  </main>
  )
}