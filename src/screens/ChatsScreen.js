import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';

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
        <View style={{
          flexDirection: 'row',
          
        }}>
          <Text
            style={{
              marginTop: Constants.MAIN_MARGIN_SIZE,
              marginBottom: Constants.MAIN_MARGIN_SIZE * 0.75,
              marginLeft: Constants.MAIN_MARGIN_SIZE * 1.5,
              color: Colors.MAIN_RED,
              fontSize: 27.5,
              fontWeight: '500',
            }}>
            Messages
          </Text>
          <Text
            style={{
              marginTop: Constants.MAIN_MARGIN_SIZE * 1.65,
              marginLeft: Constants.MAIN_MARGIN_SIZE * 0.375,
              color: Colors.MAIN_GRAY,
              fontSize: 14,
              fontWeight: '500',
            }}>
            with 7 people
          </Text>
        </View>

        <ScrollView
          style={{
            width: width,
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.0685,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Anna
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Jessica
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Kate
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Elise
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Jessy
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Leiani
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: Constants.MAIN_MARGIN_SIZE * 0.125,
              width: width,
              height: height * 0.08,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: Constants.MAIN_MARGIN_SIZE,
            }}>
            <View
              style={{
                width: height * 0.07,
                height: height * 0.07,
                borderRadius: height * 0.07 * 0.5,
                marginRight: Constants.MAIN_MARGIN_SIZE * 0.5,
                backgroundColor: Colors.MAIN_GRAY,
              }}
            />
            <View
              style={{
                flex: 1,
                height: height * 0.055,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 19,
                    color: Colors.MAIN_WHITE,
                    width: '72.5%',
                  }}>
                  Hadley
                </Text>
                <Text style={{ fontSize: 13.5, color: Colors.MAIN_GRAY }}>
                  3:21 PM
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    color: Colors.MAIN_TITLE_COLOR,
                    width: '72.5%',
                  }}>
                  Hello, sweety! I miss you! Yes I'm also like spicy food!
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.015 * 0.5,
                    backgroundColor: Colors.MAIN_GREEN,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
