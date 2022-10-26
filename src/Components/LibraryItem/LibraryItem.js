import { SecondaryButton } from '../Buttons/Buttons'
import './LibraryItem.css'

const Library_item = (props) => {
  return (
    <div className='gaming-library-item'>
        <ul>
            <li className='gaming-library-item-image' ><img src={props.image}/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Data Added</h4><span>{props.date_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>currently</h4><span>{props.download}</span></li>
            <SecondaryButton>Download</SecondaryButton>
        </ul>
    </div>
  )
}

export default Library_item