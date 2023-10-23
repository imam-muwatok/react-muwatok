import { useState } from "react"
import logo from './../assets/img/md.png'




const Navbar = ({route, setRoute}) => {
    const [menu, setMenu] = useState(false)

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-lg text-primary block py-6">
                    <img className="inline w-10 md:w-14" src={'.'+logo}  width="50px" alt="logo"/> 
                    <span  className="inline items-center ms-4 md:text-2xl text-primary">Muwatok Dev</span> </a>
                </div>
                <div className="flex items-center px-4">
                    <button onClick={() => setMenu((menu) => !menu)} id="hamburger" name="hamburger" type="button" className={menu? 'hamburger-active':'btn-menu'}>
                    <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                    <span className="hamburger-line transition duration-300 ease-in-out"></span>
                    <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>

                    <nav
                    id="nav-menu"
                    className={menu? 'nav-menu-active':'nav-menu'}
                    >
                    <ul className="block lg:flex">
                        <li className="group">
                        <a onClick={() => setRoute((route) => '')} className={route==''? 'nav-link active': 'nav-link'}>Beranda</a>
                        </li>
                        <li className="group">
                        <a onClick={() => setRoute((route) => 'about')} className={route=='about'? 'nav-link active': 'nav-link'}>Tentang Saya</a>
                        </li>
                        <li className="group">
                        <a onClick={() => setRoute((route) => 'contact')} className={route=='contact'? 'nav-link active': 'nav-link'}>Contact</a>
                        </li>
                        <li className="group">
                        <a onClick={() => setRoute((route) => 'skill')} className={route=='skill'? 'nav-link active': 'nav-link'}>Skill</a>
                        </li>
                        <li className="group">
                        <a onClick={() => setRoute((route) => 'client')} className={route=='client'? 'nav-link active': 'nav-link'}>Client</a>
                        </li>
                        
                        <li className="group">
                            <a id="contact" href="https://wa.me/6285156209761" target="_blank" className="text-base font-semibold text-white bg-primary py-2 flex px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Sign In</a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </header>
        
    )
}

{/* <nav>
            <a onClick={() => setRoute((route) => '')}>Home</a>
            <a onClick={() => setRoute((route) => 'price')}>Price</a>
            <a onClick={() => setRoute((route) => 'about')}>About</a>
            <a onClick={() => setRoute((route) => 'contact')}>Contact</a>
        </nav> */}

export default Navbar