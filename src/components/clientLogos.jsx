import SliderContainer, { SliderItem } from "./slider";
import Image from "next/image";
import { CLIENTS } from "@/utils/client_data";


const ClientLogos = () => {

    const numClients = CLIENTS.length;



    return (
        <>
            <SliderContainer className={""} contentWidth={1290} initialOffsetX={0}>
                {CLIENTS.map((client, index) => {
                    if (index < numClients / 2) {
                        return (
                            <SliderItem key={index} width={100}>
                                <Image src={client.logo.src}
                                    width={840} height={1620}
                                    alt={client.name || 'logo'}

                                />
                            </SliderItem>
                        )
                    }
                })}

            </SliderContainer>

            <SliderContainer className={""} contentWidth={1290} initialOffsetX={0}>
                {CLIENTS.map((client, index) => {
                    if (index > numClients / 2) {
                        return (
                            <SliderItem key={index} width={100}>
                                <Image src={client.logo.src}
                                    width={840} height={1620}
                                    alt={client.name || 'logo'}

                                />
                            </SliderItem>
                        )
                    }
                })}

            </SliderContainer>

        </>

    )

}


export default ClientLogos;
