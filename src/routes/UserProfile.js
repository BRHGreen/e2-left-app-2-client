import React from 'react';
import { getUser, updateUser, updateUserProfile } from '../graphql/user'
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
        this.setState({ [name]: value })
    }
    
    
    updateUser = async (e) => {
        e.preventDefault()
        const { username } = this.state
        const response = await this.props.updateUser({
            variables: { id: this.props.user.getUser.id, newUsername: username },
            refetchQueries: [{
                query: getUser
            }]
        })
        this.props.updateUserProfile({
            variables: { 
              id: this.props.user.getUser.userProfile.id,
              newAge: this.state.age,
            },
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
                {!isEditing
                    ? <ul>
                        <li>Username: {getUser.username}</li>
                        {
                          getUser.userProfile && Object.keys(getUser.userProfile)
                            .map((fieldLable, i) => {
                              if (!fieldLable.includes('_') && !fieldLable.includes('id')) {
                                return <li key={i}>{`${fieldLable}: ${getUser.userProfile[fieldLable] || ""}`}</li>
                              }
                            }
                          )
                      }
                    </ul>
                    : <form onSubmit={this.updateUser}>
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            id="username"
                            onChange={(e) => this.onChange(e)}
                            value={this.state.username}
                            placeholder="username"
                        />
                        {
                          getUser.userProfile && Object.keys(getUser.userProfile)
                            .map((inputContent, i) => {
                              if (!inputContent.includes('_') && !inputContent.includes('id')) {
                              console.log('inputContent', inputContent)
                              return [
                                <label key={`label-${i}`} htmlFor={inputContent}>{inputContent}</label>,
                                <input
                                  key={`input-${i}`}
                                  name={inputContent}
                                  id={inputContent}
                                  onChange={(e) => this.onChange (e)}
                                  value={this.state[inputContent]}
                                  placeholder={inputContent}
                                />
                              ]
                            }
                          }
                        )}
                        {/* <label htmlFor="age">Age:</label>
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
                        /> */}
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
    graphql(updateUser, { name: "updateUser" }),
    graphql(updateUserProfile, { name: "updateUserProfile" })
)(UserProfile)

export default UserProfilerWithMutations;