import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobsListing/>
    {/* <ViewAllJobs/> */}
    </>
)
}

export default HomePage