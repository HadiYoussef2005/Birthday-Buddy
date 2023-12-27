import React, { useState } from 'react';
import { data } from './data';

const Birthdays = () => {
    const [people, setPeople] = useState(data);
    const clearValues = () => {
        setPeople([])
    }
    const filterPlayer = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    const returnAll = () => {
        setPeople(data);
    }
    let array_length = data.length;
    console.log(array_length);

    return (
        <>
            {
                <h2>{people.length} birthdays today</h2>}
                {
                people.map((person)=> {
                    const {id, name, age, img} = person;
                    return <div key={id} className="item">
                        <div className="imageContainer">
                            <img className="pfp" src={img} />
                        </div>
                        <div className="textContainer">
                            <h4 style={{marginBottom: 8}}>{name}</h4>
                            <h4 style={{marginTop: 2}}>{age}</h4>
                        </div>
                        <button type="button" className="btn2" onClick={() => filterPlayer(person.id)}>Remove Player</button>
                    </div>
                })}

            <button type="button" className="btn" onClick={clearValues}>
                Clear All
            </button>

            <button type="button" className="btn" onClick={returnAll}>
                Return All
            </button>
        </>
    );
}

export default Birthdays;
