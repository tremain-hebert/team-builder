import React from 'react';

const TeamList = props => {
    return (
        <div className='team-list'>
            {props.members && props.members.map((member, i) => (
                <div className='team-member' key ={i}>
                    <h2>Name:{member.name}</h2>
                    <h3>Role:{member.role}</h3>
                    <p>Email:{member.email}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamList;