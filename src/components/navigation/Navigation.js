import { NavLink } from "react-router-dom";
import NavButton from '../navButton/NavButton';
import inbox from '../../images/icons/inbox.svg';
import create from '../../images/icons/create.svg';
import './navigation.scss';

const Navigation = () => {

  return (
    <div className='navigation'>

      <NavLink to='/'>
        <NavButton
          img={inbox}
          text='Inbox' />
      </NavLink>

      <NavLink to="/send">
        <NavButton
          img={create}
          text='Send' />
      </NavLink>

      <NavLink to="/contacts">
        <NavButton
          img={create}
          text='Contacts' />
      </NavLink>

    </div >
  )
}
export default Navigation;