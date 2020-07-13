import React from 'react';

const TeamForm = props => {

    const [name, setName] = React.useState('');
    const [role, setRole] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleName = event => setName(event.target.value);
    const handleRole = event => setRole(event.target.value);
    const handleEmail = event => setEmail(event.target.value);

    const handleSubmit = event => {
        event.perventDefault();
        if (name && role && email) {
            props.setMembers([...props.members, {name, role, email}]);
            resetState();
        }
    };
    const resetState= () => {
        setName('');
        setRole('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleName}
            type='text'
            name='name'
            value={name}
            placeholder='name'
            />
            <input 
            onChange={handleRole}
            type='text'
            name='role'
            value={role}
            placeholder='role'
             />
            <input
            onChange={handleEmail}
            type='text'
            name='name'
            value={email}
            placeholder='email'
            />
            <button type='submit'>Add Member</button>
        </form>
    );
};

export default TeamForm;