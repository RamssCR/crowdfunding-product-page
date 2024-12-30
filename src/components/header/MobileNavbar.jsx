function MobileNavbar() {
    return (
        <section className="bg-black/25 fixed w-full h-screen top-0 left-0 pt-28 flex justify-center items-start lg:hidden">
            <nav className="flex flex-col bg-white rounded-lg w-84 overflow-hidden">
                <li className="list-none"><a href="#" className="text-lg font-semibold block px-6 py-5 border-b border-gray-100">About</a></li>
                <li className="list-none"><a href="#" className="text-lg font-semibold block px-6 py-5 border-b border-gray-100">Discover</a></li>
                <li className="list-none"><a href="#" className="text-lg font-semibold block px-6 py-5 border-b border-gray-100">Get Started</a></li>
            </nav>
        </section>
    )
}

export default MobileNavbar