import React from 'react';
import { compose, graphql } from 'react-apollo';
import { createKittyStatement } from '../../graphql/kitty';

class Kitty extends React.Component {
  state = {
    csvContent: ''
  }

  parseCsv = async () => {
    // console.log('this.state', this.state.csvContent)
    const arr = [this.state.csvContent]
    // console.log('arr', arr)
    console.log('split',this.state.csvContent.split(",", 6))
    const fields = this.state.csvContent.split(",", 6)
    console.log('fields', fields)
    await this.props.createKittyStatement({
      variables: {
        date: fields[0],
        counterParty: fields[1],
        reference: fields[2],
        type: fields[3],
        amount: fields[4],
        balance: fields[5],
      }
    })
  }

  onChangeHandler (e) {
    this.setState({ csvContent: e.target.value })
    console.log('this.state', this.state.csvContent)
  }
  
  render() {
    console.log(this.props)
    return (
      <div className='page__container'>
        <textarea style={{height: '500px', width: '500px'}} onChange={(e) => this.onChangeHandler(e)}/>
        <br />
        <button onClick={() => this.parseCsv()}>Parse</button>
      </div>
    )
  }
}

export default compose(
  graphql(createKittyStatement,
    {name: 'createKittyStatement'}
  )
)(Kitty)