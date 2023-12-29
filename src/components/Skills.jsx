import { ScrollContext } from "@/utils/scroll-observer";
import { useContext, useEffect, useMemo, useRef, useState } from "react";

const blockOpacity = (sectionScrollProgress, blockNum) => {
    const progress = sectionScrollProgress - (blockNum);
    if (progress >= 0 && progress < 1) return 1;
    else if (progress > 1) return 1;
    else return 0.2;
}


const Skills = () => {

    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef(null);

    const numPages = 3;
    let progress = 0;



    const { current: elContainer } = refContainer;

    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer;
        const screenHeight = window.innerHeight;
        const halfH = clientHeight / 2;
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenHeight, scrollY - offsetTop) + halfH) / clientHeight
        progress = percentY * numPages;
    }

    useEffect(() => {
        if (progress > 0 && progress < 1) document.getElementById('page1').style.opacity = 1
        else document.getElementById('page1').style.opacity = 0.5

        if (progress > 1 && progress < 2) document.getElementById('page2').style.opacity = 1
        else document.getElementById('page2').style.opacity = 0.5

        if (progress > 2 && progress < 3) document.getElementById('page3').style.opacity = 1
        else document.getElementById('page3').style.opacity = 0.5
    }, [progress])




    return (
        <div className="bg-black text-white" ref={refContainer}>
            <div className="min-h-screen max-w-5xl mx-auto my-20 px-10 lg:px-20 lg:py-36 flex-col justify-center text-4xl md:text-6xl lg:text-7xl font-semibold">

                <div id='page1' className={`skillsText leading-[1.15] inline-block after:content-['_'] `}> We know our tools inside out.</div>
                <span id='page2' className={`skillsText `} > Our team has contributed {123} commits to React Native core, powering thousands of apps worldwide.</span>
                <span id='page3' className={`skillsText`}> We&apos;re maintaining some of the most popular open-source projects, with over {1234} downloads. </span>

            </div>
        </div>
    )
}

export default Skills;