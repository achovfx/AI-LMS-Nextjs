import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const CompanionsCardList = [
  {
    id: 123, name: "Neura the brainy Explore",
    topic: "Neural Network of the Brain",
    subject: "science",
    duration: 45,
    color: "#E5D0FF"
  },
  {
    id: 456, name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    subject: "maths",
    duration: 30,
    color: "#FFDA6E"
  },
  {
    id: 789, name: "Verba the Vocabulary Builder",
    topic: "English Literature ",
    subject: "Language",
    duration: 30,
    color: "#BDE7FF"
  }
]

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        {
          CompanionsCardList.map((item) => (
            <CompanionCard key={item.id} {...item} />
          ))
        }
      </section>
      <section className='home-section'>
        <CompanionsList
          title="Recently completed lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page