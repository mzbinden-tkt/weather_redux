import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ForecastExtended from '../components/ForecastExtended'
import {getForecastDataCities, getCity} from './../reducers'

class ForecastExtendContainer extends Component {
  render() {
    const {city, forecastData} = this.props
    return (
      city && 
      <ForecastExtended city={city} forecastData={forecastData}/>
    )
  }
}
ForecastExtendContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
}
const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataCities(state, state)})

export default connect(mapStateToProps, null)(ForecastExtendContainer)
