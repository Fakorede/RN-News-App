import React from "react";
import { Platform, StyleSheet, View, Text} from "react-native";

const Header = () => {
  return ( 
    <View style={styles.header}>
      <Text style={styles.title}>
        News App
      </Text>
    </View>
   );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#fff',
    padding: 15,
    borderBottomColor: Platform.OS === 'android' ? '#fff' : '#72bcd4',
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    color: Platform.OS === 'android' ? '#fff' : '#72bcd4',
  },
});

export default Header;