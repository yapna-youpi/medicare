import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Routers from "../routes/Routers"

const Layout = () => {
  return (
    <div className='bg-bgColor text-textColor'>
     <Header/>
     <main>
        <Routers />
     </main>
     <Footer/> 
    </div>
  )
}

export default Layout
