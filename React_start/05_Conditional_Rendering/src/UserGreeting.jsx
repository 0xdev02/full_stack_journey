import propTypes from 'prop-types'
function UserGreeting(props) {

    return(props.isLoggedIn ? <h3 className="welcome-message">Hello {props.username}</h3> : <h2 className="login-message">Please login to continue</h2>);
}
UserGreeting.propTypes ={
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}
export default UserGreeting