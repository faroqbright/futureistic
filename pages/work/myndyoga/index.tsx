import Banner from "@/components/Work/Main/Banner";
import Bauhashero from "@/components/Work/Main/BauhasHero";
import Content from "@/components/Work/Main/Content";
import HeroImgText from "@/components/Work/Main/HeroImgText";
import ImageTextOverlay from "@/components/Work/Main/ImageTextOverlay";
import MainHeading from "@/components/Work/Main/MainHeading";
import WelcomeNote from "@/components/Work/Main/WelcomeNote";
import Image from "next/image";
import React from "react";
import IphoneFrame from "../base/IphoneFrame";
import Projects from "@/components/Work/Main/Projects";
import Footer from "@/components/Footer/Footer";
import { Logo } from "@/components/Svg/Svg";
import ImagesSection from "@/components/Work/Main/ImagesSection";

const Myndyoga = () => {
  return (
    <>
      <div className="w-full container mx-auto mb-20">
        <Bauhashero
          textClassName="lg:text-[190px] text-[75px] "
          text="Myndyoga"
        />
        <MainHeading
          mainText="Welcome to Everphone, 
        the ultimate destination for anyone looking for stunning and high-quality Bauhaus wallpaper. The website has been designed to provide a seamless and enjoyable shopping experience."
        />

        {/* Text With Right Image */}
        <div className="grid gap-3 w-full break-words lg:pt-28 max-sm:pt-20 grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
          <div className="flex flex-col text-xl lg:text-4xl col-span-1 lg:pl-28 gap-10">
            <div className="col-span-1 relative aspect-square lg:hidden">
              <Image
                src={"/work/myndyoga/myndyogaRight.png"}
                layout="fill"
                className="bg-contain object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 max-sm:ms-5">
              <Image
                src={"/work/myndyoga/myndyogalogo.png"}
                width={300}
                height={300}
                alt="wwtf"
              />
            </div>
            <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
              TBA 21 is deeply committed to raising awareness about the urgent
              environmental challenges facing our planet through innovative and
              thought-provoking art. The redesign aimed to create a digital
              platform that reflects the organization&apos;s visionary work,
              while offering an immersive and engaging experience for visitors.
            </p>
          </div>
          <div className="col-span-1 relative aspect-square hidden lg:block">
            <Image
              src={"/work/myndyoga/myndyogaRight.png"}
              layout="fill"
              className="bg-contain object-cover"
              alt=""
            />
          </div>
        </div>
        <p className="text-2xl lg:text-4xl max-sm:px-[20px] max-sm:pt-[30px] leading-snug px-2 lg:p-28">
          By bringing TBA 21&apos;s mission to life online, the new website
          serves as a vital tool for communication, education, and inspiration.
        </p>

        {/* Placement */}
        <div className="w-full h-full mt-28 max-sm:mt-20 px-4 max-sm:px-8">
          <div className="lg:w-[75%] mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
        </div>

        {/* Desktop Image */}
        <div className="relative h-auto w-full  lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
          <Image
            src={"/work/myndyoga/HP-MY-Desktop.png"}
            width={0}
            height={0}
            layout="responsive"
            alt=""
            className="object-contain px-2 max-sm:px-0"
          />
        </div>

        {/* Overlay Image With Text */}
        <ImageTextOverlay
          OverlayImageSrc="/work/myndyoga/LoremMyndyoga.png"
          OverlayText="Lorem ipsum dolor sit."
        />

        {/* HeroImgText Section*/}
        <HeroImgText
          HeroimageSrc="/work/myndyoga/HeroLeft.png"
          content={[
            "The Bauhaus wallpaper collection captures the spirit of the movement, with its clean lines, bold shapes, and striking colors. Each design in the collection is a modern interpretation of the classic Bauhaus style,featuring geometric shapes and abstract patterns that reflect themovement’s commitment to simplicity and functionality..",
            " The wallpaper is available in a range of colors and patterns, from monochromatic designs to bold and colorful compositions that make a statement. Whether you’relooking for a subtle accent wall or a bold statement piece, there is a Bauhaus wallpaper design that will suit your needs.",
          ]}
        />

        {/* PlaceHolder With Image */}
        <div className="relative w-full aspect-square lg:aspect-video mt-28 h-fit flex justify-center place-items-center object-cover bg-cover">
          <Image
            src={"/work/myndyoga/BackgroundPlaceholder.png"}
            layout="fill"
            alt=""
            className="-z-30"
          />
          <div className="lg:w-[75%] w-full mx-4 lg:mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
        </div>

        {/* Welcome Note */}
        <WelcomeNote />
        {/* Content Section */}
        <Content
          paragraph={[
            "At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet takimata sanctus est Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet, consetetur.",
          ]}
          imageSrc="/work/myndyoga/Yoga.png"
        />

        {/* Banner Section */}
        <Banner BannerImageSrc="/work/myndyoga/MyndYogaBanner.png" />

        {/* Iphone Frame Section */}
        <div className="flex justify-center max-sm:justify-center mt-28 max-sm:mt-[340px] place-items-end h-[1050px]">
          <div className="grid lg:grid-cols-2 lg:gap-32 max-sm:gap-20">
            <div>
              <IphoneFrame src="/work/myndyoga/MoobileMyndYoga.png" />
            </div>
            <div className="relative lg:translate-y-[-60px]">
              <IphoneFrame
                src="/work/myndyoga/Mobile 2.png"
                className="place-self-start"
              />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <ImagesSection
          imageSources={[
            "/work/myndyoga/frame2.png",
            "/work/myndyoga/frame1.png",
          ]}
        />

        <div className="relative h-auto w-full  lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
          <Image
            src={"/work/myndyoga/HP_Desktop.png"}
            width={0}
            height={0}
            layout="responsive"
            alt=""
            className="object-contain px-2 max-sm:px-0"
          />
        </div>

        {/* Overlay Image With Text */}
        <ImageTextOverlay
          OverlayImageSrc="/work/myndyoga/Loremscnd.png"
          OverlayText="Lorem ipsum dolor sit."
        />

        {/* Footer Heading  */}
        <div className="w-full flex justify-center h-fit m-0 p-0 lg:mt-28 max-sm:mt-20">
          <h1 className="lg:text-[150px] max-sm:text-[60px] max-sm:font-extrabold w-full md:max-w-[50%] text-center lg:leading-[150px]">
            Thyssen
            <br /> Bornemisza
          </h1>
        </div>
        {/* Projects Section */}
        <Projects />

        {/* Footer Section */}
        <div className="mt-28 saolfont">
          <div className="w-full flex justify-center place-items-center flex-col gap-10">
            <div className="w-20 h-20">
              <Logo />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Myndyoga;
