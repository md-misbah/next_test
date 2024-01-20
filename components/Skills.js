import SectionHead from "./SectionHead";
import SingleSkill from "./SingleSkill";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { MdPalette } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { HiPhoto } from "react-icons/hi2";
import { MdVideoSettings } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { FaDigitalTachograph } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { HiPresentationChartLine } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { SiWindowsterminal } from "react-icons/si";




export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="sm:container mx-auto">
                
                <div className="sskills w-11/12 mx-auto">
                    <div className="aboutWrapper w-full m-auto">
                        <SectionHead subTitle="My Abilities" titleFirst="S" titleLast="kills & Efficiency" />
                    </div>
                    <div className="leftRightWrap grid gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                        <div className="skillWrapperLeft shadow p-5 my-4  rounded-2xl  customBg">
                            <div className="skill_Left_skillTitle text-lg font-semibold customLime m-auto text-center my-3"><h1 className="customLime">F<span className="text-white">ront-End Development</span></h1></div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner mx-4 sm:block md:block lg:flex lg:justify-around">
                                    <div className="innerLeft mr-4">

                                        <SingleSkill iconSkill={<DiHtml5 />} nameSkill="HTML" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<DiCss3 />} nameSkill="CSS" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<IoLogoJavascript />} nameSkill="JavaScript & TypeScript" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<FaBootstrap />} nameSkill="BootStrap & JQuery" levelSkill="Advanced" />

                                    </div>
                                    <div className="innerRight mr-4">

                                        <SingleSkill iconSkill={<FaReact />} nameSkill="React JS" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<SiNextdotjs />} nameSkill="Next JS" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<FaPhoenixFramework />} nameSkill="Front-End (Frameworks + Libraries)" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<FiMonitor />} nameSkill="Front-End Web Development" levelSkill="Advanced" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skillWrapperRight shadow p-5 my-4  rounded-2xl  customBg">
                            <div className="skill_Left_skillTitle text-lg font-semibold customLime m-auto text-center my-3"><h1 className="customLime">G<span className="text-white">raphics Development</span></h1></div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner mx-4 sm:block md:block lg:flex lg:justify-around ">
                                    <div className="innerLeft mr-4">

                                        <SingleSkill iconSkill={<MdPalette />} nameSkill="Graphics Design" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<FaPencilRuler />} nameSkill="UI/UX Design" levelSkill="Advanced" />
                                        <SingleSkill iconSkill={<HiPhoto />} nameSkill="Photo Editing" levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<MdVideoSettings />} nameSkill="Video Editing" levelSkill="Intermediate" />
                                        
                                    </div>
                                    <div className="innerRight sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4">

                                        <SingleSkill iconSkill={<GiPencilBrush />} nameSkill="Illustration" levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<HiPencilSquare />} nameSkill="Branding Design" levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<FaDigitalTachograph />} nameSkill="Digital Art" levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<MdAnimation />} nameSkill="Animation" levelSkill="Beginner" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skillWrapperRight shadow p-5 my-8  rounded-2xl  customBg">
                            <div className="skill_Left_skillTitle text-lg font-semibold customLime m-auto text-center my-3"><h1 className="customLime">M<span className="text-white">ore Skills</span></h1></div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner sm:block md:block lg:flex lg:justify-around sm:ml-4 md:ml-4 lg:ml-0">
                                    <div className="innerLeft">

                                        <SingleSkill iconSkill={<RiRobot2Fill />} nameSkill="Artificial Intelligence " levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<SiWindowsterminal />} nameSkill="Prompt Engineering " levelSkill="Intermediate" />
                                        <SingleSkill iconSkill={<HiPresentationChartLine />} nameSkill="Presentaion" levelSkill="Advance" />
                                        <SingleSkill iconSkill={<MdOutlineSupportAgent />} nameSkill="Virtual Assistant" levelSkill="Advance" />
                                        
                                    </div>
                                    <div className="innerRight">

                                        <SingleSkill iconSkill={<SiReacthookform />} nameSkill="Copy-Typing" levelSkill="Advance" />
                                        <SingleSkill iconSkill={<SiMicrosoftoffice />} nameSkill="MS Office" levelSkill="Advance" />
                                        <SingleSkill iconSkill={<SiGooglemarketingplatform />} nameSkill="Marketing" levelSkill="Beginner" />
                                        <SingleSkill iconSkill={<FaSearchDollar />} nameSkill="SEO" levelSkill="Beginner" />
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}
