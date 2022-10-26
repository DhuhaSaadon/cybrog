import './Library.css'
import {Library_item, SectionHeader, SectionWrapper} from '../../Components/index'
import GamingLibraryData from '../../Data/GamingLibraryData';


const Library = () => {

  const cards = GamingLibraryData.map(card => {
    return <Library_item key={card.id} image={card.image} title={card.title} date_added={card.date_added} hours_played={card.hours_played} download={card.download}/>
  })


  return (
    <>
    <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library'>
          {cards}
        </div>
    </SectionWrapper>
    </>
  )
}

export default Library