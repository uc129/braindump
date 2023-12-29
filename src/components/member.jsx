import Link from "next/link";
import Image from "next/image";

const Member = ({ id, name, socialId, link }) => {



    return (
        <>
            <div>
                <Image src={`/icons/avatars/margelo_faces_${id}.svg`} alt={name} width={1336} height={1555} />
                <div className="capitalize text-3xl "> {name} </div>
                <div>
                    <Link href={link} target="_blank" className="text-[20px]" > @{socialId} </Link>
                </div>
            </div>


        </>)



}

export default Member;