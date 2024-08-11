'use client'
import { useRouter } from "next/navigation"

const Close = () => {
    const router = useRouter()
  return (
    <div>
      <p className="text-white cursor-pointer" onClick={() => router.back()}>X</p>
    </div>
  )
}

export default Close
