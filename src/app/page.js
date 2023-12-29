'use client';

import { useEffect } from 'react'
import Masthead from '@/components/mastHead';
import AboutUs from './about';
import ScrollObserver from '@/utils/scroll-observer';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import { TrustedBy } from '@/components/TrustedBy';
import { SizeObserver } from '@/utils/size-observer';
import ContactUs from '@/components/contactUs';
import Footer from '@/components/Footer';






export default function Home() {
  useEffect(() => {
    const video = document.querySelector('#masthead-video')
    video && (video.playbackRate = 2)

    window.addEventListener("keypress", function (e) {
      // console.log("video playback rate set to ", video.playbackRate);

      if (e.key === "d") video.playbackRate += .1;
      else if (e.key === "a") video.playbackRate -= .1;
      if (video && video.playbackRate >= 15.9) video.playbackRate = 15.9;
      if (video && video.playbackRate <= 0.1) video.playbackRate = 0.1;

    }, false);
  }, [])

  return (
    <SizeObserver>
      <ScrollObserver>
        <main className="h-full flex flex-col justify-between">
          <Masthead />
          <AboutUs />
          <Skills />
          <Works />
          <TrustedBy />
          <ContactUs />
          <Footer />
        </main >
      </ScrollObserver>
    </SizeObserver>


  )
}
