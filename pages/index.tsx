import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
    return (
        <div className='bg-[rgb(23,22,32)] text-slate-300 h-screen  overflow-scroll z-0'>
            <Head>
                <title>Pintas Portofolio</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Hero */}
            <section id='hero' className='snap-start'>
                <Hero />
            </section>

            {/* About */}
            <section id='about' className='snap-center'>
                <About />
            </section>

            {/* Experience */}
            <section id='experience' className='snap-center'>
                <WorkExperience />
            </section>

            {/* Skils */}
            {/* Project */}
            {/* Contact Me */}
        </div>
    );
}
