import React from 'react'
import { shortList, list, longList } from './data';

const Carousel = () => {
  const [people, setPeople] = usestate(shortList);
  return (
    <section className='slider-container'>
      {people.map((person)=>{
        const { id, image, name, title, quote } = person;
        return <article className='slide' key={id}>
          <img src={image} alt={name} className='person-img' />
          <h5 className='name'></h5>
        </article>
      })}
    </section>
  )
}

export default Carousel

// - s7-209:Cr8 base carousel.jsx
// - s7-209:Change structure div into h2
// - s7-209:Import shortlist, list & longlist
// - s7-210:Cr8 people state value
// - s7-210:pass in shortList as default state value @people state value
// - s7-210:cr8 section with CN slider.... @return
// - s7-210:cr8 iterate over people state value @return
// - s7-210:pass in person  @return iterate over people state value
// - s7-210:Add return with article @people.map return
// - s7-210:Add CN slide @return article
// - s7-210:Add key base @return article
// - s7-210:cr8 destructure equal to person
// - s7-210:pass in id to key @return
// - s7-210:cr8 base img @return
// - s7-210:pass in image @return img src
// - s7-210:pass in name @return img alt
// - s7-210:cr8 person-img CN  @return img
// - s7-210:cr8 h5 wtih CN name  @return 