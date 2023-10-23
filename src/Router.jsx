
// pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricePage from './pages/PricePage'
import ClientPage from './pages/ClientPage'
import Skill from './pages/Skill'


const Router = ({route}) => {  
    switch(route) {
      case 'price':
        return (<PricePage/>)
        break;
      case 'skill':
        return (<Skill/>)
        break;
      case 'about':
        return (<AboutPage/>)
        break;
      case 'contact':
        return (<ContactPage/>)
        break;
        case 'client':
          return (<ClientPage/>)
          break;
      default:
        return (<HomePage/>)
    }
}

export default Router