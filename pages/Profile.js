import React from 'react';
import { 
  StyleSheet,
   View, 
   Text, 
   Image, 
   ImageBackground, 
   ScrollView,
  } from 'react-native';

import profile from './images/profile.png';
import bg from './images/bg.png';

const Profile = ({route,navigation}) => {

  return (
    <ScrollView>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.container_1}>
        <Text style={styles.heading}>
          Profile
        </Text>
        <Image source={profile} style={styles.profileImg} />
        </View>
        <View style={styles.textBack}>
            <Text style={styles.textStyle}>
              First Name : {route.params.firstName}
            </Text>
            <Text style={styles.textStyle}>
              Last Name : {route.params.lastName}
            </Text>
            <Text style={styles.textStyle}>
              E-mail : {route.params.eMail}
            </Text>
        </View>
      </View>
      </ImageBackground>
      </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    padding:10,
    
  },
  container_1: {
    alignItems:'center',
    padding:10,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight:'bold',
  },
  textStyle: {
    fontSize: 16,
    textAlign:'left',
    paddingLeft:20,
    color:'black',
    padding:10,
    fontWeight:'bold',
  },
  profileImg: {
    width:200,
    height:200,
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  textBack:{
    backgroundColor:'#AFabcdef',
    borderRadius:10,
    padding:10,
    marginBottom:200,
  },
  btn:{
    margin:20,
  },

});