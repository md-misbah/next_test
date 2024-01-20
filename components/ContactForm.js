"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaRegPaperPlane } from "react-icons/fa";


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kab0lmb', 'template_3vx90tw', form.current, 'jhQ5uj0yY8VsdpyiW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="conFormwrap w-fit mx-auto py-4">
            <form ref={form} onSubmit={sendEmail} className="w-fit mx-auto">

                <div className="singleConIn">
                    <div className="conLab"><label>Name</label></div>
                    <input className="p-5 csW conIn rounded-xl outline-none" type="text" name="user_name" placeholder="Insert Your Name..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Email</label></div>
                    <input className="p-5 csW conIn rounded-xl outline-none" type="email" name="user_email" placeholder="Insert Your E-mail..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Subject</label></div>
                    <input className="p-5 csW conIn rounded-xl outline-none" type="text" name="user_subject" placeholder="Insert Your Subject..." />
                </div>
                <div className="singleConIn">
                    <div className="conLab"><label>Message</label></div>
                    <textarea rows={8} className="p-5 csW conIn rounded-xl outline-none" name="message" placeholder="Write Me Your Message..." />

                    <button className="group relative mt-6 h-12 w-44 mx-auto overflow-hidden rounded-lg customBg text-lg shadow" type="submit" value="Send">
                        <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <a href="../data/sa.pdf" target='_blank' value="Download!">
                            <div className="text-base relative customlightLime group-hover:text-customdark flex justify-center">
                                <div className="btnTxt">Send</div>
                                <div className="btnIco ml-1 mt-1 text-base"><FaRegPaperPlane /></div>
                            </div>
                        </a>
                    </button>
                </div>

            </form>
        </div>
    );
};