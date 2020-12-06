import React, { useState } from 'react';
import {data} from '../../../data'


const PeopleListView = () => {
    console.log(data)
    const [people, setPeople] = useState(data);
    return (
        <>
            {people.map(person => {
                return (
                    <div key={person.id} className='item'>
                        <h1> {person.name} </h1>
                        <button type='btn' onClick={event => {
                            setPeople(people.filter(i => i.id !== person.id));
                        }}>Remove person
                        </button>
                    </div>
                );
            })}
            <button type='btn' onClick={() => setPeople([])}>Clear People</button>
        </>)
};

export default PeopleListView;
