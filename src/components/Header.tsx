import logo from '../assets/logo/logo_full_blue.png'
import '../assets/css/header.css'

export default function Header() {
    return (
        <>
            <header className="grid grid-cols-12 p-5">
                <nav className="grid grid-cols-12 col-span-12 md:col-span-10 md:col-start-2">
                    <div className="col-span-2">
                        <img src={logo} alt="logo" className='w-full' />
                    </div>
                </nav>

            </header>
        </>
    );
}