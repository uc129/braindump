import Member from "@/components/member";
import { MEMBERS_DATA } from "@/utils/members_data";
import { useEffect, useMemo, useState } from "react";

const AboutUs = () => {

    const [members, setMembers] = useState([])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }


    useEffect(() => {
        let members = shuffleArray(MEMBERS_DATA)
        setMembers(members)
    }, [MEMBERS_DATA])




    return (
        <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>

            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong> We will help you design and ship better apps, faster. </strong>
                    Our team of expert engineers have created the best user experience in some of the most popular apps worldwide.
                </p>

            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2> Our Team </h2>
                <div className="mt-2"> the &ldquo;spec-ops&rdquo; </div>  {/* // ldquo = left double quote, rdquo = right double quote */}
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
                    {members.map((member) => (
                        <Member key={member.id} {...member} />
                    ))}
                </div>

            </div>

        </section>
    )


}

export default AboutUs;