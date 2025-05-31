import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.svg';
import home from '../assets/Home.svg'
import discount from '../assets/Discount.svg'
import dashBoard from '../assets/Dashboard.svg'
import mail from '../assets/Message.svg'
import notification from '../assets/Notification.svg'
import setting from '../assets/Setting.svg'
import logOut from '../assets/Logout.svg'

const Navbar = () => {
  return (
    <nav className=' bg-[#1F1D2B] h-[100vh] py-4 flex flex-col justify-between items-center rounded-tl rounded  '>
      
      
      <a href="#" className='px-2 py-4'>
        <img src={logo} alt="img" className='p-3 rounded bg-[#EB956A52] ' />
      </a>
      <a href="#" className='bg-[#252836] pl-3 pr-2 ml-2 py-4 rounded-tl rounded-bl justify-self-end '>
        <img src={home} alt="img" className='p-3 rounded bg-[#EA7C69] ' />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={discount} alt="img" />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={dashBoard} alt="img" />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={mail} alt="img" />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={notification} alt="img" />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={setting} alt="img" />
      </a>
      <a href="#" className='px-2 py-4 rounded'>
        <img src={logOut} alt="img" />
      </a>
    </nav>
  )
}

export default Navbar
