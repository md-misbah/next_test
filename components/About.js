import Image from 'next/image';
import MyImage from '../images/me.jpeg';
import { FaAward } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import SectionHead from './SectionHead';
import AboutDetaBox from './AboutDetaBox';
import 'animate.css';

export default function About() {
    return (
        <section id="about">
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead subTitle="My Intro" titleFirst="A" titleLast="bout Me" />
                    <div className="aboutDataWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-8">
                        <div className="aboutImageWrap rounded-2xl w-8/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 authorAboutImage ">
                            <div className="aboutImage animate__slideInLeft">
                                <Image
                                    src={MyImage}
                                    quality="100"
                                    alt="Picture of the author"
                                    className="authorAboutImage object-cover mx-auto"
                                />
                            </div>
                        </div>
                        <div className="aboutmetaWrap animate__slideInRight">
                            <div className="aboutBox grid grid-cols-3 gap-x-4 mb-12">

                                <AboutDetaBox icon={<FaAward />} title="Experience" subtitle="3+ Years working" />
                                <AboutDetaBox icon={<ImBriefcase />} title="Completed" subtitle="30+ Projects" />
                                <AboutDetaBox icon={<BiSupport />} title="Support" subtitle="Online 24/7" />

                            </div>
                            <div className="aboutHeadTitle"><h1 className='text-2xl text-left mb-3 mt-8 customLime font-semibold'>M<span className="name text-white">d Misbah</span> </h1></div>
                            <div className="aboutdesc mb-4"><p className='text-justify text-base text-white'>Hey there! I'm your go-to person for all things digital magic. From full-stack web programming to data wizardry, graphic design, virtual assisting, and project management. I've got it covered! Picture a fusion of tech and creativity, that's where I thrive. I bring a laid-back yet meticulous vibe to my work, making sure every project is not just functional but also a piece of digital awesomeness.
                                <br />
                                <br />
                                Whether it's crafting sleek websites, playing with data for insightful revelations, whipping up eye-catching graphics, or managing projects like a pro, I'm your tech-savvy creative companion. Let's turn those ideas of yours into something extraordinary in the digital realm. Excited to collaborate and infuse a bit of magic into our work!</p></div>

                            <div className="aboutButton mt-8 flex justify-around">
                                <button className="group relative h-12 w-40 overflow-hidden rounded-lg customBg text-lg shadow">
                                    <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <a href="#contact" rel="noopener noreferrer">
                                        <div className="text-base relative customlightLime group-hover:text-customdark flex justify-center">
                                            <div className="btnTxt">Contact Me </div>
                                            <div className="btnIco ml-1 mt-1"><FaRegPaperPlane /></div>
                                        </div>
                                    </a>
                                </button>
                                <button className="group relative h-12 w-48 overflow-hidden rounded-lg customBg text-lg shadow">
                                    <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <a href="../data/sa.pdf" target='_blank' value="Download!">
                                        <div className="text-base relative customlightLime group-hover:text-customdark flex justify-center">
                                            <div className="btnTxt">Download Resume</div>
                                            <div className="btnIco ml-1 mt-1 text-base"><HiOutlineDownload /></div>
                                        </div>
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
