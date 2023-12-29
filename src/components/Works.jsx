import { TileBackground, TileContent, TileWrapper, Tile } from "./Tiles";
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./Work";
import Image from "next/image";
const Works = () => {


    //     {/* progress is passed from child component to parent component using a method called renderContent.
    // This method is passed as a prop to the child component, and the child component calls it with the progress value. */}




    return (

        <TileWrapper numPages={4}>

            <TileBackground>
                <WorkBackground />
            </TileBackground>


            <TileContent>


                <Tile page={0} renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div> We designed and developed</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight"> <WorkLink href={'https://google.com/'}> Stori&apos;s </WorkLink> face filters. </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <div className="iphone-video ">
                                <video width={'370px'} autoPlay muted loop>
                                    <source src="/videos/stori.mp4" type="video/mp4" />
                                </video>
                                <Image className="iphone-bezels" width={440} height={440} src='/images/iphone-bezels.webp' alt={'client'} />
                            </div>



                        </WorkRight>
                    </WorkContainer>
                )} />


                <Tile page={1} renderContent={({ progress }) => (<WorkContainer>
                    <WorkLeft progress={progress}>
                        <div> We made </div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">  <WorkLink href={'/coinbase'}> Coinbase Wallet </WorkLink>  faster </div>

                    </WorkLeft>

                    <WorkRight progress={progress}>
                        <div className="iphone-video">
                            <video width={'370px'} autoPlay muted loop>
                                <source src="/videos/coinbase-wallet.mp4" type="video/mp4" />
                            </video>
                            <Image className="iphone-bezels" src={'/images/iphone-bezels.webp'} width={440} height={440} alt='pink-panda' />
                        </div>

                    </WorkRight>

                </WorkContainer>

                )} />

                <Tile page={2} renderContent={({ progress }) => (<WorkContainer>
                    <WorkLeft progress={progress}>
                        <div> We made </div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight">  <WorkLink href={'/pinkpanda'}> PinkPanda&apos;s </WorkLink>   app </div>

                    </WorkLeft>

                    <WorkRight progress={progress}>

                        <img src={'/images/pinkpanda.webp'} alt='pink-panda' />

                    </WorkRight>
                </WorkContainer>)} />

                <Tile page={3} renderContent={({ progress }) => (<WorkContainer>
                    <WorkLeft progress={progress}>
                        <div> We helped </div>
                        <div className="text-4xl md:text-5xl font-semibold tracking-tight"> <WorkLink href={'/stori'}> Showtime </WorkLink>  ship faster </div>

                    </WorkLeft>

                    <WorkRight progress={progress}>
                        <img src={'/images/showtime.webp'} width={1040} alt='pink-panda' />
                    </WorkRight>
                </WorkContainer>

                )} />

            </TileContent>

            {/* <TileContent>
                <Tile page={1} renderContent={({ progress }) => (<span> Bar{progress}</span>)} />
            </TileContent>

            <TileContent>
                <Tile page={2} renderContent={({ progress }) => (<span> FBaz {progress}</span>)} />
            </TileContent> */}



        </TileWrapper>
    )


}


export default Works;