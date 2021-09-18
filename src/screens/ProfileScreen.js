import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.MAIN_BLACK,
        }}>
        <Text style={{ color: '#FFFFFF' }}>Profile Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
