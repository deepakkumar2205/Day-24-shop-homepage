import './components/style.css'
import Navbar from './components/Navbar'
import  Header            from './components/Heading';
import Content  from './components/Content'
import Footer from './components/Footer'
import cardDetails from './components/CardDetails'

function App() {
return (
    <>
    <Navbar />
    <Header />
    
    <Content details={cardDetails} ></Content> 
    <Footer />
    </>
)
}

export default App;
