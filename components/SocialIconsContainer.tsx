import { SocialIcon } from 'react-social-icons'

const SocialIcons = () => {
    return (
        <>
            <SocialIcon bgColor='none' fgColor='white' className='ml-4 scale-150' url="https://www.linkedin.com/in/preston-mayieka/" target='_blank' />

            <SocialIcon bgColor='none' fgColor='white' className='ml-4 scale-150' url="https://twitter.com/Preston_Mayieka" target='_blank' />
            <SocialIcon bgColor='none' fgColor='white' className='ml-4 scale-150' url="https://github.com/preston176/" target='_blank' />
            <SocialIcon network='whatsapp' bgColor='none' fgColor='white' className='ml-4 scale-150' url="https://wa.me/254799078848" target='_blank' />
            <SocialIcon bgColor='none' fgColor='white' className='ml-4 scale-150' url="mailto:prestonnyamweya@gmail.com" target='_blank' />
        </>
    )
}

export default SocialIcons