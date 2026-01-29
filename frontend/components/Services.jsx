import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My Services</motion.h2>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-auto gap-6 my-12'>
            {serviceData.map(({title, description}, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white '>
                    <h3 className='text-lg font-semibold my-3 text-gray-900 dark:text-white '>{title}</h3>
                    <p className='text-sm text-gray-600 leading-relaxed dark:text-white/80'>
                        {description}
                    </p>
                
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services
