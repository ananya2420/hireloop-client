import { requireRole } from '@/lib/core/session';
import React from 'react'

const layout =async ({children}) => {
    await requireRole('recruiter')
  return children;
}

export default layout