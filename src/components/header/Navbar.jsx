function Navbar() {
    return (
        <nav className="hidden items-center gap-20 lg:flex">
            <li className="list-none"><a href="#" className="text-white text-lg font-semibold hover:underline">About</a></li>
            <li className="list-none"><a href="#" className="text-white text-lg font-semibold hover:underline">Discover</a></li>
            <li className="list-none"><a href="#" className="text-white text-lg font-semibold hover:underline">Get Started</a></li>
        </nav>
    )
}

export default Navbar