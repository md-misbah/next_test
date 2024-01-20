import SingleSkill from "./SingleSkill";

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
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


export default function SkillCard(props) {
  return (
      <div className="leftRightWrap w-full grid gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="skillWrapperLeft customShadow p-5 my-4 rounded-2xl bg-white">
              <div className="skill_Left_skillTitle text-base font-semibold customLime m-auto text-center my-3">{props.skillCardTitle}</div>
              <div className="skill_Left_skills">
                  <div className="skill_inner sm:block md:block lg:flex lg:justify-between">
                      <div className="innerLeft">
                        {/* 4 skill  */}
                          <SingleSkill iconSkill={<DiHtml5/>} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5/>} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5/>} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5/>} nameSkill="HTML" levelSkill="Advance" />
                      </div>
                      <div className="innerRight">
                          {/* 4 skill  */}
                          <SingleSkill iconSkill={<DiHtml5 />} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5 />} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5 />} nameSkill="HTML" levelSkill="Advance" />
                          <SingleSkill iconSkill={<DiHtml5 />} nameSkill="HTML" levelSkill="Advance" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
