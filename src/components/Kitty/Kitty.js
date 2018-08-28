import React from 'react';

class Kitty extends React.Component {

  handleSubmit (e, file) {
    e.preventDefault()
    console.log('e', e)
    console.log('file', file)
  }
  
  render() {
    return (
    <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="file" />
        <input type="submit"/>
      </form>
    </div>
  )
  }
}

export default Kitty;