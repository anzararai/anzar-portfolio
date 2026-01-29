import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import TypeWriter from '@/components/TypeWriter';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-8'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo'>
            Hi! I'm Anzar Arai <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
    <motion.h1 
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}}
    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
         <TypeWriter 
        words={[
            'Full-Stack Web',
            'MERN Stack',
            'React & Next.js',
        ]}
        typingSpeed={100}      // Typing kitni tez (ms)
        deletingSpeed={50}     // Deleting kitni tez (ms)
        delayBetweenWords={3000} // Pura word dikhne ke baad kitni der wait (ms)
    />
        <div className='font-Ovo'> based in <span className="font-medium font-Ovo bg-gradient-to-b from-orange-500 via-gray-100 to-green-600 bg-clip-text text-transparent">
    India.
    
</span></div></motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        I build modern web applications using the MERN stack – React, Next.js, Node.js, and MongoDB. From responsive frontends to robust backends, I create complete solutions that are fast, clean, and user-focused.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Let's Talk<Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/Resume_Anzar_Arai.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                Download Resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header