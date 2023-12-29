import { useContext } from "react"
import { SizeContext } from "@/utils/size-observer";
import ClientLogos from "./clientLogos";
import Testimonials from "./Testimonials";

export const TrustedBy = () => {

    const sizeContext = useContext(SizeContext)

    // console.log(sizeContext);


    return (
        <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 pt-20 lg:pt-40">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl mb-10 font-bold text-center">

                    <p className="whitespace-nowrap"> trusted by </p>
                    <p className="whitespace-nowrap" > some of the apps you use daily
                    </p>

                </h3>


                <ClientLogos />


            </div>
            <div className="flex flex-col justify-center items-center  ">
                <div className="container mx-auto lg:max-w-[70%] lg:px-10">

                    <h3 className="text-3xl lg:text-4xl tracking-tight text-center"> We believe in good communication and fully transparent development process </h3>

                </div>

            </div>


            <div className="flex-1 bg-black text-white">
                <Testimonials />
            </div>
        </section>
    )


}