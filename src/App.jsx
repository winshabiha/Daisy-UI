import { useState } from 'react';
import Navbar from './components/header/navbar/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Rechartses from './components/header/rechartss/Rechartses';

function App() {
  const items = [
    {
      id: 1,
      path: 'home',
      element: 'Home Page'
    },
    {
      id: 2,
      path: 'about',
      element: 'About Us Page'
    },
    {
      id: 3,
      path: 'services',
      element: 'Services Page'
    },
    {
      id: 4,
      path: 'contact',
      element: 'Contact Page'
    }
  ];

  const [isOkay,setIsOkay] = useState(true)
  console.log(isOkay)
  const handleClick=()=>{
    setIsOkay(!isOkay)
  }

  return (
    <div>
      <div className='md:flex gap-10  items-center'>
      <div className='md:hidden' onClick={ handleClick}>
        {
          isOkay? <GiHamburgerMenu className='text-2xl'></GiHamburgerMenu> :
                  <RxCross2 className='text-2xl'></RxCross2>
        }
      </div>
      <h1 className='font-bold text-4xl'>Logo</h1>
      {/* <Header></Header> */}
      <div className={`md:flex gap-10 items-center duration-1000 ${isOkay?'-ml-48 md:ml-48':''}`}>
        {
          items.map(item => <Navbar key={item.id} item={item}></Navbar>)
        }
      </div>
      
      </div>
      <Rechartses></Rechartses>
    </div>
  )
}

export default App
