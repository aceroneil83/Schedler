import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const AddSchedscreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic (e.g., save schedule details)
    navigation.navigate('Home', { title, description }); // Pass data to HomeScreen

    // Reset input fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Text style={styles.title}>Add Agenda</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={setDescription}
          value={description}
          multiline={true} // Allow multiple lines for longer descriptions
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#2CD5EC',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddSchedscreen;
