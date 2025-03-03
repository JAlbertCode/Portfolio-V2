'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SkillsFilter from '../components/filters/SkillsFilter'
import ProjectCard from '../components/ProjectCard'
import { projects, getAllSkills, filterProjects } from '../lib/projectsData'

export default function Home() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const allSkills = getAllSkills()

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const filteredProjects = filterProjects(projects, selectedSkills)

  return (
    <div className="mx-10 max-w-6xl w-full mb-20">
      <h1>Jonathan Albert&apos;s Portfolio</h1>
      <p>
        I am a futurist, reverse engineering the products and services of
        tomorrow today. Turning visions into projects, projects into milestones,
        and milestones into tasks providing software development teams with
        roadmaps to the future. Over a decade of experience gathering
        requirements, rapid prototyping, managing, and coordinating
        cross-functional teams in both start-up and global operations. Boundless
        curiosity has led to work with organizations focused on blockchains,
        gaming, consulting, augmented reality, finance, politics, and language
        learning. Intent on bridging the gap between the future and today,
        confronting any challenge that gets in the way.{' '}
      </p>
      <br />
      <p>
        Want to know me on a more personal level? View my Alva Labs test results
      </p>

      <div className="flex gap-2">
        <div className="links">
          <Link
            target="_blank"
            href="/documents/Jonathan_ALbert_Personality_Test_Five_Factor_Personality_Theory.pdf"
          >
            Personality Profile
          </Link>
        </div>
        <div className="links">
          <Link
            target="_blank"
            href="/documents/Jonathan_Albert_Logical_Ability.pdf"
          >
            Logical Ability
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link
          target="_blank"
          href="/documents/Jonathan_Albert_Resume.pdf"
          className="linked-image"
        >
          <Image src="/images/resume.png" width="72" height="72" alt="resume" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/jonathan-albert-profile/"
          className="linked-image"
        >
          <Image
            src="/images/linkedin.png"
            width="72"
            height="72"
            alt="linkedin"
          />
        </Link>
        <Link
          target="_blank"
          href="mailto: JonathanAlbert0115@gmail.com"
          className="linked-image"
        >
          <Image src="/images/email.png" width="72" height="72" alt="email" />
        </Link>
        <Link
          target="_blank"
          href="https://t.me/Jay_Albert"
          className="linked-image"
        >
          <Image
            src="/images/telegram.png"
            width="72"
            height="72"
            alt="telegram"
          />
        </Link>
        <Link
          target="_blank"
          href="https://discordapp.com/users/649469511749337089"
          className="linked-image"
        >
          <Image
            src="/images/discord.png"
            width="72"
            height="72"
            alt="discord"
          />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/JAlbertCode"
          className="linked-image"
        >
          <Image src="/images/github.png" width="72" height="72" alt="github" />
        </Link>
        <Link
          target="_blank"
          href="https://jonathan-albert.medium.com/"
          className="linked-image"
        >
          <Image src="/images/medium.png" width="72" height="72" alt="medium" />
        </Link>
        <Link
          target="_blank"
          href="https://mirror.xyz/jay-albert.eth"
          className="linked-image"
        >
          <Image src="/images/mirror.png" width="72" height="72" alt="mirror" />
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/Jay_Albert_"
          className="linked-image"
        >
          <Image
            src="/images/twitter.png"
            width="72"
            height="72"
            alt="twitter"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@jay_albert_?_t=8gYzNbPEty6&_r=1"
          className="linked-image"
        >
          <Image src="/images/tiktok.png" width="72" height="72" alt="tiktok" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/jonathanalbert0115/"
          className="linked-image"
        >
          <Image
            src="/images/instagram.png"
            width="72"
            height="72"
            alt="instagram"
          />
        </Link>
      </div>

      <SkillsFilter
        skills={allSkills}
        selectedSkills={selectedSkills}
        onSkillClick={handleSkillClick}
      />

      <div
        id="cards"
        className="flex flex-wrap gap-10 mt-10 place-content-center"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
