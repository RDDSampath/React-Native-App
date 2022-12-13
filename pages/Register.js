import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import bg from './images/bg_2.png';
import logo from './images/logo.png';
import google from './images/google.png';
import facebook from './images/facebok.png';

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Create Account
        </Text>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
        <TextInput
          value={firstName}
          onChangeText={(firstname) => setFirstName(firstname)}
          placeholder={'Enter First Name'}
          style={styles.inputStyle}
        />
        <TextInput
          value={lastName}
          onChangeText={(lastname) => setLastName(lastname)}
          placeholder={'Enter last Name'}
          style={styles.inputStyle}
        />
        <TextInput
          value={eMail}
          onChangeText={(email) => setEmail(email)}
          placeholder={'Enter Email'}
          style={styles.inputStyle}
        />
        <TextInput
          style={styles.inputStyle}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(pass) => setPass(pass)}
        />
        <Button
          title="Register"
          //Button Title
          onPress={() =>
            navigation.navigate('Profile', {
              firstName: firstName,lastName: lastName,eMail:eMail,password:password,
            })
          }
          style={{borderRadius:20,backgroundColor:'red',}}
        /> 
        <View style={{flexDirection: 'row',marginTop:10,}}>
          <Image source={facebook} style={styles.rlogo}/>
          <Image source={google} style={styles.rlogo}/>
        </View>
      </View>
      </ImageBackground>

  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    fontFamily: "Cochin",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    borderRadius: 60,
    textAlign:'center',
    backgroundColor: '#EAFAF1',
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  rlogo: {
    width: 50,
    height: 50,
    borderRadius:25,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});