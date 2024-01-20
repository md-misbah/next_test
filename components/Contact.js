import SectionHead from "./SectionHead";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { BiMailSend } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { ImWhatsapp } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaDribbbleSquare } from "react-icons/fa";







export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="sm:container mx-auto">
                <div className="contactWrapper w-11/12 m-auto">
                    <SectionHead subTitle="Get In Touch" titleFirst="C" titleLast="ontact Me" />
                </div>
                <div className="contactWrapper w-11/12 m-auto grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="contactBoxnTitle">

                        <div className="contactCardtTitle"><h1 className="customLime font-semibold text-xl mb-4 text-left">T<span className="text-white">alk To Me</span></h1></div>

                        <div className="grid grid-cols-1 gap-y-7">
                            <ContactCard contactIcon={<BiMailSend />} contactTag="E-mail" contactDesc="mdmisbah.dev@gmail.com" />
                            <ContactCard contactIcon={<LuPhoneCall />} contactTag="Phone" contactDesc="+880 1568-121655" />
                            <ContactCard contactIcon={<ImWhatsapp />} contactTag="Whatsapp" contactDesc="+880 1568-121655" />
                            <div className="contactCard text-center p-6 rounded-xl customBg shadow">
                                <div className="contactCardWrapper">
                                    <div className="contactCardIcon w-fit mx-auto customLime text-3xl mb-2 grid grid-cols-5 gap-x-2 mt-3">   
                                        <a href="https://www.linkedin.com/in/-md-misbah-/" target="_blank"><FaLinkedin /></a>
                                        <a href="https://github.com/md-misbah/" target="_blank"><FaGithub /></a>
                                        <a href="" target="_blank"><FaDribbbleSquare /></a>
                                        <a href="https://www.facebook.com/Misba.CBR" target="_blank"><FaFacebook /></a>
                                        <a href="https://www.instagram.com/_mesbah.hassan_/" target="_blank"><RiInstagramFill /></a>
                                    </div>
                                    <div className="contactCardTag font-medium text-lg text-white">Find Me on Social Media</div>
                                    <div className="contactCardDesc t">Stay Connected</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactFeildnTitle">
                        <div className="contactCardtTitle"><h1 className="customLime font-semibold text-xl mb-4 text-left">S<span className="text-white">end Me an E-mail</span></h1></div>

                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
