import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({children}) => {
    return(
        <div className='d-flex flex-column min-vh-100'>
            <Header/>
            <main className='container mar-top-20'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;