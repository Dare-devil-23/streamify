import React from 'react'
import ProfileCard from '@/components/common/profileCard'
// import Theme from '@/components/common/theme'

type Props = {}

const Header: React.FC<Props> = (props: Props) => {
    return (
        <div className='flex justify-between items-center py-6 md:py-10'>
            <div className='text-xl md:text-2xl font-semibold font-prata'>
                Streamify
            </div>
            <div className='flex gap-5 items-center'>
                <div>
                    {/* <Theme /> */}
                </div>
                <div>
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default Header