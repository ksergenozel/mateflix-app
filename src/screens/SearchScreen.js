import React, { useCallback } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import MoviesAPI from '../api/MoviesAPI';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailScreen from './MovieDetailScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SearchScreen extends React.Component {
  state = {
    query: '',
    loadingStatus: false,
    searchResults: [],
    currentPageCount: 1,
    maxPageCount: 1,
    isEmpty: false,
    firstTry: true,
  };

  async onChangeTextFunc(text) {
    if (text === '') {
      this.setState({
        searchResults: [],
        maxPageCount: 1,
        loadingStatus: false,
        isEmpty: false,
        firstTry: true,
      });
    } else {
      const response = await MoviesAPI.getSearchResults(
        this.state.query,
        this.state.currentPageCount,
      );

      this.setState({
        firstTry: false,
      });

      const results = await response.results;
      const totalPages = await response.total_pages;

      console.log(results);

      if (results.length > 0) {
        this.setState({
          isEmpty: false,
        });
      } else {
        this.setState({
          isEmpty: true,
        });
      }

      this.setState({
        searchResults: results,
        maxPageCount: totalPages,
        loadingStatus: false,
      });
    }
  }

  movieResult = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Movie Details', { id: item.id })
        }
        style={{
          width: (width - 3 * (Constants.MAIN_MARGIN_SIZE * 0.75)) * 0.5,
          marginVertical: Constants.MAIN_MARGIN_SIZE * 0.5,
          marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
        }}>
        <Image
          style={{
            width: (width - 3 * (Constants.MAIN_MARGIN_SIZE * 0.75)) * 0.5,
            height: width * 0.65,
            borderRadius: 14,
            borderColor: Colors.MAIN_BORDER_COLOR,
            borderWidth: 1.5,
            display: item.poster_path === null ? 'none' : 'flex',
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <Image
          style={{
            width: (width - 3 * (Constants.MAIN_MARGIN_SIZE * 0.75)) * 0.5,
            height: width * 0.65,
            borderRadius: 14,
            borderColor: Colors.MAIN_BORDER_COLOR,
            borderWidth: 1.5,
            display: item.poster_path === null ? 'flex' : 'none',
            resizeMode: 'center',
          }}
          source={require('../assets/images/mf-icon.png')}
        />
        <Text
          style={{
            color: Colors.TITLE_OF_SEARCH_ITEM,
            textAlign: 'center',
            width: (width - 3 * (Constants.MAIN_MARGIN_SIZE * 0.75)) * 0.5,
            marginTop: Constants.MAIN_MARGIN_SIZE * 0.5,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  loadNextDatas = async () => {
    await this.setState({
      loadingStatus: true,
    });

    var currentPage = this.state.currentPageCount;
    var nextPage = currentPage + 1;

    await this.setState({
      currentPageCount: nextPage,
    });

    if (this.state.currentPageCount <= this.state.maxPageCount) {
      const response = await MoviesAPI.getSearchResults(
        this.state.query,
        this.state.currentPageCount,
      );
      const data = await response.results;
      const maxPageCount = await response.total_pages;

      console.log(data);

      const newData = [...this.state.searchResults, ...data];

      this.setState({
        searchResults: newData,
        maxPageCount,
        loadingStatus: false,
      });
    } else {
      this.setState({
        loadingStatus: false,
      });
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.MAIN_BLACK,
        }}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialIcon
              style={{
                justifyContent: 'center',
              }}
              name="arrow-back-ios"
              color={Colors.MAIN_RED}
              size={25}
            />
          </TouchableOpacity>
          <SearchBar
            keyboardAppearance="dark"
            returnKeyType="search"
            selectionColor={Colors.MAIN_RED}
            containerStyle={styles.searchBarContainer}
            value={this.state.query}
            onChangeText={text => {
              this.setState({
                query: text,
                loadingStatus: true,
                searchResults: [],
                currentPageCount: 1,
                maxPageCount: 1,
              });
              if (this.searchWaiting) {
                clearTimeout(this.searchWaiting);
              }
              this.searchWaiting = setTimeout(() => {
                this.searchWaiting = null;
                this.onChangeTextFunc(text);
              }, 1000);
            }}
            placeholder="Search or enter movie name"
            platform="ios"
            inputStyle={{
              backgroundColor: Colors.MAIN_BORDER_COLOR,
              color: Colors.MAIN_WHITE,
              paddingRight: Constants.MAIN_MARGIN_SIZE * 0.65,
            }}
            inputContainerStyle={{
              backgroundColor: Colors.MAIN_BORDER_COLOR,
              paddingLeft: Constants.MAIN_MARGIN_SIZE * 0.15,
            }}
            placeholderTextColor={Colors.MAIN_GRAY}
            cancelButtonProps={{ color: Colors.MAIN_GRAY }}
            searchIcon={{ color: Colors.MAIN_GRAY, size: 22.5 }}
            clearIcon={{ color: Colors.MAIN_GRAY }}
            showLoading={this.state.loadingStatus}
            loadingProps={{ color: Colors.MAIN_RED }}
            round={true}
          />
        </View>

        {/* <Text
          style={{
            color: "#FFF",
            fontSize: 50,
            textAlign: "center",
            marginTop: 215,
            display: this.state.firstTry ? "flex" : "none",
          }}>
          Bir şeyler arayın.
        </Text> */}

        <View
          style={{
            width: width,
            height: width * 0.1,
            display: this.state.isEmpty ? 'flex' : 'none',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialComIcon
            style={{ marginRight: Constants.MAIN_MARGIN_SIZE * 0.25 }}
            name="progress-alert"
            color={Colors.TAB_BAR_GRAY}
            size={20}
          />
          <Text
            style={{
              color: Colors.MAIN_WHITE,
              fontSize: 16,
              color: Colors.MAIN_GRAY,
            }}>
            There are no results.
          </Text>
        </View>

        <FlatList
          contentContainerStyle={{
            paddingLeft: Constants.MAIN_MARGIN_SIZE * 0.75,
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: Constants.MAIN_MARGIN_SIZE * 1.5,
          }}
          data={this.state.searchResults}
          renderItem={this.movieResult}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0}
          onEndReached={this.loadNextDatas}
        />
      </SafeAreaView>
    );
  }
}

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: Colors.MAIN_BLACK },
  // cardStyleInterpolator: ({ current: { progress } }) => ({
  //   cardStyle: {
  //     opacity: progress.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 1],
  //     }),
  //   },
  //   overlayStyle: {
  //     opacity: progress.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 0.5],
  //       extrapolate: "clamp",
  //     }),
  //   },
  // }),
};

const SearchStack = createStackNavigator();

class SearchStackScreen extends React.Component {
  render() {
    return (
      <SearchStack.Navigator
        detachInactiveScreens={false}
        screenOptions={navigatorOptions}>
        <SearchStack.Screen name="Search Screen 2" component={SearchScreen} />
        <SearchStack.Screen
          name="Movie Details"
          component={MovieDetailScreen}
        />
      </SearchStack.Navigator>
    );
  }
}

export default SearchStackScreen;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: Colors.MAIN_BLACK,
    marginRight: Constants.MAIN_MARGIN_SIZE * 1.85,
    height: width * 0.175,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: Constants.MAIN_MARGIN_SIZE,
  },
});
