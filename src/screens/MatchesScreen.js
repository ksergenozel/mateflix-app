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
import ForeignProfileScreen from './ForeignProfileScreen';

LogBox.ignoreAllLogs();

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: Colors.MAIN_BLACK },
  presentation: 'modal',
};

class Card extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.825} onLongPress={() => this.props.navigation.navigate('Foreign Profile')} style={styles.card}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: Constants.MAIN_MARGIN_SIZE * 0.5,
            width: width * 0.825,
            justifyContent: 'space-between',
          }}>
          <View />

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Foreign Profile')}>
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
          <View
            style={{
              width: width * 0.825,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Constants.MAIN_MARGIN_SIZE * 0.675,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: Colors.MAIN_WHITE,
                fontSize: 20,
              }}>
              Alexandra, 24
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <IonIcons
                style={{
                  marginRight: Constants.MAIN_MARGIN_SIZE * 0.2,
                }}
                name="ios-location-sharp"
                size={17.5}
                color={Colors.MAIN_GRAY}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: Colors.MAIN_GRAY,
                  fontSize: 15,
                }}>
                Ukraine, Odessa
              </Text>
            </View>
          </View>

          <Text
            numberOfLines={3}
            style={{
              color: Colors.MAIN_TITLE_COLOR,
              fontSize: 14.5,
              marginTop: Constants.MAIN_MARGIN_SIZE * 0.225,
              width: width * 0.825,
            }}>
            {this.props.data.overview}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MatchesScreen extends Component {
  state = {
    cards: [],
    isHidden: true,
    color: Colors.MAIN_RED,
  };

  componentDidMount = () => {
    setTimeout(async () => {
      const response = await MoviesAPI.getRandomMovies(1);
      const results = await response.results;

      this.setState({
        cards: results,
        isHidden: false,
      });
    }, 1250);
  };

  handleYup = card => {
    this.setState({
      color: Colors.MAIN_GREEN,
    });
  };

  handleNope = card => {
    this.setState({
      color: Colors.MAIN_RED,
    });
  };

  handleRemove = async () => {
    this.setState({
      isHidden: true,
    });

    setTimeout(async () => {
      this.setState({
        cards: [],
      });

      const response = await MoviesAPI.getRandomMovies(1);
      const results = await response.results;

      this.setState({
        cards: results,
        isHidden: false,
      });
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

const ForeignProfileStack = createStackNavigator();

class ForeignProfileStackScreen extends React.Component {
  render() {
    return (
      <ForeignProfileStack.Navigator
        detachInactiveScreens={false}
        screenOptions={navigatorOptions}>
        <ForeignProfileStack.Screen name="Matches" component={MatchesScreen} />
        <ForeignProfileStack.Screen name="Foreign Profile" component={ForeignProfileScreen} modal />
      </ForeignProfileStack.Navigator>
    );
  }
}

export default ForeignProfileStackScreen;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.875,
    height: width * 0.875,
  },
});
