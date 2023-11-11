import PropTypes from 'prop-types'
import  './Person.css'

const Person = (props) =>{
    const {
        name,
        email
    } = props
  
    return (
        <div className="container">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

  export default Person;