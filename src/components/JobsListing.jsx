import React from 'react'
import JobCard from './JobCard'
import JobListing from './JobListing'
import Jobs from '../jobs.json'
import ViewAllJobs from './ViewAllJobs'
import { useState,useEffect } from 'react'


const JobsListing = ({all=false}) => {
    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        const fetchJobs=async()=> {
            try {
                const rest=await fetch('http://localhost:8088/jobs');
                const data=await rest.json();
                setJobs(data);
            } catch (error) {
                console.log('Eroor fetching data');
            }
            finally {
                setLoading(false);
            }
        }
    
        fetchJobs();
    
    },[])
    
    const currentJobs=all?jobs:jobs.slice(0,3);
    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {all?'All jobs':'Browse Jobs'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Job Listing 1 --> */}
                        {
                            currentJobs.map((job) => {
                                return (<JobCard key={job.id}>
                                    <JobListing job={job} />
                                </JobCard>)
                            })
                        }
                    </div>
                </div>
            </section>
            <ViewAllJobs />
        </>
    )
}

export default JobsListing