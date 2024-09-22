import React from 'react'
import ProfileCard from '@/components/common/profileCard'

const Header: React.FC = () => {
    return (
        <div className='flex justify-between items-center py-6 md:py-10'>
            <div className='text-xl md:text-2xl font-semibold font-prata'>
                Streamify
            </div>
            <div>
                <ProfileCard />
            </div>
        </div>
    )
}

export default Header