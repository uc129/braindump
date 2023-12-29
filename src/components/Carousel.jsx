import { useCallback, useEffect, createContext, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import { Autoplay, ClassNames } from 'embla-carousel-react'
import styles from './carousel.module.css'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'

export const CarouselContext = createContext({
    embla: undefined,
    selectedIndex: -1
})

export const Carousel = ({ children, className }) => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel({

        loop: true,
        align: 'center',
        skipSnapshots: false,
    }, [Autoplay(), ClassNames()])

    // const [emblaRef] = useEmblaCarousel()

    const onSelect = useCallback(() => {

        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())


    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)

    }, [emblaApi, onSelect])


    return (
        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>

            <div ref={viewportRef} className={`w-full overflow-hidden ${className} ${styles.viewport}`}>
                <div className={`{styles.container} flex`}>
                    {children}
                </div>

            </div>


        </CarouselContext.Provider>
    )
}
