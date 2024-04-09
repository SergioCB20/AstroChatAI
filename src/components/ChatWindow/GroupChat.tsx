import React from 'react'
import { User,Chat } from '../../types/types'
export default function GroupChat({chat}:{chat:Chat}) {
  return (
    <div className="w-full h-[15%] border-b-2 border-gray-300">
      {chat.id}
    </div>
  )
}
