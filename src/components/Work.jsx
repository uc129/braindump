import Link from "next/link"

export const WorkContainer = ({ children }) => {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[100vh]  ">
            {children}
        </div>
    )

}


export const WorkBackground = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full  min-h-[100vh]  lg:h-[400vh] top-0 sticky">

            <div className="bg-black ">


            </div>

            <div className="bg-white text-black max-[1024px]:hidden   lg:block">

            </div>


        </div>
        // <></>
    )

}


export const WorkLeft = ({ children, progress }) => {

    let translateY = Math.max(0, 50 - progress * 3 * 50)

    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)


    return (
        <div className=" flex flex-col items-center justify-center 
            text-3xl lg:text-3xl "
            style={{ transform: `translateY(${translateY}px)` }}
        >

            <div className="leading-10">
                {children}
            </div>

        </div>
    )
}


export const WorkRight = ({ children, progress }) => {

    let translateY = Math.max(-50, -(progress - 0.5) * 50)

    return (
        <div className="flex flex-1 lg:items-center justify-center "
            style={{ transform: `translateY(${translateY}px)` }}
        >
            <div className="w-full max-w-lg pt-10  lg:pt-0 px-10 md:px:0">
                {children}
            </div>
        </div>
    )

}


export const WorkLink = ({ href, children }) => {

    return (
        <Link href={href} target="_blank" rel="noreferrer" className="underline underline-offset-8 decoration-1">
            {children}
        </Link>
    )

}