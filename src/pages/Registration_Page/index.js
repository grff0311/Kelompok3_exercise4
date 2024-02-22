import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import React, { useState } from 'react';

export default function Registration({ navigation }) {
  const [inputNama, setInputNama] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePress = () => {
    // Alert.alert('Input Value', `You entered: ${inputNama}`, [{ text: 'OK' }]);
    console.log('Nama:', inputNama);
    console.log('Username:', inputUsername);
    console.log('Email:', inputEmail);
    console.log('Address:', inputAddress);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_name}>Registration</Text>
      <View style={styles.wrapping_content}>
        <>
          <Text style={styles.text_data}>Nama</Text>
          <View style={styles.header_input}>
            <TextInput
              style={styles.input}
              placeholder='Masukan nama lengkap anda'
              placeholderTextColor={'gray'}
              value={inputNama}
              onChangeText={(text) => setInputNama(text)}
            />
          </View>
        </>
        <>
          <Text style={styles.text_data}>Username</Text>
          <View style={styles.header_input}>
            <TextInput
              style={styles.input}
              placeholder='Masukan username anda'
              placeholderTextColor={'gray'}
              value={inputUsername}
              onChangeText={(text) => setInputUsername(text)}
            />
          </View>
        </>
        <>
          <Text style={styles.text_data}>Email</Text>
          <View style={styles.header_input}>
            <TextInput
              style={styles.input}
              placeholder='Masukan email anda'
              placeholderTextColor={'gray'}
              value={inputEmail}
              onChangeText={(text) => setInputEmail(text)}
            />
          </View>
        </>
        <>
          <Text style={styles.text_data}>Address</Text>
          <View style={styles.header_input}>
            <TextInput
              style={styles.input}
              placeholder='Masukan alamat anda'
              placeholderTextColor={'gray'}
              value={inputAddress}
              onChangeText={(text) => setInputAddress(text)}
            />
          </View>
        </>
        <>
          <Text style={styles.text_data}>Phone Number</Text>
          <View style={styles.header_input}>
            <TextInput
              style={styles.input}
              placeholder='Masukkan nomor telepon anda'
              placeholderTextColor={'gray'}
              keyboardType='numeric' // Menggunakan keyboard numerik
              maxLength={12} // Batasan maksimum panjang input
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
        </>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UsersList')}>
          <Text style={styles.text_reg}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    padding: 20,
  },
  title_name: {
    color: 'black',
    fontSize: widthPercentageToDP('11%'),
    fontWeight: 'bold',
  },
  text_data: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('1%'),
  },
  wrapping_content: {
    height: heightPercentageToDP('80%'),
    justifyContent: 'center',
  },
  header_input: {
    width: '100%',
    borderColor: 'black',
    height: heightPercentageToDP('6%'),
    borderWidth: 1,
    paddingLeft: widthPercentageToDP('3%'),
    borderRadius: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('3%'),
  },
  input: {
    color: 'black',
  },
  button: {
    width: '100%',
    height: heightPercentageToDP('6%'),
    backgroundColor: '#9D44C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentageToDP('6%'),
    marginTop: heightPercentageToDP('2%'),
  },
  text_reg: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('5.5%'),
  },
});
