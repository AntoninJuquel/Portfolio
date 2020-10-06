import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { FaChevronUp } from 'react-icons/fa';

function ScrollToTop() {
    const { y: pageYOffest } = useWindowScroll()
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(pageYOffest > 10)
    }, [pageYOffest])

    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })


    if (!visibility) {
        return false;
    }

    return (
        <div className='scroll-to-top text-center' onClick={handleClick}>
            <FaChevronUp className='icon' />
        </div>
    )
}

export default ScrollToTop;