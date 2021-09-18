import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  LogBox,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import MoviesAPI from '../api/MoviesAPI';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MovieDetailScreen from './MovieDetailScreen';

LogBox.ignoreAllLogs();

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: Colors.MAIN_BLACK },
};

class Card extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.825}
        onLongPress={() =>
          this.props.navigation.navigate('Details', { id: this.props.data.id })
        }
        style={styles.card}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: Constants.MAIN_MARGIN_SIZE * 0.5,
            width: width * 0.825,
            justifyContent: 'space-between',
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average >= 0 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 1 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 2 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 3 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 4 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 5 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 6 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 7 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                marginRight: width * 0.005,
                display: this.props.data.vote_average > 8 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
            <IonIcons
              style={{
                display: this.props.data.vote_average > 9 ? 'flex' : 'none',
                alignSelf: 'flex-end',
              }}
              name="ios-star-sharp"
              size={18}
              color={Colors.MAIN_GOLD_COLOR}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Details', {
                id: this.props.data.id,
              })
            }>
            <EntypoIcon
              name="info-with-circle"
              size={20}
              color={Colors.TAB_BAR_GRAY}
            />
          </TouchableOpacity>
        </View>

        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
            borderWidth: 1.5,
            borderColor: Colors.MAIN_BORDER_COLOR,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/original${this.props.data.poster_path}`,
          }}
        />
        <View>
          <Text
            numberOfLines={3}
            style={{
              color: Colors.MAIN_TITLE_COLOR,
              fontSize: 14.5,
              marginTop: Constants.MAIN_MARGIN_SIZE * 0.5,
              width: width * 0.825,
            }}>
            {this.props.data.overview}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class FlicksScreen extends Component {
  state = {
    cards: [],
    page: 1,
    maxPageCount: 2,
    isHidden: true,
    counter: 1,
    color: Colors.MAIN_RED,
  };

  componentDidMount = () => {
    setTimeout(async () => {
      const response = await MoviesAPI.getRandomMovies(this.state.page);
      const results = await response.results;
      const totalPages = await response.total_pages;

      this.setState({
        cards: results,
        maxPageCount: totalPages,
        isHidden: false,
      });
    }, 1250);
  };

  handleYup = (card) => {
    this.setState({
      color: Colors.MAIN_GREEN
    })
  }
  handleNope = (card) => {
    this.setState({
      color: Colors.MAIN_RED,
    })
  }

  handleRemove = async () => {
    this.setState({
      isHidden: true,
    });

    setTimeout(async () => {
      let counter = this.state.counter;
      let next = counter + 1;

      console.log('COUNTER = ', counter);

      if (next <= 20) {
        this.setState({
          counter: next,
          isHidden: false,
        });
      } else {
        this.setState({
          cards: [],
        });

        const page = this.state.page;
        const maxPageCount = this.state.maxPageCount;

        console.log('PAGE = ', page);
        console.log('MAX PAGE COUNT = ', maxPageCount);

        let response;
        let results;
        let totalPages;
        let nextPage;

        if (page + 1 < maxPageCount) {
          nextPage = page + 1;

          response = await MoviesAPI.getRandomMovies(nextPage);
          results = await response.results;
          totalPages = await response.total_pages;

          console.log('RESULTS = ', results);

          this.setState({
            counter: 1,
            page: nextPage,
            cards: results,
            maxPageCount: totalPages,
            isHidden: false,
          });
        }
      }
    }, 1250);
  };

  render() {
    return (
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.MAIN_BLACK,
        }}>
        <ActivityIndicator
          size="large"
          color={this.state.color}
          style={{
            display: this.state.isHidden ? 'flex' : 'none',
            marginBottom: Constants.MAIN_MARGIN_SIZE * 1.45,
          }}
        />

        <View
          style={{
            display: this.state.isHidden ? 'none' : 'flex',
            width: width,
            height: height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
            paddingBottom: height * 0.04,
          }}>
          <SwipeCards
            loop={true}
            // onLoop={() => this.handleRemove()}
            cards={this.state.cards}
            renderCard={data => (
              <Card data={data} navigation={this.props.navigation} />
            )}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            cardRemoved={this.handleRemove}
            showYup={false}
          
            // yupText="LIKE"
            // yupStyle={{
            //   marginBottom: height * 0.035,
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   width: width * 0.325,
            //   height: width * 0.125,
            //   borderColor: Colors.MAIN_GREEN,
            //   borderRadius: 8,
            // }}
            // yupTextStyle={{
            //   position: 'absolute',
            //   textAlign: 'center',
            //   fontSize: 17,
            //   color: Colors.MAIN_GREEN,
            //   fontWeight: '500',
            // }}
            showNope={false}
            // nopeText="DISLIKE"
            // nopeStyle={{
            //   marginBottom: height * 0.035,
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   width: width * 0.325,
            //   height: width * 0.125,
            //   borderColor: Colors.MAIN_RED,
            //   borderRadius: 8,
            // }}
            // nopeTextStyle={{
            //   position: 'absolute',
            //   textAlign: 'center',
            //   fontSize: 17,
            //   color: Colors.MAIN_RED,
            //   fontWeight: '500',
            // }}
          />
        </View>
      </View>
    );
  }
}

const FlicksStack = createStackNavigator();

class FlicksStackScreen extends React.Component {
  render() {
    return (
      <FlicksStack.Navigator
        detachInactiveScreens={false}
        screenOptions={navigatorOptions}>
        <FlicksStack.Screen name="Flicks" component={FlicksScreen} />
        <FlicksStack.Screen name="Details" component={MovieDetailScreen} />
      </FlicksStack.Navigator>
    );
  }
}

export default FlicksStackScreen;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.875,
    height: width * 1.275,
  },
});
