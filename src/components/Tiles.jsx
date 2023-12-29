import { ScrollContext } from '@/utils/scroll-observer';
import { useContext, createRef, createContext, useRef } from 'react';


export const TileContext = createContext({
    numPages: 0,
    currentPage: 0
});

////Parallax Effect for Tiles, using all three components here

export const TileWrapper = ({ children, numPages }) => {

    const tileContainerRef = useRef(null);
    const { scrollY } = useContext(ScrollContext)

    let currentPage = 0;


    const { current: elContainer } = tileContainerRef;

    // console.log('elContainer', elContainer);


    if (elContainer) {

        const { clientHeight, offsetTop } = elContainer;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;

        // console.log('clientHeight', clientHeight, 'offsetTop', offsetTop, 'scrollY', scrollY, 'screenH', screenH, 'halfH', halfH);

        //percent of the page scrolled

        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * numPages;

        // console.log('percentY', percentY, 'currentPage', currentPage);

    }


    return (
        <TileContext.Provider value={{ numPages, currentPage }}>
            <div ref={tileContainerRef} className='relative bg-black text-white'
                style={{ height: numPages * 100 + 'vh' }}
            >
                {children}
            </div>
        </TileContext.Provider>
    )
}




export const TileBackground = ({ children }) => {


    return (
        <div className='absolute h-full w-full'>
            {children}
        </div>
    )
}



export const TileContent = ({ children }) => {

    return (
        <div className='sticky top-0 h-[100vh]  overflow-hidden'>
            {children}
        </div>
    )
}



export const Tile = ({ page, renderContent }) => {

    const { currentPage, numPages } = useContext(TileContext);
    // console.log('from context' + 'currentPage', currentPage, 'numPages', numPages);
    const refTile = useRef(null);

    // console.log('refTile', refTile);
    // console.log('page', page, 'currentPage', currentPage, 'numPages', numPages);

    const progress = Math.max(0, currentPage - page)
    // const progress2 = currentPage - page;            //this is the same as above, but the above is better because it doesn't go below 0




    let opacity = Math.min(1, Math.max(0, progress * 4))

    // opacity is very small when progress is small, and increases as progress increases, but it's capped at 1

    if (progress > 0.85 && page < numPages - 1) {
        opacity = Math.max(0, (1 - progress) * 4)
        // 1-progress so that it goes to zero when it reaches the next page, 
        // because progress is >1 when it's on the next page and 1-progress is <0  (1-1.5 = -0.5), hence max is zero, and  therefore opacity is zero
    }




    // console.log('opacity', opacity);





    return (
        <div ref={refTile} className='absolute top-0 w-full' style={{ pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined, opacity }}>
            {renderContent({ progress })}
        </div>

    )


}





