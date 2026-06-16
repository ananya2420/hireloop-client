import SigninPage from '@/components/SigninPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
        <SigninPage />
    </Suspense>
  )
}

export default page