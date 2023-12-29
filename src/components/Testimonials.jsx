import { Carousel } from "./Carousel"
import CarouselItem from "./CarouselItem"
import Review from "./Review"


const Testimonials = () => {

    return (
        <Carousel className={'bg-black text-white  py-10 lg:py-20'} >
            <CarouselItem index={0}>
                <Review author={'Utkarsh Chaudhary (Showtime)'}>
                    Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.

                </Review>
            </CarouselItem>

            <CarouselItem index={1}>
                <Review author={'Utkarsh Chaudhary (Showtime)'}>
                    The output of Margelo is unlike any other team we've worked with. Their speed, professionalism and familiarity with all things mobile helped turn Steakwallet into the slick application it is known as today.
                </Review>
            </CarouselItem>


            <CarouselItem index={2}>
                <Review author={'Utkarsh Chaudhary (Showtime)'}>
                    When we first found Margelo they seemed too good to be true. Professional, fast and ridiculously talented; the 3D AR Filter component they have developed for our React Native app is super smooth and responsive.
                </Review>
            </CarouselItem>


            <CarouselItem index={3}>
                <Review author={'Utkarsh Chaudhary (Showtime)'}>
                    Margelo is a collection of world class talent, from React Native to website, full stack to design - I've been nothing but pleased with their communication, imagination, insight and delivery.

                </Review>
            </CarouselItem>

            <CarouselItem index={3}>
                <Review author={'Utkarsh Chaudhary (Showtime)'}>
                    We were hitting the inevitable pains of rapid growth and needed to level up our app quickly. What would have taken us months took the Margelo team mere days. There is nothing they can't figure out or make happen. Simply the best.

                </Review>
            </CarouselItem>
        </Carousel>
    )


}

export default Testimonials