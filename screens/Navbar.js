import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

const Navbar = ({ navigation }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const translateY = new Animated.Value(5); // Initial translateY value

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);

    // Slide animation
    Animated.timing(translateY, {
      toValue: isCalendarVisible ? 600 : 0, // Slide up or down
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
      <AntDesign name="menuunfold" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.text1}>Schedler</Text>
    
      <TouchableOpacity style={styles.profileIcon} onPress={toggleCalendar}>
        <Feather name="calendar" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        isVisible={isCalendarVisible}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={toggleCalendar}
      >
        <Animated.View style={[styles.calendarContainer, { transform: [{ translateY }] }]}>
          <Calendar onDayPress={(day) => console.log('selected day', day)} />
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 25,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text1: {
    fontSize: 28,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  menuButton: {
    padding: 10,
  },
  profileIcon: {
    padding: 20,
  },

});

export default Navbar;
