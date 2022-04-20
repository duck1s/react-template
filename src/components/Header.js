import "../sass/components/Header.scss";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<h2 className="header__nav-h2">Joeri Breedveld</h2>
				<ul className="header__nav-ul">
					<li className="header__nav-ul-li">
						<a className="header__nav-ul-li-a" href="test.com">
							Home
						</a>
					</li>
					<li className="header__nav-ul-li">
						<a className="header__nav-ul-li-a" href="test.com">
							About
						</a>
					</li>
					<li className="header__nav-ul-li">
						<a className="header__nav-ul-li-a" href="test.com">
							Work
						</a>
					</li>
					<li className="header__nav-ul-li">
						<a className="header__nav-ul-li-a" href="test.com">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<div className="header__main">
				<h1 className="header__main-h1">Joeri Breedveld</h1>
				<p className="header__main-job">Web Developer</p>
			</div>
		</header>
	);
};

export default Header;
