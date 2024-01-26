import Edu_details from "./Edu_details";
import { FaGraduationCap } from "react-icons/fa6";
import { LuLanguages } from "react-icons/lu";
import SingleProgress from "./SingleProgress";
import SectionHead from "./SectionHead";

export default function Education() {
    return (
        <section id="education">
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-full m-auto">
                    <SectionHead subTitle="My Academic Career" titleFirst="E" titleLast="ducation & Languages" />

                    <div className="eduLDataWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-8">
                        <div className="EduWrap customBg p-8  shadow rounded-2xl w-11/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 animate__animated animate__slideInLeft">

                            <div className="eduTitle flex flex-wrap">
                                <FaGraduationCap className="customLime text-3xl" />
                                <h1 className="customLime text-2xl font-semibold ml-2">E<span className="titleedu text-white">ducation</span></h1>
                            </div>

                            <div className="eduLDataWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-0 gap-y-2">
                                <Edu_details exmTitle='HSC' passingYear='(2023-2024)' background='Background: ' backgroundName='Science' gpa='GPA: ' gpaGrade='(N/A)' institute='Institute: ' instituteName='BAF Shaheen College Dhaka' location='Location: ' locationName='Dhaka,
                            Bangladesh' />
                                <Edu_details exmTitle='SSC' passingYear='(2022-2023)' background='Background: ' backgroundName='Science' gpa='GPA: ' gpaGrade='5.00' institute='Institute: ' instituteName='Monipur High School & College (Branch - 02)' location='Location: ' locationName='Dhaka,
                            Bangladesh' />
                            </div>

                        </div>
                        <div className="EduWrap customBg p-8  shadow rounded-2xl w-11/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 animate__animated animate__slideInRight">

                            <div className="eduTitle flex flex-wrap">
                                <LuLanguages className="customLime text-3xl" />
                                <h1 className="customLime text-2xl font-semibold ml-2">L<span className="titledu text-white">anguage</span></h1>
                            </div>


                            <div className="eduCard customBoxBorder p-4 mt-4 rounded-xl">

                                <SingleProgress languageName='English' stage='(Fluent)' value='85' />
                                <SingleProgress languageName='Bengali' stage='(Native)' value='100' />
                                <SingleProgress languageName='Hindi' stage='(Conversational)' value='60' />
                                <SingleProgress languageName='Urdu' stage='(Conversational)' value='55' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
