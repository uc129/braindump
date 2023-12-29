import React, { createContext, useCallback } from 'react'


export const ScrollContext = createContext({ scrollY: 0 })


const ScrollObserver = ({ children }) => {

    const [scrollY, setScrollY] = React.useState(0)

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    })

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [handleScroll])


    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )






}

export default ScrollObserver

// So, the scroll context is created and is wrapped around the children of the ScrollObserver component.
//  All the children of the ScrollObserver component will have access to the scroll context.
//  The scroll context is created using the createContext hook. 
// The scroll context is then provided to the children using the ScrollContext.Provider component.
//  The value of the scroll context is set to the scrollY state variable. The scrollY state variable is updated using the setScrollY function. 
// The setScrollY function is called in the handleScroll function. The handleScroll function is called when the scroll event is fired. 
// The scroll event is fired when the user scrolls the page. The handleScroll function is added as an event listener to the scroll event using the addEventListener method. 
// The handleScroll function is removed as an event listener to the scroll event using the removeEventListener method. 
// The removeEventListener method is called in the return function of the useEffect hook.
// the removeEventListener method executes after the scroll event is fired.