import React from 'react';
import { compose, graphql } from 'react-apollo';
import { createKittyStatement } from '../../graphql/kitty';

class Kitty extends React.Component {
  state = {
    csvContent: ''
  }

  parseCsv = async () => {
    const allContent = this.state.csvContent.replace(/\n/g, ",").split(',')

    const arr = []
    
    var i, j, temparray, chunk = 6;
    for (i = 0, j = allContent.length; i < j; i += chunk) {
      temparray = allContent.slice(i, i + chunk);
      arr.push(temparray)      
    }

    console.log('arr', arr)

    // const arrs = [
    //   ["02/07/2018","A WILSON","AMY","FASTER PAYMENT",5.00,235.71,],
    //   ["02/07/2018","JOHN DARKE","house","FASTER PAYMENT",5.00,185.71]
    // ]


    // await arrs.map((arr) => {
    //   this.props.createKittyStatement({
    //     variables: {
    //       date: arr[0],
    //       counterParty: arr[1],
    //       reference: arr[2],
    //       type: arr[3],
    //       amount: arr[4],
    //       balance: arr[5],
    //     }
    //   })
    // })
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