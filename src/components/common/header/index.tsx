import React from 'react'
import Logo from '@/components/common/logo'
import ProfileCard from '@/components/common/profileCard'

const Header: React.FC = () => {
    return (
        <div className='flex justify-between items-center py-6 md:py-10'>
            <Logo title='Streamify' />
            <div>
                <ProfileCard />
            </div>
        </div>
    )
}

export default Header