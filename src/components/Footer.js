function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer-main">
        © {currentYear} Copyright: {" "}
        <a href='https://github.com/M1roel'>
          Peter Pfautsch
        </a>
      </div>
    );
}

export default Footer;