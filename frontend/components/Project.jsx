import { assets, project } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Project = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? project : project.slice(0, 3)

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='project' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo mb-12'>
      My Projects</motion.h2>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        
        {displayedProjects.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className={`rounded-xl overflow-hidden bg-zinc-900 shadow-lg cursor-pointer group mx-auto w-full max-w-sm ${
              displayedProjects.length === 4 && index === 3 ? 'lg:col-start-2' : ''
            }`}>
                
                {/* ✨ TOP: Background Image Section (60% height) */}
                <div 
                    className='h-48 sm:h-56 bg-cover bg-center relative overflow-hidden'
                    style={{
                        backgroundImage: `url(${
                            project.bgImage && isDarkMode
                            ? project.bgImageDark
                            : project.bgImage 
                        })`
                    }}
                >
                    {/* Subtle gradient overlay on image */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20'></div>
                </div>
                
                {/* ✨ BOTTOM: Content Section - Black Box */}
<div className='bg-black p-5 min-h-[200px] flex flex-col justify-between'>
    
    <div>
        {/* Title */}
        <h2 className='font-bold text-xl text-white font-Ovo mb-2'>
            {project.title}
        </h2>
        
        {/* Description - PURA TEXT */}
        <p className='text-sm text-gray-400 leading-relaxed mb-3'>
            {project.description}
        </p>
        
        {/* Tech Stack Badges */}
        {project.techStack && project.techStack.length > 0 && (
            <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech, i) => (
                    <span 
                        key={i} 
                        className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium hover:bg-blue-500 transition-colors'
                    >
                        {tech}
                    </span>
                ))}
            </div>
        )}
    </div>
    
    {/* Links - HAMESHA NICHE */}
    <div className='flex justify-between items-center gap-5 mt-4'>
        {project.githubLink && (
            <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors'
                onClick={(e) => e.stopPropagation()}
            >
                GitHub ↗
            </a>
        )}
        {project.liveLink && (
            <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-green-400 hover:text-green-300 text-sm font-semibold flex items-center gap-1 transition-colors'
                onClick={(e) => e.stopPropagation()}
            >
                Live Demo ↗
            </a>
        )}
    </div>
</div>
                
            </motion.div>
        ))}
    </motion.div>

    {project.length > 3 && (
      <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      onClick={() => setShowAll(!showAll)}
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer'>
          
          {showAll ? 'Show less' : 'Show more'}
          
          <motion.div
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
              alt='Right arrow' 
              className='w-4'
            />
          </motion.div>
      </motion.button>
    )}

    </motion.div>
  )
}

export default Project