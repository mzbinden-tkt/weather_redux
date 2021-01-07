import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { getWeatherCities, getCity } from './../reducers'
import {setSelectedCity, setWeather} from '../actions'


class LocationListContainer extends Component {
  
  componentDidMount(){
    const { setWeather, cities, setCity, city } = this.props
    setWeather(cities)
    setCity(city)
  }

  handleSelectedLocation = city => {
      this.props.setCity(city)
  }

  render() {
    return (
      <LocationList cities={this.props.citiesWeather} 
      onSelectedLocation={this.handleSelectedLocation} ></LocationList>
    )
  }
}
LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
}
// const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch)
const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities)),
})

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
})
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer) 
