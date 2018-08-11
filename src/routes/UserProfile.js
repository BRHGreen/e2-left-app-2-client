import React from 'react';
import { getUser, updateUser } from '../graphql/user'
import { graphql, compose } from 'react-apollo'

class UserProfile extends React.Component {
    state = {
        isEditing: false,
        newUsername: '',
        age: '',
        occupation: '',
        interests: '',
        bio: '',
    }
    onChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    updateUser = async (event) => {
        event.preventDefault()
        console.log('getUser', this.props.user.getUser.id)
        const { newUsername } = this.state
        console.log("newUsername", newUsername)
        const response = await this.props.updateUser({
            variables: { id: this.props.user.getUser.id, newUsername },
            refetchQueries: [{
                query: getUser
            }]
        })
        this.props.history.push('/');
    };
    render () {
        const { user: { getUser } } = this.props
        const {
            isEditing,
            username,
            age,
            occupation,
            interests,
            bio,
        } = this.state
        return (
            <div className="page-content">
                <h3>Your Profile:</h3>
                <button 
                    className="btn"
                    onClick={()=> this.setState({ isEditing: !isEditing })}
                    >Edit
                    </button>
                {getUser &&
                <div>
                {!isEditing
                    ? <ul>
                        <li>Username: {getUser.username}</li>
                        {
                          getUser.userProfile && getUser.userProfile.map((profileField, i) => {
                          console.log('profileField', profileField)
                          return <li>Age: {getUser.userProfile.age}</li>
                        })
                        }
                    </ul>   
                    : <form onSubmit={this.updateUser}>
                        <label htmlFor="username">Username:</label>
                        <input
                            name="newUsername"
                            id="username"
                            onChange={this.onChange}
                            // placeholder={getUser.username}
                        />
                        <label htmlFor="age">Age:</label>
                        <input
                            name="age"
                            id="age"
                            onChange={this.onChange}
                            // placeholder={getUser.userProfile.age}
                        />
                        <label htmlFor="occupation">Occupation:</label>
                        <input
                            name="occupation"
                            id="occupation"
                            onChange={this.onChange}
                            // placeholder={getUser.userProfile.occupation}
                        />
                        <label htmlFor="interests">Interests:</label>
                        <input
                            name="interests"
                            id="interests"
                            onChange={this.onChange}
                            // placeholder={getUser.userProfile.interests}
                        />
                        <label htmlFor="bio">Bio:</label>
                        <input
                            name="bio"
                            id="bio"
                            onChange={this.onChange}
                            // placeholder={getUser.userProfile.bio}
                        />
                        <button className="btn">Done</button>
                    </form>
                    }
                </div>
                }
            </div>
        )
    }
}

const UserProfilerWithMutations = compose(
    graphql(getUser, { name: "user" }),
    graphql(updateUser, { name: "updateUser" })
)(UserProfile)

export default UserProfilerWithMutations;