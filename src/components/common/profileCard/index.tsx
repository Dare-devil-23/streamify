import React from 'react'
import { user } from '@/data'
import { DownArrowIcon } from '@/icons'

const ProfileCard: React.FC = () => {

    return (
        <div className='bg-zinc-900 cursor-pointer rounded-full flex gap-4 items-center md:pr-4'>
            <div>
                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className='rounded-full w-10 h-10 md:w-12 md:h-12'
                />
            </div>
            <div className='hidden md:block'>
                <div className='text-regular'>
                    {user.fullName}
                </div>
                <div className='text-tiny opacity-60'>
                    {user.email}
                </div>

            </div>
            <div className='hidden md:block'>
                <DownArrowIcon className='w-5 h-5 text-zinc-600' />
            </div>
        </div>
    )
}

export default ProfileCard