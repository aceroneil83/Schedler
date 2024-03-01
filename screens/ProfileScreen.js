import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

export default function ProfileScreen() {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const translateY = new Animated.Value(5); 
  // Initial translateY value

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Text style={styles.mainText}>!!Under Development!!</Text>
        {/* <TouchableOpacity onPress={toggleCalendar}>
          <Text style={styles.toggleText}>Toggle Calendar</Text>
        </TouchableOpacity> */}

        {/* <Modal
          isVisible={isCalendarVisible}
          backdropOpacity={0.5}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={toggleCalendar}
        >
          <Animated.View style={[styles.calendarContainer, { transform: [{ translateY }] }]}>
            <Calendar onDayPress={(day) => console.log('selected day', day)} />
          </Animated.View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 18,
    color: '#007BFF', // Adjust color as needed
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
});
