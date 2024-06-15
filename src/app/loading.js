import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div>
      <Skeleton className="w-full min-h-screen"></Skeleton>
    </div>
  )
}

export default loading
