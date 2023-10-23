import { useState } from 'react'

import Navbar from './templates/Navbar'
import Footer from './templates/Footer'

import Route from './Router'


function App() {
  const [route, setRoute] = useState('')
  const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //     const onScroll = () => setOffset(window.pageYOffset);
  //     // clean up code
  //     console.log(offset);
  // }, []);


    // useEffect(() => );


  return (
    <>
      <Navbar route={route} setRoute={setRoute}/>
      <div className="app mt-28">
      <Route route={route}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
