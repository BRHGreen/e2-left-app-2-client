import React from 'react';
import { compose, graphql } from 'react-apollo';
import { createKittyStatement } from '../../graphql/kitty';
import moment from 'moment';

class KittyParser extends React.Component {
  state = {
    csvContent: ''
  }

  parseCsv = async () => {
    const allContent = this.state.csvContent.replace(/\n/g, ",").split(',')

    const splitContent = []
    
    let i, j, temparray, chunk = 6;
    for (i = 0, j = allContent.length; i < j; i += chunk) {
      temparray = allContent.slice(i, i + chunk);
      splitContent.push(temparray)
    }

    await splitContent.map((arr) => {
      console.log(moment(arr[0], "DD/MM/YYYY").format("MM/DD/YYYY"))
      
      this.props.createKittyStatement({
        variables: {
          date: moment(arr[0], "DD/MM/YYYY").format("MM/DD/YYYY"),
          counterParty: arr[1],
          reference: arr[2],
          type: arr[3],
          amount: arr[4],
          balance: arr[5],
        }
      })
    })
  }

  onChangeHandler (e) {
    this.setState({ csvContent: e.target.value })
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
)(KittyParser)