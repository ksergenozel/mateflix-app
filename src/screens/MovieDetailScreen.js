import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MoviesAPI from '../api/MoviesAPI';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class MovieDetailScreen extends React.Component {
  state = {
    contentLoaded: false,
    decision: '',
    idOfCurrentMovie: '',
    genreOfMovie: '',
    releaseYear: '',
    runtimeOfMovie: '',
    starCount: 0,
    movieData: [],
    peopleData: [],
    videoData: [],
  };

  async componentDidMount() {
    if (!this.props.route.params.id) {
      this.props.navigation.goBack();
    } else {
      await this.setState({
        contentLoaded: false,
        idOfCurrentMovie: this.props.route.params.id.toString(),
      });

      if (this.state.idOfCurrentMovie === '') {
        this.props.navigation.goBack();
      } else {
        const response = await MoviesAPI.getDetailsForMovie(
          this.state.idOfCurrentMovie,
        );

        let genre = '';

        if (response.genres.length > 0 && response.genres.length != null) {
          genre = await response.genres[0].name;
        }

        let year = '';

        if (response.release_date != '' && response.release_date != null) {
          year = await response.release_date.split('-')[0];
        }

        let runtime = '';
        let runtimeExpression = '';

        if (response.runtime != 0 && response.runtime != null) {
          runtime = parseInt(response.runtime);

          const minutes = runtime % 60;
          const hours = Math.floor(runtime / 60);

          if (minutes > 0 && hours > 0) {
            if (minutes > 1 && hours > 1) {
              runtimeExpression = `${hours} hours ${minutes} minutes`;
            } else if (minutes === 1 && hours > 1) {
              runtimeExpression = `${hours} hours ${minutes} minute`;
            } else if (minutes === 1 && hours === 1) {
              runtimeExpression = `${hours} hour ${minutes} minute`;
            } else if (minutes > 1 && hours === 1) {
              runtimeExpression = `${hours} hour ${minutes} minutes`;
            }
          } else if (minutes > 0 && hours === 0) {
            if (minutes > 1) {
              runtimeExpression = `${minutes} minutes`;
            } else {
              runtimeExpression = `${minutes} minute`;
            }
          } else if (minutes === 0 && hours > 0) {
            if (hours > 1) {
              runtimeExpression = `${hours} hours`;
            } else {
              runtimeExpression = `${hours} hour`;
            }
          }
        }

        let vote = 0;

        if (response.vote_average != '' && response.vote_average != null) {
          vote = parseInt(response.vote_average);
        }

        const allCrew = await MoviesAPI.getCastOfMovie(
          this.state.idOfCurrentMovie,
        );

        const cast = await allCrew.cast;

        const videosData = await MoviesAPI.getVideosOfMovie(
          this.state.idOfCurrentMovie,
        );
        const videos = await videosData.results;

        this.setState({
          movieData: response,
          genreOfMovie: genre,
          releaseYear: year,
          runtimeOfMovie: runtimeExpression,
          starCount: vote,
          peopleData: cast,
          videoData: videos,
          contentLoaded: true,
        });
      }
    }
  }

  peopleRenderItem = ({ item }) => {
    return (
      <View style={{ display: item.profile_path ? 'flex' : 'none' }}>
        <Image
          style={styles.listItem}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
          }}
        />
        <Text numberOfLines={2} style={styles.listText}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={[
            styles.listText,
            {
              color: Colors.MAIN_TITLE_COLOR,
              marginTop: Constants.MAIN_MARGIN_SIZE * 0.15,
            },
          ]}>
          {item.character}
        </Text>
      </View>
    );
  };

  videoRow = () => {
    const videosArray = this.state.videoData;
    videosArray.forEach(videoData => {
      return (
        <View>
          <Text style={{ color: Colors.MAIN_WHITE, fontSize: 30 }}>
            {videoData.name}
          </Text>
          <IonIcons name="ios-videocam" size={35} color="E50914" />
        </View>
      );
    });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: Colors.MAIN_BLACK,
        }}>
        <ActivityIndicator
          size="large"
          color={Colors.MAIN_RED}
          style={{
            display: this.state.contentLoaded ? 'none' : 'flex',
          }}
        />

        <View
          style={[
            styles.header,
            { display: this.state.contentLoaded ? 'flex' : 'none' },
          ]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialIcon
              style={{
                justifyContent: 'center',
                display: this.state.contentLoaded ? 'flex' : 'none',
              }}
              name="arrow-back-ios"
              color={Colors.MAIN_RED}
              size={25}
            />
          </TouchableOpacity>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => this.setState({ decision: 'DISLIKE' })}
              style={[
                styles.button,
                {
                  backgroundColor:
                    this.state.decision === 'DISLIKE'
                      ? Colors.MAIN_WHITE
                      : 'transparent',
                  minWidth: width * 0.125,
                  display: 'flex',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.buttonText}>DISLIKE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ decision: 'LIKE' })}
              style={[
                styles.button,
                {
                  backgroundColor:
                    this.state.decision === 'LIKE'
                      ? Colors.MAIN_WHITE
                      : 'transparent',
                  minWidth: width * 0.125,
                  display: 'flex',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.buttonText}>LIKE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.contentContainer,
            { display: this.state.contentLoaded ? 'flex' : 'none' },
          ]}>
          <Text style={styles.mainTitle}>
            {this.state.movieData.title
              ? this.state.movieData.title
              : 'No title.'}
          </Text>

          <Text style={styles.tagTitle}>
            {this.state.movieData.tagline
              ? this.state.movieData.tagline
              : 'No subtitle.'}
          </Text>

          <Image
            style={[
              styles.backDropImage,
              { display: this.state.movieData.backdrop_path ? 'flex' : 'none' },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/original${this.state.movieData.backdrop_path}`,
            }}
          />

          <Image
            style={[
              styles.backDropImage,
              {
                display: this.state.movieData.backdrop_path ? 'none' : 'flex',
                resizeMode: 'center',
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.75,
              },
            ]}
            source={require('../assets/images/mf-icon.png')}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: Constants.MAIN_MARGIN_SIZE * 1.25,
              width: '85%',
              marginTop: Constants.MAIN_MARGIN_SIZE * 1.75,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.925,
              overflow: 'hidden',
            }}>
            <MaterialIcon
              style={{
                justifyContent: 'center',
                display: this.state.contentLoaded ? 'flex' : 'none',
              }}
              name="grain"
              color={Colors.TAB_BAR_GRAY}
              size={17.5}
            />

            <Text style={styles.sectionTitle}>Overview</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: Constants.MAIN_MARGIN_SIZE,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
              width: '90%',
            }}>
            <Text style={styles.contentText}>
              {this.state.genreOfMovie ? this.state.genreOfMovie : 'No genre'}
            </Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.contentText}>
              {this.state.releaseYear
                ? this.state.releaseYear
                : 'No release year'}
            </Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.contentText}>
              {this.state.runtimeOfMovie
                ? this.state.runtimeOfMovie
                : 'No runtime'}
            </Text>
          </View>

          <Text style={styles.descriptionText}>
            {this.state.movieData.overview
              ? this.state.movieData.overview
              : 'No description.'}
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: Constants.MAIN_MARGIN_SIZE,
              width: '90%',
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount >= 0 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 1 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 2 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 3 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 4 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 5 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 6 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 7 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{
                  marginRight: width * 0.005,
                  display: this.state.starCount > 8 ? 'flex' : 'none',
                }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
              <IonIcons
                style={{ display: this.state.starCount > 9 ? 'flex' : 'none' }}
                name="ios-star-sharp"
                size={17}
                color={Colors.MAIN_GOLD_COLOR}
              />
            </View>
            <Text
              style={[
                styles.contentText,
                { marginLeft: Constants.MAIN_MARGIN_SIZE * 0.45 },
              ]}>
              {this.state.starCount}/10
            </Text>
          </View>

          <View
            style={{
              display: this.state.peopleData.length > 0 ? 'flex' : 'none',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: Constants.MAIN_MARGIN_SIZE * 1.25,
              width: '85%',
              marginTop: Constants.MAIN_MARGIN_SIZE * 1.75,
              marginBottom: Constants.MAIN_MARGIN_SIZE,
              overflow: 'hidden',
            }}>
            <MaterialIcon
              style={{
                justifyContent: 'center',
                display: this.state.contentLoaded ? 'flex' : 'none',
              
              }}
              name="grain"
              color={Colors.TAB_BAR_GRAY}
              size={17.5}
            />

            <Text style={styles.sectionTitle}>People</Text>
          </View>

          <FlatList
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              width: Constants.MAIN_MARGIN_SIZE,
              height: '100%',
            }}
            data={this.state.peopleData}
            renderItem={this.peopleRenderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.list}
          />

          <View
            style={{
              display: this.state.videoData.length > 0 ? 'flex' : 'none',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: Constants.MAIN_MARGIN_SIZE * 1.25,
              width: '85%',
              marginTop: Constants.MAIN_MARGIN_SIZE * 1.75,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.8,
              overflow: 'hidden',
            }}>
            <MaterialIcon
              style={{
                justifyContent: 'center',
                display: this.state.contentLoaded ? 'flex' : 'none',
        
              }}
              name="grain"
              color={Colors.TAB_BAR_GRAY}
              size={17.5}
            />

            <Text style={styles.sectionTitle}>Videos</Text>
          </View>

          <View style={{ marginBottom: Constants.MAIN_MARGIN_SIZE }}>
            {this.state.videoData.reverse().map(video => (
              <View
                key={video.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: Constants.MAIN_MARGIN_SIZE * 0.375,
                  marginLeft: Constants.MAIN_MARGIN_SIZE,
                }}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.descriptionText,
                    {
                      width: '77.5%',
                      marginLeft: 0,
                      marginBottom: 0,
                      fontSize: 15.5,
                    },
                  ]}>
                  {video.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    if (video.site === 'YouTube') {
                      Linking.openURL(
                        `https://www.youtube.com/watch?v=${video.key}`,
                      );
                    } else {
                      Linking.openURL(`https://vimeo.com/${video.key}`);
                    }
                  }}>
                  <IonIcons
                    style={{ marginRight: Constants.MAIN_MARGIN_SIZE }}
                    name="ios-play-circle"
                    size={25}
                    color={Colors.MAIN_RED}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backDropImage: {
    width: width,
    height: width * 0.65,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.MAIN_WHITE,
    marginLeft: Constants.MAIN_MARGIN_SIZE,
    width: width * 0.8,
    marginTop: Constants.MAIN_MARGIN_SIZE * 0.75,
  },
  header: {
    height: width * 0.175,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: Constants.MAIN_MARGIN_SIZE,
  },
  buttonGroup: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Constants.MAIN_MARGIN_SIZE * 0.5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.MAIN_RED,
    marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.MAIN_RED,
  },
  contentText: {
    fontSize: 16,
    color: Colors.MAIN_WHITE,
    fontWeight: '300',
  },
  dot: {
    color: Colors.MAIN_ICON_COLOR,
    fontWeight: '900',
    marginHorizontal: Constants.MAIN_MARGIN_SIZE * 0.45,
  },
  descriptionText: {
    width: '90%',
    fontSize: 16,
    color: Colors.MAIN_TITLE_COLOR,
    fontWeight: '300',
    marginLeft: Constants.MAIN_MARGIN_SIZE,
    marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
  },
  sectionTitle: {
    fontSize: 18.5,
    color: Colors.MAIN_RED,
    fontWeight: '500',
    marginLeft: Constants.MAIN_MARGIN_SIZE * 0.25,
  },
  dividerShort: {
    width: '12.5%',
    height: 1.5,
    backgroundColor: Colors.MAIN_GRAY,
    opacity: 0.5,
  },
  dividerLong: {
    width: '100%',
    height: 1.5,
    backgroundColor: Colors.MAIN_GRAY,
    opacity: 0.5,
  },
  tagTitle: {
    fontSize: 16,
    color: Colors.MAIN_TITLE_COLOR,
    fontWeight: '400',
    marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
    marginTop: Constants.MAIN_MARGIN_SIZE * 0.25,
    marginLeft: Constants.MAIN_MARGIN_SIZE,
    width: '85%',
  },
  list: {
    width: width,
    paddingLeft: Constants.MAIN_MARGIN_SIZE,
  },
  listItem: {
    width: width * 0.25,
    height: width * 0.35,
    borderRadius: 10,
    marginRight: Constants.MAIN_MARGIN_SIZE * 0.65,
    borderColor: Colors.MAIN_BORDER_COLOR,
    borderWidth: 1.5,
  },
  listText: {
    textAlign: 'center',
    width: width * 0.25,
    fontSize: 14,
    color: Colors.MAIN_WHITE,
    fontWeight: '300',
    marginTop: Constants.MAIN_MARGIN_SIZE * 0.4,
  },
});
