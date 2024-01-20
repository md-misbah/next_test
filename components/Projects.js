import { SiGithub } from "react-icons/si";
import SingleProject from './SingleProject';
import SectionHead from "./SectionHead";


import Airbnb from '../images/airbnb.png';
import Halloween from '../images/halloween.png';
import Adventure from '../images/adventure.png';
import TodoApp from '../images/to-do-app.png';
import Breakout from '../images/breakout.png';
import Mishbir from '../images/mishbir.png';
import Gym from '../images/gym.png';
import TastyTreat from '../images/tastyTreat.png';
import Travel from '../images/travel.png';

const projectImg = [Airbnb, Halloween, Adventure, TodoApp, Breakout, Gym, Mishbir, TastyTreat, Travel];
const projectName = ["Airbnb V2.0", "Halloween", "Adventure", "To-Do App", "Break-Out", "Gymnasium", "Mishbir", "TastyTreat", "Travel Web"];
const projectDesc = ["This is Airbnb Clone (Airbnb -V2.0). Developed with 'Next.JS' the 'React-Framework', 'Tailwind CSS' the CSS Library and the basic layout of 'The Airbnb Official Website'.", "It's a 'To-Do App'. A  JavaScript 'web-application' which uses your local storage(browser's cache memory) to store your To-Do's. This web-app is developed with 'HTML5, CSS3 & Vanilla JavaScript'.", "This JavaScript game has developed with 'HTML5, CSS3 & Vanilla JavaScript'. This is a javascript free online web-browser game.", "This one is a halloween shop demo website which is developed with 'HTML5, CSS3 & Vanilla JavaScript'. It's my personal project.", "It's a personal project of my coding just to increase my skills & efficiency. It's developed with 'HTML5, CSS3 & Vanilla JavaScript'.", "This is a client's project.", "It's a Gymnasium professional website for their gym's branding and marketing."];
const projectTag = ["Next App", "React App", "Personal Project", "JavaScript (App)", "JavaScript (Game)", "Client's Project"];
const visit = ["Visit Site"]
const projectLink = ["https://airbnb-clone-gamma-jet.vercel.app/", "https://md-misbah.github.io/halloween/", "https://md-misbah.github.io/adventure/", "https://md-misbah.github.io/To-Do-App/", "https://md-misbah.github.io/Breakout/", "https://md-misbah.github.io/gymnasium/", "https://md-misbah.github.io/mishbir/", "https://md-misbah.github.io/foodWeb/", "https://md-misbah.github.io/travelWeb/", "https://md-misbah.github.io/travelWeb/"];

const gitUrl = ["https://github.com/md-misbah"];





export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="sm:container mx-auto">
                <div className="projectsWrapper w-11/12 m-auto">
                    <SectionHead subTitle="My Projects" titleFirst="C" titleLast="heck out my previous projects" />
                    <div className="projectsWrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 my-6">
                        <SingleProject projectImg={projectImg[0]} projectName={projectName[0]} projectDesc={projectDesc[0]} projectTag={projectTag[0]} projectLink={projectLink[0]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[3]} projectName={projectName[3]} projectDesc={projectDesc[1]} projectTag={projectTag[3]} projectLink={projectLink[3]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[4]} projectName={projectName[4]} projectDesc={projectDesc[2]} projectTag={projectTag[4]} projectLink={projectLink[4]} visit={visit[0]} />
                        

                        <SingleProject projectImg={projectImg[1]} projectName={projectName[1]} projectDesc={projectDesc[3]} projectTag={projectTag[2]} projectLink={projectLink[1]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[2]} projectName={projectName[2]} projectDesc={projectDesc[4]} projectTag={projectTag[2]} projectLink={projectLink[2]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[5]} projectName={projectName[5]} projectDesc={projectDesc[6]} projectTag={projectTag[2]} projectLink={projectLink[5]} visit={visit[0]} />

                        <SingleProject projectImg={projectImg[6]} projectName={projectName[6]} projectDesc={projectDesc[5]} projectTag={projectTag[5]} projectLink={projectLink[6]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[7]} projectName={projectName[7]} projectDesc={projectDesc[4]} projectTag={projectTag[2]} projectLink={projectLink[7]} visit={visit[0]} />
                        <SingleProject projectImg={projectImg[8]} projectName={projectName[8]} projectDesc={projectDesc[4]} projectTag={projectTag[2]} projectLink={projectLink[8]} visit={visit[0]} />
                    </div>

                    <div className="projectGitButton mt-12 w-fit mx-auto ">
                        <button className="group relative h-12 w-48 overflow-hidden rounded-lg customBg text-lg shadow">
                            <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <a href={gitUrl[0]} target="_blank" rel="noopener noreferrer" >
                                <div className="text-base relative customlightLime group-hover:text-customdark flex justify-center">
                                    <div className="btnTxt font-semibold">Visit My Github</div>
                                    <div className="btnIco ml-1 mt-1 text-base"><SiGithub /></div>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
