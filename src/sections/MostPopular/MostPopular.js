import './MostPopular.css';

import {Card, SectionHeader, SectionWrapper} from '../../Components/index'
import MostPopularData from '../../Data/MostPopularData';


const MostPopular = () => {
  
    const cards = MostPopularData.map(card => {
      return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })
  

  return (
    <>
    <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className='most-popular-items'>
          {cards}
        </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular





{/* <Card image={popular_01} title="Fortnite"                category="Sandbox"    rate="3.8"   download= "2.3M" />
<Card image={popular_02} title="PubG"                    category="Stream-x"    rate="4.8"   download= "1.1M" />
<Card image={popular_03} title= "Dota2"                  category="Legendary"    rate="2.7"   download= "5.3M" />
<Card image={popular_04} title="CS-Go"                   category="Battle S"    rate="3.9"   download= "6.1M" />
<Card image={popular_01} title="Fortnite"                category="Sandbox"    rate="3.8"   download= "2.3M" />
<Card image={popular_02} title="PubG"                    category="Stream-x"    rate="4.8"   download= "1.1M" />
<Card image={popular_03} title= "Dota2"                  category="Legendary"    rate="2.7"   download= "5.3M" />
<Card image={popular_04} title="CS-Go"                   category="Battle S"    rate="3.9"   download= "6.1M" /> */}