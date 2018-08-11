import React from 'react';
import { getUser, updateUser } from '../graphql/user'
import { graphql, compose } from 'react-apollo'

class UserProfile extends React.Component {

  state = {
      isEditing: false,
      username: null,
      age: null,
      occupation: null,
      interests: null,
      bio: null,
    }
  

  componentWillReceiveProps(props) {
    const { user: { getUser: { userProfile } } } = props
      this.setState({
        username: props.user.getUser.username || '',
        age: userProfile.age || '',
        occupation: userProfile.occupation || '',
        interests: userProfile.interests || '',
        bio: userProfile.bio || '',
      })
  }

    onChange = (e) => {
        const { name, value } = e.target
        console.log('value', value)
        console.log('name', name)
        this.setState({ [name]: value })
    }
    updateUser = async (event) => {
        event.preventDefault()
        const { username } = this.state
        const response = await this.props.updateUser({
            variables: { id: this.props.user.getUser.id, newUsername: username },
            refetchQueries: [{
                query: getUser
            }]
        })
        this.setState({ isEditing: !this.state.isEditing })
    };

    render () {
      console.log('state', this.state)

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
                          getUser.userProfile && Object.keys(getUser.userProfile)
                            .filter(key => !key.includes('_'))
                            .map((fieldLable, i) => (
                              <li key={i}>{`${fieldLable}: ${getUser.userProfile[fieldLable] || ""}`}</li>
                            )
                          )
                      }
                    </ul>   
                    : <form onSubmit={this.updateUser}>
                    console.log(getUser)
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            id="username"
                            onChange={(e) => this.onChange(e)}
                            value={this.state.username}
                            placeholder="username"
                        />
                        <label htmlFor="age">Age:</label>
                        <input
                            name="age"
                            id="age"
                            onChange={this.onChange}
                            value={this.state.age}
                            placeholder="age"
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