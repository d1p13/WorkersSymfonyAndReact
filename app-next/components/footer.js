import footer from '../styles/nav-footer.module.css'

const Footer = () => {
    return (
        <footer className={`${footer.bg} mt-auto`}>
            <div className='container'>
                Copyright
                <br/>
                <br/>
                <br/>
            </div>
        </footer>
    )
}

export default Footer;