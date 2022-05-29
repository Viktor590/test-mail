import './navButton.scss'


const NavButton = (props) => {
  return (
    <div className='button'>
      <div className='button-wrapper'>
        <img className='button-img' src={props.img} alt={props.text} />
        {props.text}
      </div>
    </div>
  )
}
export default NavButton;