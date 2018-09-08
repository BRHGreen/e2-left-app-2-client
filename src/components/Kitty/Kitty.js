import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getAllKittyStatements, getKittyStatementsByMonth } from '../../graphql/kitty';
import Dropdown from '../Common/Dropdown'

class Kitty extends React.Component {

  state = {
    monthSelected: null,
    isOpen: false,
  }
  getDropdownItems = () => {
    const { getAllKittyStatements } = this.props
    const availableMonths = []
    if (!getAllKittyStatements.loading) {
      getAllKittyStatements.getAllKittyStatements.map(statement => {
        if (!availableMonths.includes(statement.month))
        availableMonths.push(statement.month)
      })
      return availableMonths
    }
    return null
  }

  filterState = async (monthSelected) => {
    this.setState({ monthSelected })
    await this.props.getKittyStatementsByMonth.refetch({
      month: monthSelected
    })
    console.log('this.props', this.props)
  }
  
  render() {
    const { getAllKittyStatements, getKittyStatementsByMonth, loading } = this.props
    const { isOpen } = this.state
    
    const keys = !getKittyStatementsByMonth.loading && Object.keys(getKittyStatementsByMonth.getKittyStatementsByMonth[0]).filter(key => !key.includes('__'))
    
    
    return (
      loading ? null
      : <div className="page__container">
      <Dropdown
        menuItems={this.getDropdownItems()}
        onClick={(monthSelected) => this.filterState(monthSelected)}
        // displayValue={'month'}
        header='Select Month'
        // isOpen={isOpen}
      />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {keys && keys.map((heading, i) => <th key={i}>{heading}</th>)}
            </tr>
          </thead>
          <tbody>
              {!getKittyStatementsByMonth.loading && getKittyStatementsByMonth.getKittyStatementsByMonth.map((row, i) => keys && <tr key={i}> {keys.map((_, i) => <td key={i}>{row[keys[i]]}</td>)}
              </tr>
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default compose(
  graphql(getAllKittyStatements, {
    name: 'getAllKittyStatements',
  }),
  graphql(getKittyStatementsByMonth, {
    name: 'getKittyStatementsByMonth',
    props: (props) => {
      return props
    },
    options: (props, state) => {
      
      return {variables: { month: '07/2018' }}
    }
  })
)(Kitty)