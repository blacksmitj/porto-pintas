import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
    return (
        <header className='sticky top-0 px-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -50,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                className='flex flex-row items-center'
            >
                {/* Social Icons */}
                <SocialIcon
                    url='https://www.instagram.com/my.pintas/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/my.pintas/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/my.pintas/'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 50,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                className='flex flex-row items-center text-gray-400 cursor-pointer'
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get In Touch
                </p>
            </motion.div>
        </header>
    );
}
