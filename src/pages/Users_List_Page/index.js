import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import React from 'react'

export default function UsersList() {
  const userListData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title_name}>UsersList</Text>
      {userListData.map((user, index) => (
        <View key={index} style={styles.wrapping_content}>
          <View style={styles.header_data}>
            <Text style={styles.nama_data}>Name</Text>
            <Text style={styles.user_date}>: {user.name}</Text>
          </View>
          <View style={styles.header_data}>
            <Text style={styles.nama_data}>Username</Text>
            <Text style={styles.user_date}>: {user.username}</Text>
          </View>
          <View style={styles.header_data}>
            <Text style={styles.nama_data}>Email</Text>
            <Text style={styles.user_date}>: {user.email}</Text>
          </View>
          <View style={styles.header_data}>
            <Text style={styles.nama_data}>Address</Text>
            <Text style={styles.user_date}>: {user.address.street}</Text>
          </View>
          <View style={styles.header_data}>
            <Text style={styles.nama_data}>Phone</Text>
            <Text style={styles.user_date}>: {user.phone}</Text>
          </View>
        </View>
      ))}
    </View>
  )
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
        marginBottom: heightPercentageToDP('5%'),
    },
    wrapping_content:{
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: widthPercentageToDP('7%'),
        paddingVertical: heightPercentageToDP('1.5%'),
        borderRadius: widthPercentageToDP('3%'),
        marginBottom: heightPercentageToDP('1.5%'),
    },
    header_data:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    nama_data:{
        color: 'black',
        fontWeight: 'bold',
    },
    user_date:{
        color: 'black',
    },
})