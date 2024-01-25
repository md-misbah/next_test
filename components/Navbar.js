import Image from 'next/image';
import MyImage from '../images/meSq.jpeg';

export default function Navbar() {

    return (
        <div className="navbar customBg text-white sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow customBg rounded-box w-52">
                        <li><a href='#about'>About</a></li>
                        <li>
                            <a>Career & Summary</a>
                            <ul className="p-2">
                                <li><a href='#education'>Career</a></li>
                                <li><a href='#projects'>Projects</a></li>
                                <li><a href='#skills'>Skills</a></li>
                                <li><a href='#certificates'>Certificates</a></li>
                            </ul>
                        </li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><h1 className="customlightLime">M<span className="name text-white">d Misbah</span></h1></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a href='#about'>About</a></li>
                    <li>
                        <details>
                            <summary>Career & Summary</summary>
                            <ul className="p-2 customBg">
                                <li><a href='#education'>Career</a></li>
                                <li><a href='#projects'>Projects</a></li>
                                <li><a href='#skills'>Skills</a></li>
                                <li><a href='#certificates'>Certificates</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href='#contact'>Contact</a></li>

                </ul>
            </div>
            <div className="navbar-end rounded-full">
                <div className="imgBorder p-1 rounded-full buttonBgLime">
                    <Image
                        src={MyImage}
                        quality="100"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                        className="authorAboutImageNav object-cover mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}
