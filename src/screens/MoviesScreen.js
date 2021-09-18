import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, PureComponent } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import MovieDetailScreen from './MovieDetailScreen';
import MoviesAPI from '../api/MoviesAPI';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: Colors.MAIN_BLACK },
};

class MoviesScreen extends React.Component {
  state = {
    nowPlayingMoviesData: [],
    nowPlayingMoviesCurrentPageCount: 1,
    nowPlayingMoviesMaxPageCount: 1,
    nowPlayingMoviesLoaded: false,

    upcomingMoviesData: [],
    upcomingMoviesCurrentPageCount: 1,
    upcomingMoviesMaxPageCount: 1,
    upcomingMoviesLoaded: false,

    topRatedMoviesData: [],
    topRatedMoviesCurrentPageCount: 1,
    topRatedMoviesMaxPageCount: 1,
    topRatedMoviesLoaded: false,

    popularMoviesData: [],
    popularMoviesCurrentPageCount: 1,
    popularMoviesMaxPageCount: 1,
    popularMoviesLoaded: false,
  };

  async componentDidMount() {
    const nowPlayingMoviesResponse = await MoviesAPI.getNowPlayingMovies(
      this.state.nowPlayingMoviesCurrentPageCount,
    );
    const nowPlayingMoviesData = await nowPlayingMoviesResponse.results;
    const nowPlayingMoviesMaxPageCount =
      await nowPlayingMoviesResponse.total_pages;

    const upcomingMoviesResponse = await MoviesAPI.getUpcomingMovies(
      this.state.upcomingMoviesCurrentPageCount,
    );
    const upcomingMoviesData = await upcomingMoviesResponse.results;
    const upcomingMoviesMaxPageCount = await upcomingMoviesResponse.total_pages;

    const topRatedMoviesResponse = await MoviesAPI.getTopRatedMovies(
      this.state.topRatedMoviesCurrentPageCount,
    );
    const topRatedMoviesData = await topRatedMoviesResponse.results;
    const topRatedMoviesMaxPageCount = await topRatedMoviesResponse.total_pages;

    const popularMoviesResponse = await MoviesAPI.getPopularMovies(
      this.state.popularMoviesCurrentPageCount,
    );
    const popularMoviesData = await popularMoviesResponse.results;
    const popularMoviesMaxPageCount = await popularMoviesResponse.total_pages;

    this.setState({
      nowPlayingMoviesData,
      nowPlayingMoviesMaxPageCount,
      nowPlayingMoviesLoaded: true,

      upcomingMoviesData,
      upcomingMoviesMaxPageCount,
      upcomingMoviesLoaded: true,

      topRatedMoviesData,
      topRatedMoviesMaxPageCount,
      topRatedMoviesLoaded: true,

      popularMoviesData,
      popularMoviesMaxPageCount,
      popularMoviesLoaded: true,
    });
  }

  nowPlayingMovieItem = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.625 + Constants.MAIN_MARGIN_SIZE * 0.75,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Movie Details', { id: item.id })
          }
          style={styles.movieListItem}>
          <Image
            style={[
              styles.movieListItemImage,
              { display: item.poster_path ? 'flex' : 'none' },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }}
          />
          <Image
            style={[
              styles.movieListItemImage,
              {
                display: item.poster_path ? 'none' : 'flex',
                resizeMode: 'center',
              },
            ]}
            source={require('../assets/images/mf-icon.png')}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {item.title}
        </Text>
      </View>
    );
  };

  upcomingMovieItem = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.725 + Constants.MAIN_MARGIN_SIZE * 0.75,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Movie Details', { id: item.id })
          }
          style={styles.movieListItemSmall}>
          <Image
            style={[
              styles.movieListItemImageSmall,
              { display: item.backdrop_path ? 'flex' : 'none' },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
            }}
          />
          <Image
            style={[
              styles.movieListItemImageSmall,
              {
                display: item.backdrop_path ? 'none' : 'flex',
                resizeMode: 'center',
              },
            ]}
            source={require('../assets/images/mf-icon.png')}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {item.title}
        </Text>
      </View>
    );
  };

  topRatedMovieItem = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.725 + Constants.MAIN_MARGIN_SIZE * 0.75,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Movie Details', { id: item.id })
          }
          style={styles.movieListItemSmall}>
          <Image
            style={[
              styles.movieListItemImageSmall,
              { display: item.backdrop_path ? 'flex' : 'none' },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
            }}
          />
          <Image
            style={[
              styles.movieListItemImageSmall,
              {
                display: item.backdrop_path ? 'none' : 'flex',
                resizeMode: 'center',
              },
            ]}
            source={require('../assets/images/mf-icon.png')}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {item.title}
        </Text>
      </View>
    );
  };

  popularMovieItem = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.725 + Constants.MAIN_MARGIN_SIZE * 0.75,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Movie Details', { id: item.id })
          }
          style={styles.movieListItemSmall}>
          <Image
            style={[
              styles.movieListItemImageSmall,
              { display: item.backdrop_path ? 'flex' : 'none' },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
            }}
          />
          <Image
            style={[
              styles.movieListItemImageSmall,
              {
                display: item.backdrop_path ? 'none' : 'flex',
                resizeMode: 'center',
              },
            ]}
            source={require('../assets/images/mf-icon.png')}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.movieTitle}>
          {item.title}
        </Text>
      </View>
    );
  };

  loadNextPageForNowPlayingMovies = async () => {
    await this.setState({
      nowPlayingMoviesLoaded: false,
    });

    var currentPage = this.state.nowPlayingMoviesCurrentPageCount;
    var nextPage = currentPage + 1;

    await this.setState({
      nowPlayingMoviesCurrentPageCount: nextPage,
    });

    if (
      this.state.nowPlayingMoviesCurrentPageCount <=
      this.state.nowPlayingMoviesMaxPageCount
    ) {
      const nowPlayingMoviesResponse = await MoviesAPI.getNowPlayingMovies(
        this.state.nowPlayingMoviesCurrentPageCount,
      );
      const nowPlayingMoviesData = await nowPlayingMoviesResponse.results;
      const nowPlayingMoviesMaxPageCount =
        await nowPlayingMoviesResponse.total_pages;

      const newData = [
        ...this.state.nowPlayingMoviesData,
        ...nowPlayingMoviesData,
      ];

      this.setState({
        nowPlayingMoviesData: newData,
        nowPlayingMoviesMaxPageCount,
        nowPlayingMoviesLoaded: true,
      });
    }
  };

  loadNextPageForUpcomingMovies = async () => {
    await this.setState({
      upcomingMoviesLoaded: false,
    });

    var currentPage = this.state.upcomingMoviesCurrentPageCount;
    var nextPage = currentPage + 1;

    await this.setState({
      upcomingMoviesCurrentPageCount: nextPage,
    });

    if (
      this.state.upcomingMoviesCurrentPageCount <=
      this.state.upcomingMoviesMaxPageCount
    ) {
      const upcomingMoviesResponse = await MoviesAPI.getUpcomingMovies(
        this.state.upcomingMoviesCurrentPageCount,
      );
      const upcomingMoviesData = await upcomingMoviesResponse.results;
      const upcomingMoviesMaxPageCount =
        await upcomingMoviesResponse.total_pages;

      const newData = [...this.state.upcomingMoviesData, ...upcomingMoviesData];

      this.setState({
        upcomingMoviesData: newData,
        upcomingMoviesMaxPageCount,
        upcomingMoviesLoaded: true,
      });
    }
  };

  loadNextPageForTopRatedMovies = async () => {
    await this.setState({
      topRatedMoviesLoaded: false,
    });

    var currentPage = this.state.topRatedMoviesCurrentPageCount;
    var nextPage = currentPage + 1;

    await this.setState({
      topRatedMoviesCurrentPageCount: nextPage,
    });

    if (
      this.state.topRatedMoviesCurrentPageCount <=
      this.state.topRatedMoviesMaxPageCount
    ) {
      const topRatedMoviesResponse = await MoviesAPI.getTopRatedMovies(
        this.state.topRatedMoviesCurrentPageCount,
      );
      const topRatedMoviesData = await topRatedMoviesResponse.results;
      const topRatedMoviesMaxPageCount =
        await topRatedMoviesResponse.total_pages;

      const newData = [...this.state.topRatedMoviesData, ...topRatedMoviesData];

      this.setState({
        topRatedMoviesData: newData,
        topRatedMoviesMaxPageCount,
        topRatedMoviesLoaded: true,
      });
    }
  };

  loadNextPageForPopularMovies = async () => {
    await this.setState({
      popularMoviesLoaded: false,
    });

    var currentPage = this.state.popularMoviesCurrentPageCount;
    var nextPage = currentPage + 1;

    await this.setState({
      popularMoviesCurrentPageCount: nextPage,
    });

    if (
      this.state.popularMoviesCurrentPageCount <=
      this.state.popularMoviesMaxPageCount
    ) {
      const popularMoviesResponse = await MoviesAPI.getPopularMovies(
        this.state.popularMoviesCurrentPageCount,
      );
      const popularMoviesData = await popularMoviesResponse.results;
      const popularMoviesMaxPageCount = await popularMoviesResponse.total_pages;

      const newData = [...this.state.popularMoviesData, ...popularMoviesData];

      this.setState({
        popularMoviesData: newData,
        popularMoviesMaxPageCount,
        popularMoviesLoaded: true,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: Constants.MAIN_MARGIN_SIZE,
            }}>
            <Image
              style={styles.appIcon}
              source={require('../assets/images/mf-icon.png')}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Search Screen')}>
              <IonIcons
                style={{
                  justifyContent: 'center',
                  marginTop: Constants.MAIN_MARGIN_SIZE,
                  marginBottom: Constants.MAIN_MARGIN_SIZE,
                  marginRight: Constants.MAIN_MARGIN_SIZE,
                }}
                name="ios-search"
                color={Colors.MAIN_ICON_COLOR}
                size={30}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.moviesContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.mainTitle}>Now Playing</Text>
              <ActivityIndicator
                size="large"
                color={Colors.MAIN_RED}
                style={{
                  marginLeft: Constants.MAIN_MARGIN_SIZE * 0.5,
                  marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
                  display: this.state.nowPlayingMoviesLoaded ? 'none' : 'flex',
                }}
              />
            </View>
            <FlatList
              ListHeaderComponent={<View />}
              ListHeaderComponentStyle={{
                width: Constants.MAIN_MARGIN_SIZE * 0.75,
                height: '100%',
              }}
              data={this.state.nowPlayingMoviesData}
              renderItem={this.nowPlayingMovieItem}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              style={styles.movieList}
              horizontal
              onEndReachedThreshold={0}
              onEndReached={this.loadNextPageForNowPlayingMovies}
            />
          </View>

          <View style={styles.moviesContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.mainTitle}>Upcoming</Text>
              <ActivityIndicator
                size="large"
                color={Colors.MAIN_RED}
                style={{
                  marginLeft: Constants.MAIN_MARGIN_SIZE * 0.5,
                  marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
                  display: this.state.upcomingMoviesLoaded ? 'none' : 'flex',
                }}
              />
            </View>
            <FlatList
              ListHeaderComponent={<View />}
              ListHeaderComponentStyle={{
                width: Constants.MAIN_MARGIN_SIZE * 0.75,
                height: '100%',
              }}
              data={this.state.upcomingMoviesData}
              renderItem={this.upcomingMovieItem}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              style={styles.movieList}
              horizontal
              onEndReachedThreshold={0}
              onEndReached={this.loadNextPageForUpcomingMovies}
            />
          </View>

          <View style={styles.moviesContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.mainTitle}>Top Rated</Text>
              <ActivityIndicator
                size="large"
                color={Colors.MAIN_RED}
                style={{
                  marginLeft: Constants.MAIN_MARGIN_SIZE * 0.5,
                  marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
                  display: this.state.topRatedMoviesLoaded ? 'none' : 'flex',
                }}
              />
            </View>
            <FlatList
              ListHeaderComponent={<View />}
              ListHeaderComponentStyle={{
                width: Constants.MAIN_MARGIN_SIZE * 0.75,
                height: '100%',
              }}
              data={this.state.topRatedMoviesData}
              renderItem={this.topRatedMovieItem}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              style={styles.movieList}
              horizontal
              onEndReachedThreshold={0}
              onEndReached={this.loadNextPageForTopRatedMovies}
            />
          </View>

          <View style={styles.moviesContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.mainTitle}>Popular</Text>
              <ActivityIndicator
                size="large"
                color={Colors.MAIN_RED}
                style={{
                  marginLeft: Constants.MAIN_MARGIN_SIZE * 0.5,
                  marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
                  display: this.state.popularMoviesLoaded ? 'none' : 'flex',
                }}
              />
            </View>
            <FlatList
              ListHeaderComponent={<View />}
              ListHeaderComponentStyle={{
                width: Constants.MAIN_MARGIN_SIZE * 0.75,
                height: '100%',
              }}
              data={this.state.popularMoviesData}
              renderItem={this.popularMovieItem}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              style={styles.movieList}
              horizontal
              onEndReachedThreshold={0}
              onEndReached={this.loadNextPageForPopularMovies}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const MoviesStack = createStackNavigator();

class MoviesStackScreen extends React.Component {
  render() {
    return (
      <MoviesStack.Navigator
        detachInactiveScreens={false}
        screenOptions={navigatorOptions}>
        <MoviesStack.Screen name="Movies List" component={MoviesScreen} />
        <MoviesStack.Screen name="Search Screen" component={SearchScreen} />

        <MoviesStack.Screen
          name="Movie Details"
          component={MovieDetailScreen}
        />
      </MoviesStack.Navigator>
    );
  }
}

export default MoviesStackScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.MAIN_BLACK,
  },
  appIcon: {
    width: width * 0.1,
    height: width * 0.075,
    resizeMode: 'contain',
    marginLeft: Constants.MAIN_MARGIN_SIZE,
    marginTop: Constants.MAIN_MARGIN_SIZE,
    marginBottom: Constants.MAIN_MARGIN_SIZE,
  },
  moviesContainer: {
    width: width,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: Constants.MAIN_MARGIN_SIZE * 2,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.MAIN_WHITE,
    marginLeft: Constants.MAIN_MARGIN_SIZE,
    marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
  },
  movieList: {
    width: width,
  },
  movieListItem: {
    width: width * 0.625,
    height: width * 0.95,
    marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
  },
  movieListItemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 18,
    borderColor: Colors.MAIN_BORDER_COLOR,
    borderWidth: 2,
  },
  movieListItemSmall: {
    width: width * 0.725,
    height: width * 0.475,
    marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
  },
  movieListItemImageSmall: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 18,
    borderColor: Colors.MAIN_BORDER_COLOR,
    borderWidth: 2,
  },
  movieTitle: {
    width: '72.5%',
    fontSize: 15,
    color: Colors.MAIN_TITLE_COLOR,
    marginTop: Constants.MAIN_MARGIN_SIZE * 0.35,
    marginLeft: Constants.MAIN_MARGIN_SIZE * 0.35,
  },
});
