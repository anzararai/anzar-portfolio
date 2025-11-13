// components/TypeWriter.jsx
import { useState, useEffect } from 'react';

const TypeWriter = ({ words, typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 2000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('frontend web');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // TYPING MODE
                if (currentText.length < currentWord.length) {
                    // Ek character add karo
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    // Pura word type ho gaya, ab wait karo phir delete karo
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            } else {
                // DELETING MODE
                if (currentText.length > 0) {
                    // Ek character delete karo
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // Pura delete ho gaya, next word pe jao
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className='inline-block min-w-[300px] text-left font-Ovo'>
            {currentText} Developer
            {/* <span className='animate-pulse text-orange-500'>|</span> */}
             
        </span>
    );
};

export default TypeWriter;