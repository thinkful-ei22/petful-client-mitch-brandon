import React from 'react';
import './Pet.css';
//backend provides one animal at a time, once you hit adopt it activates delete and 
// fetches next animal from the queue
export default function Pet(props) {
  return (
    <section className="petToAdopt">
      <header>
        <h1>{props.petToAdopt.name}</h1>
        <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription}/>
      </header>
      <main>
        <dl>
          <dt>Gender</dt>
          <dd>{props.petToAdopt.sex}</dd>
          <dt>Age</dt>
          <dd>{props.petToAdopt.age}</dd>
          <dt>Breed</dt>
          <dd>{props.petToAdopt.breed}</dd>
          <dt>Story</dt>
          <dd>{props.petToAdopt.story}</dd>
        </dl>
        <button type="button" onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  );
}