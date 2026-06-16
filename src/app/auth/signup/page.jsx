import SignupPage from '@/components/SignupPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
        <SignupPage />
    </Suspense>
  )
}

export default page