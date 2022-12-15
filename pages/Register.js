import React, {useState} from 'react';
import { Button } from '@rneui/themed';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import bg from './images/bg.png';
import logo from './images/register.png';
import google from './images/google.png';
import facebook from './images/facebok.png';

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');

  
  const checkTextInput = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Check for the Name TextInput
    if (!firstName.trim()) {
      ToastAndroid.show("First name is required.", 
      ToastAndroid.SHORT);
      return;

    }
    //Check for the Email TextInput
    if (!lastName.trim()) {
      ToastAndroid.show("Last Name is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (!eMail.trim()) {
      ToastAndroid.show("Email is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (!eMail.match(validRegex)) {
      ToastAndroid.show("Invalid Email", 
      ToastAndroid.SHORT);
      return;
    }
    if (!password.trim()) {
      ToastAndroid.show("Password is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (password.length < 6) {
      ToastAndroid.show("Password need at least 6 charcter", 
      ToastAndroid.SHORT);
      return;
    }
    //Checked Successfully
    //Do whatever you want
    ToastAndroid.show("Loading....", 
      ToastAndroid.SHORT);
    navigation.navigate('Profile', {
      firstName: firstName,
      lastName: lastName,
      eMail:eMail,
      password:password,
    })
  };
  const list = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Check for the Name TextInput
    if (!firstName.trim()) {
      ToastAndroid.show("First name is required.", 
      ToastAndroid.SHORT);
      return;

    }
    //Check for the Email TextInput
    if (!lastName.trim()) {
      ToastAndroid.show("Last Name is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (!eMail.trim()) {
      ToastAndroid.show("Email is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (!eMail.match(validRegex)) {
      ToastAndroid.show("Invalid Email", 
      ToastAndroid.SHORT);
      return;
    }
    if (!password.trim()) {
      ToastAndroid.show("Password is required.", 
      ToastAndroid.SHORT);
      return;
    }
    if (password.length < 6) {
      ToastAndroid.show("Password need at least 6 charcter", 
      ToastAndroid.SHORT);
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert('logging success ');
    ToastAndroid.show("List Loading....", 
      ToastAndroid.SHORT);
    navigation.navigate('list', {
      firstName: firstName,
      lastName: lastName,
      eMail:eMail,
      password:password,
    })
  };
  return (
    <ScrollView>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Create Account
        </Text>
        <SafeAreaView>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
        </SafeAreaView>
        <Text style={styles.topic}>Enter First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={(firstname) => setFirstName(firstname)}
          placeholder={'Enter First Name'}
          style={styles.inputStyle}
          id="form"
        />
        <Text style={styles.topic}>Enter Last Name</Text>
        <TextInput
          value={lastName}
          onChangeText={(lastname) => setLastName(lastname)}
          placeholder={'Enter last Name'}
          style={styles.inputStyle}
        />
        <Text style={styles.topic}>Enter E-mail Address</Text>
        <TextInput
          value={eMail}
          onChangeText={(email) => setEmail(email)}
          placeholder={'Enter Email'}
          style={styles.inputStyle}
        />
        <Text style={styles.topic}>Enter Password</Text>
        <TextInput
          style={styles.inputStyle}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(pass) => setPass(pass)}
        />
        <View style={styles.btn}>
        <Button
          title="Register"
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          type="outline"
          titleStyle={{ color: 'white' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
            backgroundColor:'black',
            borderRadius:20,
          }}
          //Button Title
          onPress={() => {
            checkTextInput();
           }}
          />
          </View>
          <View style={styles.btn}>
        <Button
          title="Registerd List"
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          type="outline"
          titleStyle={{ color: 'white' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
            backgroundColor:'black',
            borderRadius:20,
          }}
          //Button Title
          onPress={() => {
            list();
           }}
        />
        </View>
        <Text></Text>
        <View style={{flexDirection: 'row',marginTop:10,}}>
          <Image source={facebook} style={styles.rlogo}/>
          <Image source={google} style={styles.rlogo}/>
        </View>
      </View>
      </ImageBackground>
      </ScrollView>

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
    color:'white',
  },
  topic:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    color:'white',
    width: '90%',
    height: 44,
    padding: 10,
    marginVertical: 1,
    borderRadius: 20,
    textAlign:'center',
    backgroundColor: 'rgba(191, 95, 255, 0.644)',
  },
  tinyLogo: {
    width: 150,
    height: 150,
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
  btn:{
    marginTop:10,
    width:300,
    textColor:'#ABCD',
  }
});