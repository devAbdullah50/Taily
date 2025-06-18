
export default function Navbar() {

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container flex justify-between items-center">
                <div className="logo text-2xl font-bold">
                    <a href="/">Taily</a>
                </div>
                <ul className="nav-links flex gap-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/generate">Generate</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
}