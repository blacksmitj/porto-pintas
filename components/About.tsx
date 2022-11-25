import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px]'>About</h3>

            <motion.img
                initial={{
                    x: -200,
                }}
                whileInView={{
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                src='https://placeimg.com/1200/1600/people/grayscale'
            />
        </div>
    );
}
