import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation, route }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const formattedDate = date.toLocaleDateString();
      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };
    
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { title, description } = route.params || {};

  useEffect(() => {
    // Add the new schedule to the array when title and description are present
    if (title && description) {
      setSchedules((prevSchedules) => [...prevSchedules, { title, description }]);
    }
  }, [title, description]);

  const handleDeleteSchedule = (index) => {
    setSchedules((prevSchedules) => {
      const updatedSchedules = [...prevSchedules];
      updatedSchedules.splice(index, 1);
      return updatedSchedules;
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerContainer}>
          <Text style={styles.currentTime}>{currentTime}</Text>
          <Text style={styles.currentDate}>{currentDate}</Text>
          <View style={styles.underline} />
          <View style={styles.dateContainer}>
            <Text style={styles.scheduleText}>Schedule</Text>
            <TouchableOpacity
              style={[styles.addButton, styles.customButton]}
              onPress={() => navigation.navigate(' ')}
            >
              <Text style={styles.buttonText}>+ Add New</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.schedulesContainer}>
          <FlatList
            data={schedules}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => console.log('Pressed schedule:', item)}
              >
                <View style={styles.scheduleDetails}>
                  <View style={styles.scheduleHeader}>
                    <Text style={styles.detailText}>Title: {item.title}</Text>
                    <Ionicons
                      name="trash-outline"
                      size={24}
                      color="red"
                      onPress={() => handleDeleteSchedule(index)}
                    />
                  </View>
                  <Text style={styles.detailText}>Description: {item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  currentTime: {
    fontSize: 25,
    fontWeight: 'bold', 
    paddingRight: 410,
  },
  currentDate: {
    fontSize: 30, 
    color: 'black', 
    paddingRight: 380,
  },
  dateContainer: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Space elements evenly
    alignItems: 'center',
  },
  underline: {
    borderBottomWidth: 2,
    borderColor: 'black', // Adjust color as needed
    width: 490, // Adjust width as needed
    marginTop: 5, // Adjust spacing as needed
  },
  scheduleText: {
    marginTop: 10, // Adjust spacing as needed
    fontSize: 25, // Adjust font size as needed
    marginLeft: 5,
    color: 'black', 
    fontWeight: 'bold',
  },
  scheduleContent: {
    backgroundColor: '#2CD5EC',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden', // Ensure borderRadius works as expected
  },
  customButton: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginRight: 15,
    backgroundColor: '#2CD5EC',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomIconContainer: {
    position: 'absolute',
    marginTop: 930,
    paddingRight: 7,
    alignSelf: 'center',
  },
  schedulesContainer: {
    marginTop: 150, // Adjust spacing as needed
    flex: 1,
  },
  scheduleDetails: {
    marginTop: 20,
    marginLeft: 30,
    padding: 20,
    width: 480,
    backgroundColor: '#2CD5EC',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  detailText: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black', // Adjust color as needed
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
