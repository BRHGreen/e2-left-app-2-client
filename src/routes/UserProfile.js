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
        })
        this.props.updateUserProfile({
          variables: {
            id: this.props.user.getUser.userProfile.id,
            newAge: this.state.age,
            newOccupation: this.state.occupation,
            newInterests: this.state.interests,
            newBio: this.state.bio,
          },
        })
        this.props.user.refetch()
        this.setState({ isEditing: !this.state.isEditing })
    };

    render () {
        const { user: { getUser } } = this.props
        const { isEditing } = this.state
      console.log('getUser', getUser)
        return (
            <div className="page-content">
              <h3>Your Profile:</h3>
              {getUser &&
                <div>
                {!isEditing
                    ? <div>
                        <ul>
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
                        <ul>
                          {
                            getUser.kitchenCupboard.map((kitchenCupboard, i) => (
                              <li>{kitchenCupboard.cupboardNumber}</li>
                            ))
                          }
                        </ul>
                        <button
                          className="btn"
                          onClick={() => this.setState({ isEditing: !isEditing })}
                        >Edit
                      </button>
                    </div>
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