import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px]'>About</h3>
            <motion.img
                initial={{ x: -200 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0 }}
                // viewport={{
                //     once: true,
                // }}
                src='https://placeimg.com/1200/1600/people/grayscale'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10 sm:py-0'>
                <h4 className='text-4xl font-semibold'>
                    Here is a{' '}
                    <span className='underline decoration-[#f6ab0a]/50'>
                        little
                    </span>{' '}
                    Background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus error aperiam optio necessitatibus. Suscipit cum
                    minima perspiciatis quasi vero hic similique eaque ullam
                    facere debitis natus, eveniet nesciunt sint velit.
                </p>
            </div>
        </motion.div>
    );
}
