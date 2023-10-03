import React, { useEffect } from 'react'
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = usestate(longList);
  const [currentPerson, setCurrentPerson] = usestate(0);

  const prevSlide = () =>{
    setCurrentPerson((oldPerson)=>{
      const result = (oldPerson - 1) % people.length;
      return result; 
    })
  }
  const nextSlide = () => {

    setCurrentPerson((oldPerson)=>{
      const result = (oldPerson + 1) % people.length;
      return result;
    })
  };

  useEffect(() => {
    setInterval(() => {
     
    }, 2000);
  },[]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
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
// - s7-210:pass in name @return h5
// - s7-210:cr8 p with CN title
// - s7-210:pass in title @p with CN title
// - s7-210:cr8 paragraph with CN text
// - s7-210:pass in quote @p with CN text
// - s7-210:import & pass in FaQuoteRight
// - s7-210:Add CN icon @FaQuoteRight
// - s7-210:cr8 prevSlide base function
// - s7-210:cr8 nextSlide base function
// - s7-210:cr8 previous button with CN prev
// - s7-210:cr8 & pass in prevslide @onclick Button prev
// - s7-210:pass in FiChevronLeft @onclick Button prev
// - s7-210:cr8 next button with CN next
// - s7-210:cr8 & pass in nextslide @onclick Button next
// - s7-210:pass in FiChevronright @onclick Button next
// - s7-212: Change CN slide to slide next-slide @article
// - s7-212: remove next-slide @article & add personIndex @people.map
// - s7-212: Add style={{transform:}} @article
// - s7-212: Add translateX() @article style
// - s7-212: Add 100 * personIndex @article style>transfrom>translateX()
// - s7-213: Add currentPerson state value
// - s7-213: passin currentPerson to style @article
// - s7-213: trying Add setCurrentPerson logic @nextSlide
// - s7-213:edit setCurrentPerson logic base @nextSlide
// - s7-213:pass in oldPerson @nextSlide>setCurrentPerson
// - s7-213:cr8 result @nextSlide>setCurrentPerson
// - s7-213:cr8 result logic @nextSlide>setCurrentPerson
// - s7-213:cr8 setCurrentPerson logic @prevSlide
// - s7-213:Add oldPerson @prevSlide>setCurrentPerson
// - s7-213:cr8 result with oldPerson -1 @prevSlide>setCurrentPerson
// - s7-213:cr8 return result @prevSlide>setCurrentPerson
// - s7-213:change CN article to slide @article
// - s7-213:Add opacity logic @article
// - s7-213:Add visibility logic @article
// - s7-213:edit people state value @usestate
// - s7-213:cr8 useEffect base with callback function
// - s7-213:cr8 setInterval @useEffect
// - s7-213:Add 2000 @setInterval
