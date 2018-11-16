import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AutoHeightImage from 'react-native-auto-height-image';

const ENTRIES = [
  {
    image: 'https://auto.ndtvimg.com/car-images/big/mercedes-benz/e-class-all-terrain/mercedes-benz-e-class-all-terrain.webp?v=4'
  },
  {
    image: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    image: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    image: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    image: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    image: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    image: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

const win = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      ENTRIES1 : ENTRIES,
    }
  }
  _renderItem({ item, index }) {
    return (
      <View>
        <AutoHeightImage
          width={300}
          source={{ uri: item.image }}/>
      </View>
    );
  }

  get pagination() {
    const { activeSlide } = this.state;
    console.log('LOGGGG',ENTRIES);
    return (
      <Pagination
        dotsLength={ENTRIES.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={this._carousel}
        tappableDots={!!this._carousel}
        
      />
    );
  }

  render() {
    return (
      <View style={styles.carouselView}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES}
          renderItem={this._renderItem}
          sliderWidth={300}
          itemWidth={300}
          //containerCustomStyle={styles.carouselContainer}
          slideStyle={styles.carouselItem} 
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
        { this.pagination }
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  carouselView: {
    padding: 20,
    borderWidth:3,
    borderColor: '#aaa',
    borderRadius: 10,
    margin:5,
  },
  carouselContainer: {
    margin: 10,
    padding: 10,
  },
  carouselItem: {
    justifyContent: 'center',
  },
});


//ref
// https://github.com/archriss/react-native-snap-carousel/blob/master/example/src/index.js#L80:L81



//run
//npm start -- --reset-cache