import React from 'react';
//backend provides one animal at a time, once you hit adopt it activates delete and 
// fetches next animal from the queue
export default function Pet(props) {
  console.log(props.petToAdopt);
  return (
    <section className="petToAdopt">
      <header>
        <h1>{props.petToAdopt[1].name}</h1>
        <img src={props.petToAdopt[1].imageURL} alt={props.petToAdopt[1].imageDescription}/>
      </header>
      <main>
        <dl>
          <dt>Gender</dt>
          <dd>{props.petToAdopt[1].sex}</dd>
          <dt>Age</dt>
          <dd>{props.petToAdopt[1].age}</dd>
          <dt>Breed</dt>
          <dd>{props.petToAdopt[1].breed}</dd>
          <dt>Story</dt>
          <dd>{props.petToAdopt[1].story}</dd>
        </dl>
        <button type="button" onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  );
}