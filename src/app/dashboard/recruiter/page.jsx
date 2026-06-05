"use client" 
import { useSession } from '@/lib/auth-client'
import React from 'react'
import { Briefcase, Users, CheckCircle, XCircle } from "lucide-react";
import { DashboardStats } from '../DashboardStats';

const RecruiterDashboardPage = () => {

    const {data:session,isPending}=useSession();

    if(isPending){
        return <div>Loading...</div>
    }
    

    const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: <Briefcase size={24}/>, colorClass: "bg-blue-100 text-blue-600" },
    { title: "Total Applicants", value: "1,284", icon: <Users size={24}/>, colorClass: "bg-purple-100 text-purple-600" },
    { title: "Active Jobs", value: "18", icon: <CheckCircle size={24}/>, colorClass: "bg-green-100 text-green-600" },
    { title: "Jobs Closed", value: "32", icon: <XCircle size={24}/>, colorClass: "bg-red-100 text-red-600" },
  ];


    const user=session?.user;
    console.log("sessiondata in recruiterDashboardHomepage:",session,"is pending:",isPending);


  return (
    <div>
      <h2 className='text-4xl font-bold'>Welcome back,{user?.name}</h2>
      <DashboardStats statsData={recruiterStats}/>
    </div>
  )
}

export default RecruiterDashboardPage
