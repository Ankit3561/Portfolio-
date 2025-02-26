import { MapPin } from 'lucide-react';
import Image from 'next/image';

import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import AnkitHeadshot from '../../utils/images/ankit-headshot.jpg';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={AnkitHeadshot}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Ankit{' '}
              <span className="inline-block animate-waving-hand hover:scale-110">👋</span>

            </Typography>
            <Typography>
              I&apos;m a full-stack developer specializing in <strong>React.js, Node.js, and React Native</strong>,
              with a strong focus on building exceptional digital experiences that are fast, accessible, visually
              appealing, and responsive. With <strong>5+ years of experience</strong>, I’ve developed and designed
              high-performance web and mobile applications, and I still love creating innovative solutions as much
              as I did when I started.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Himachal Pradesh, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
