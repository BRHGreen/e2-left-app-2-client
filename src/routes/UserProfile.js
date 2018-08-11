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
        const { newUsername } = this.state
        const response = await this.props.updateUser({
            variables: { id: this.props.user.getUser.id, newUsername },
            refetchQueries: [{
                query: getUser
            }]
        })
        this.setState({ isEditing: !this.state.isEditing })
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
              {console.log('getUser', Object.keys(getUser.userProfile))}
                {!isEditing
                    ? <ul>
                        <li>Username: {getUser.username}</li>
                        {
                          getUser.userProfile && Object.keys(getUser.userProfile).map((fieldLable, i) => {
                          // console.log('profileField', profileField)
                          return <li>{`${fieldLable}:`}</li>
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