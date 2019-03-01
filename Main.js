import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}> --TODO APP--</Text>
        </View>

        <ScrollView style={styles.scrollContainer} />

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="input note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>
            +
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#789877',
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 30,
    borderBottomColor: "#E91E63"
  },
  headertext: {
    color: "white",
    fontSize: 18,
    padding: 28
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderBottomWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    bottom: 90,
    zIndex: 11,
    right: 20,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
