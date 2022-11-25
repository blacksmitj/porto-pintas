import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, I am Pintas',
            'Looking for Motion Ads?',
            'Explainer?',
            'Promotion Ads?',
            'Lets do Motion Here',
        ],

        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <motion.img
                src='https://ui-avatars.com/api/?name=John+Doe'
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                alt='Cover'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'>
                    Motion Graphic Designer
                </h2>
                <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5 space-x-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#project'>
                        <button className='heroButton'>Project</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
