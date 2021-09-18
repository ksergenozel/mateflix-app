import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlicksScreen from './src/screens/FlicksScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MoviesStackScreen from './src/screens/MoviesScreen';
import ChatsScreen from './src/screens/ChatsScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './src/utils/Colors';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Movies') {
              (iconName = 'movie-open'),
                (color = focused ? Colors.MAIN_RED : Colors.TAB_BAR_GRAY);
              return (
                <MaterialCommunityIcon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Chats') {
              (iconName = 'chat'),
                (color = focused ? Colors.MAIN_RED : Colors.TAB_BAR_GRAY);
              return (
                <MaterialCommunityIcon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Flicks') {
              (iconName = 'cards'),
                (color = focused ? Colors.MAIN_RED : Colors.TAB_BAR_GRAY);
              return (
                <MaterialCommunityIcon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Matches') {
              (iconName = 'heart'),
                (color = focused ? Colors.MAIN_RED : Colors.TAB_BAR_GRAY);
              return (
                <MaterialCommunityIcon
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              (iconName = 'person'),
                (color = focused ? Colors.MAIN_RED : Colors.TAB_BAR_GRAY);
              return <IonIcon name={iconName} size={28} color={color} />;
            }
          },
          tabBarActiveTintColor: Colors.MAIN_RED,
          tabBarStyle: {
            backgroundColor: Colors.MAIN_BLACK,
            borderTopColor: Colors.MAIN_BLACK,
            paddingTop: 2,
          },
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Movies"
          component={MoviesStackScreen}
        />
        <Tab.Screen
          name="Matches"
          component={MatchesScreen}
          options={{
            tabBarBadge: null,
            tabBarBadgeStyle: { backgroundColor: Colors.MAIN_RED },
            headerShown: false,
          }}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Flicks"
          component={FlicksScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Chats"
          component={ChatsScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
