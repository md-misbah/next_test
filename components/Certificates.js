import SingleCertificate from "./SingleCertificate";
import MsML from '../images/ms_ML.png';
import MsAzure from '../images/ms_azure.png';
import SectionHead from "./SectionHead";

const certificateImage = [MsML, MsAzure];
const certificateTag = ["HARVARD", "MICROSOFT", "MICROSOFT LEARN"];
const certificateDescription = ["Master the AI-900 exam! Participated in the Azure AI Fundamentals Cloud Skills Challenge to solidify core concepts. Gained hands-on learning and ace quizzes to excel in AI Overview, Explore visual tools for machine learning, Computer Vision, and Natural Language Processing. Showcased my Azure expertise confidently...", "Obtained this certificate on completion of 'Azure AI Fundamentals : Cloud Skills Challenge' including 14 tests, 7 labs for exploring visual tools for machine learning & 1 overview test."]

export default function Certificates() {
    return (
        <section id="certificates" className="certificates">
            <div className="sm:container mx-auto">
                <div className="certiWrapper w-11/12 m-auto">
                    <SectionHead subTitle="My Certificates" titleFirst="C" titleLast="ertificaions" />
                    <div className="certiWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 my-6">
                        <SingleCertificate certificateImg={certificateImage[1]} certificateFirstName="M" certificateLastName="icrosoft Azure AI Fundamentals: Cloud Skills Challenge" institute="Platform: " instituteName="Microsoft Learn (Microsoft)" cerDate="Obtained on: " cerDateD="26th Dec, 2023" certificateDesc={certificateDescription[0]} certificateTag={certificateTag[1]} certificateTagtwo={certificateTag[2]} />
                    
                        <SingleCertificate certificateImg={certificateImage[0]} certificateFirstName="F" certificateLastName="undamentals of Machine Learning" institute="Platform: " instituteName="Microsoft Learn (Microsoft)" cerDate="Obtained on: " cerDateD="26th Dec, 2023" certificateDesc={certificateDescription[1]} certificateTag={certificateTag[1]} certificateTagtwo={certificateTag[2]} />
                    </div>
                </div>
            </div>
        </section>
    )
}
