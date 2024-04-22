const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>the blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>

    );
}

const NavbarV2 = (props) => {
    return (
        <nav className="Navbar">
            <h1>the blog</h1>
            <div className="links">
                {props.children}
            </div>
        </nav>

    );
}

export {Navbar, NavbarV2};