import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.MAIN_BLACK,
        }}>
        <View
          style={{
            widht: width,
            alignItems: 'center',
            paddingBottom: Constants.MAIN_MARGIN_SIZE * 1,
          }}>
          {/* <TouchableOpacity
            style={{
              zIndex: 1,
              position: 'absolute',
              top: Constants.MAIN_MARGIN_SIZE * 0.75,
              right: Constants.MAIN_MARGIN_SIZE * 0.75,
            }}>
            <MaterialIcon
              name="exit-run"
              size={27.5}
              color={Colors.TAB_BAR_GRAY}
            />
          </TouchableOpacity> */}
          <View
            style={{
              width: width,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: Constants.MAIN_MARGIN_SIZE,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.85,
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23.5,
                  color: Colors.MAIN_WHITE,
                  fontWeight: '500',
                }}>
                786
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15.5,
                  color: Colors.MAIN_GRAY,
                  fontWeight: '400',
                }}>
                Matches
              </Text>
            </View>

            <View>
              <View
                style={{
                  width: height * 0.175,
                  height: height * 0.175,
                  backgroundColor: Colors.MAIN_GRAY,
                  borderRadius: height * 0.175 * 0.5,
                  marginHorizontal: Constants.MAIN_MARGIN_SIZE * 0.75,
                  borderColor: Colors.MAIN_BORDER_COLOR,
                  borderWidth: 1.5,
                }}
              />

              <TouchableOpacity
                style={{
                  width: height * 0.045,
                  height: height * 0.045,
                  borderRadius: height * 0.045 * 0.5,
                  backgroundColor: Colors.TAB_BAR_GRAY,
                  position: 'absolute',
                  bottom: 0,
                  right: height * 0.045 * 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IonIcons
                  style={{ marginLeft: 0.5, marginTop: 1.25 }}
                  name="ios-cog-outline"
                  size={35}
                  color={Colors.MAIN_GRAY}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23.5,
                  color: Colors.MAIN_WHITE,
                  fontWeight: '500',
                }}>
                1073
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15.5,
                  color: Colors.MAIN_GRAY,
                  fontWeight: '400',
                }}>
                Likes
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 28,
              color: Colors.MAIN_WHITE,
              fontWeight: '500',
            }}>
            Harry, 32
          </Text>

          <Text
            numberOfLines={3}
            style={{
              fontSize: 14,
              color: Colors.MAIN_TITLE_COLOR,
              fontWeight: '400',
              marginTop: Constants.MAIN_MARGIN_SIZE * 0.25,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.65,
              width: width * 0.675,
              textAlign: 'center',
            }}>
            Love bikes,nature, sunsets and beautiful girls. Love bikes,nature,
            sunsets and beautiful girls. Love bikes,nature, sunsets and
            beautiful girls. asd ads asdad asdasdaasd
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons
              style={{
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.25,
              }}
              name="ios-location-sharp"
              size={21}
              color={Colors.MAIN_ICON_COLOR}
            />

            <Text
              style={{
                fontSize: 14,
                color: Colors.MAIN_WHITE,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Ukraine, Odessa
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width,
            flex: 1,
            marginBottom: Constants.MAIN_MARGIN_SIZE * 0.25 * 0.5,
          }}>
          <View
            style={{
              width: width,
              flex: 0.125,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingLeft: Constants.MAIN_MARGIN_SIZE * 1.25,
              paddingRight: Constants.MAIN_MARGIN_SIZE * 0.75,
            }}>
            <Text
              style={{
                fontSize: 15.5,
                fontWeight: '500',
                color: Colors.MAIN_TITLE_COLOR,
              }}>
              Likes
            </Text>
            <Text
              style={{
                fontSize: 14.5,
                fontWeight: '600',
                color: Colors.TAB_BAR_GRAY,
              }}>
              (2182)
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                marginLeft: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />
          </ScrollView>
        </View>

        <View
          style={{
            width: width,
            flex: 1,
            marginBottom: Constants.MAIN_MARGIN_SIZE * 0.25 * 0.5,
          }}>
          <View
            style={{
              width: width,
              flex: 0.125,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingLeft: Constants.MAIN_MARGIN_SIZE * 1.25,
              paddingRight: Constants.MAIN_MARGIN_SIZE * 0.75,
            }}>
            <Text
              style={{
                fontSize: 15.5,
                fontWeight: '500',
                color: Colors.MAIN_TITLE_COLOR,
              }}>
              Dislikes
            </Text>
            <Text
              style={{
                fontSize: 14.5,
                fontWeight: '600',
                color: Colors.TAB_BAR_GRAY,
              }}>
              (759)
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                marginLeft: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />

            <TouchableOpacity
              style={{
                width: width * 0.6,
                height: '87.5%',
                backgroundColor: Colors.TAB_BAR_GRAY,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.75,
                borderRadius: 14,
                borderColor: Colors.MAIN_BORDER_COLOR,
                borderWidth: 1.5,
              }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
