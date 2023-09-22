import React from 'react'
import { shortList, list, longList } from './data';

const Carousel = () => {
  const [people, setPeople] = usestate(shortList);
  return (
    <section className='slider-container'>
      {people.map((person)=>)}
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