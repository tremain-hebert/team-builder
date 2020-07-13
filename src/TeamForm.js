import React from 'react';

const TeamForm = props => {
    const defaultState = {name: '', role: '', email: ''};
    cosnt [newMember, setNewMember] = React.useState(defaultState);

    const handleChange = event => {
        console.log(event.target.value);
        setNewMember({
            ...newMember,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.perventDefault();
        setNewMember(defaultState);
        props.setNewMember([...props.Teamlist, newMember]);
    };

    const [name, setName] = React.useState('');
    const [role, setRole] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleName = event => setName(event.target.value);
    const handleRole = event => setRole(event.target.value);
    const handleEmail = event => setEmail(event.taget.value);

    const handleSubmit = event => {
        event.perventDefault();
        if (name && role && email) {
            props.setNewMember([...props.newMember {name, role, email}]);
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
            value={value}
            placeholder='email'
            />
        </form>
    );
};

export default TeamForm;