
import { ScrollContext } from "@/utils/scroll-observer";
import Image from "next/image";
import { useContext, useRef, useState } from "react";




const Masthead = () => {

    const refContainer = useRef(null);

    const { scrollY } = useContext(ScrollContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    }



    const { current: elContainer } = refContainer;  // rename refContainer.current to elContainer



    let progress = 0;

    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);  // calculate progress of scroll in terms of percentage of height of container between 0 and 1
    }



    return (
        <div id='masthead-container'
            ref={refContainer}
            className="min-h-screen flex flex-col items-center justify-center 
             sticky 
             top-0 
             -z-10
            "
            style={{ transform: `translateY(-${progress * 20}vh)` }}

        >

            <video
                // onloadstart="this.playbackRate = 0.25;"
                id="masthead-video"
                autoPlay loop muted playsInline
                poster="/images/wave.jpeg"
                preload="auto"
                className="absolute top-0 
                h-[100vh] w-[100vw]
                opacity-50
                

                object-cover"

            >
                <source
                    src={"/videos/Kanagawa_Wave.mp4"} type="video/mp4" />
                {/* Add unmute button at top of page */}
                <span> Unable to play video!!</span>
            </video>


            <div className="flex-grow-0 pt-10 transition-opacity duration-1000 z-40 absolute top-0 left-10 ">

                <Image
                    className={`cover rounded-[20%] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] transition-all duration-1000  ${imageLoaded ? 'opacity-100' : 'opacity-0'} `}
                    src="/images/logo.png"
                    loading={"lazy"}
                    width={80}
                    height={80}
                    alt="logo"
                />

            </div>

            <div className="p-12 font-bold z-10 text-white 
            drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center
            flex flex-1 items-center justify-center flex-col"
            >
                <h1 className="mb-6 text-4xl xl:text-5xl"> BrainDump</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight ">
                    <span> App Development,</span> <span> done right.</span>
                </h2>

            </div>

            <div className={`z-10 absolute bottom-0  flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <Image alt='scroll-down-indicator'
                    onLoad={handleImageLoaded}
                    className="cover rounded-[20%]"
                    src={'/icons/arrow_down.svg'}
                    height={188} width={105}

                />
            </div>

        </div>
    )
}

export default Masthead;