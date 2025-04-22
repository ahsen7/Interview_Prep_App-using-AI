import InterviewCard from '@/components/Cards/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);


const pastInterviews = userInterviews?.length > 0;
const upcomingInterviews = latestInterviews?.length > 0;
return (
  <>
    <section className='card-cta'>
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Elevate Your Interview Skills with MockView</h2>
        <p className='text-lg'>Experience Realistic Interview Scenarios, Receive Instant Feedback, and Build Unmatched Confidence</p>

        <Button
          asChild
          className='btn-primary max-sm:w-full'
        >
          <Link href='/interview'>
            Start an interview
          </Link>
        </Button>
      </div>
      <Image
        src="/robo1.png"
        width={400}
        height={400}
        alt="robot"
        className="max-sm:hidden"
      />

    </section>

    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>

      <div className="interviews-section">
        {
          pastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))) : (
            <p>You have&apos;t taken any interviews</p>
          )}
      </div>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interview</h2>

      <div className='interviews-section'>
        {
          upcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))) : (
            <p>No new interviews available</p>
          )}

      </div>
    </section>

  </>
)
}

export default Page