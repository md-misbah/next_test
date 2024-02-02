import SingleCertificate from "./SingleCertificate";
import MsML from '../images/ms_ML.png';
import MsAzure from '../images/ms_azure.png';
import MsAi from '../images/ms_ai.png';
import SectionHead from "./SectionHead";

const certificateImage = [MsML, MsAzure, MsAi];
const certificateTag = ["HARVARD", "MICROSOFT", "MICROSOFT LEARN"];
const certificateDescription = ["Master the AI-900 exam! Participated in the Azure AI Fundamentals Cloud Skills Challenge to solidify core concepts. Gained hands-on learning and ace quizzes to excel in AI Overview, Explore visual tools for machine learning, Computer Vision, and Natural Language Processing. Showcased my Azure expertise confidently...", "Obtained this certificate on completion of 'Azure AI Fundamentals : Cloud Skills Challenge' including 14 tests, 7 labs for exploring visual tools for machine learning & 1 overview test.", "I learned how to create and deploy AI solutions for various situations using Azure AI services, such as detecting emotions, faces, or forms. I also found helpful learning materials, code examples, and guides to assist me. Achieved this certification by completng the listed AI Skills Challenges:- ⦿Build a natural language processing solution with Azure AI Language. ⦿Build an Azure AI Vision solution. ⦿Create an intelligent document processing solution with Azure AI Document Intelligence."];

export default function Certificates() {
    return (
        <section id="certificates" className="certificates">
            <div className="sm:container mx-auto">
                <div className="certiWrapper w-11/12 m-auto">
                    <SectionHead subTitle="My Certificates" titleFirst="C" titleLast="ertificaions" />
                    <div className="certiWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 my-6">

                        <SingleCertificate certificateImg={certificateImage[2]} certificateFirstName="M" certificateLastName="icrosoft AI Skills Challenge" institute="Platform: " instituteName="Microsoft Learn (Microsoft)" cerDate="Obtained on: " cerDateD="2nd Feb, 2024" certificateDesc={certificateDescription[2]} certificateTag={certificateTag[1]} certificateTagtwo={certificateTag[2]} />
    
                        <SingleCertificate certificateImg={certificateImage[1]} certificateFirstName="M" certificateLastName="icrosoft Azure AI Fundamentals: Cloud Skills Challenge" institute="Platform: " instituteName="Microsoft Learn (Microsoft)" cerDate="Obtained on: " cerDateD="26th Dec, 2023" certificateDesc={certificateDescription[0]} certificateTag={certificateTag[1]} certificateTagtwo={certificateTag[2]} />
                    
                        <SingleCertificate certificateImg={certificateImage[0]} certificateFirstName="F" certificateLastName="undamentals of Machine Learning" institute="Platform: " instituteName="Microsoft Learn (Microsoft)" cerDate="Obtained on: " cerDateD="26th Dec, 2023" certificateDesc={certificateDescription[1]} certificateTag={certificateTag[1]} certificateTagtwo={certificateTag[2]} />
    
                    </div>
                </div>
            </div>
        </section>
    )
}
