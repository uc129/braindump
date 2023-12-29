import useAnimationFrame from "@/utils/use-animation-frame";

const { useRef, useContext, useCallback } = require("react");
const { SizeContext } = require("@/utils/size-observer");


const SliderContainer = ({ children, initialOffsetX, className, contentWidth }) => {

    const { innerWidth } = useContext(SizeContext);
    const refScrollX = useRef(initialOffsetX)

    const refContainer = useRef(null)
    const refContent = useRef(null)


    const enabled = innerWidth < contentWidth
    // const enabled = true;

    // console.log(enabled);

    useAnimationFrame(enabled, useCallback(() => {

        const { current: container } = refContainer
        const { current: content } = refContent

        if (container && content) {
            refScrollX.current += 0.5;
            container.scrollLeft = refScrollX.current;

            if (container.scrollLeft >= content.clientWidth) {
                refScrollX.current = 0;
                container.scrollLeft = 0;
            }
        }


    }), [enabled])


    return (

        <div ref={refContainer} className={`slider-container flex justify-center items-center w-[100vw] overflow-x-hidden
         whitespace-nowrap max-w-full pointer-events-none ${className}`}>
            <div ref={refContent} className=" inline-block">
                {children}
                <div className={enabled ? 'inline-block' : 'hidden'}>
                    {children}
                </div>
            </div>




        </div>
    )



}


export const SliderItem = ({ children, width }) => {

    return (
        <div className={`inline-flex justify-center items-center mx-4`} style={{ width }}>
            {children}
        </div>
    )

}

export default SliderContainer;