import React, { useState } from 'react';
import { 
  StyleSheet,
   View, 
   Text, 
   Image, 
   ImageBackground, 
   Alert, 
   ScrollView,
   TouchableOpacity,
   Pressable,
   Modal,
  } from 'react-native';

import bg from './images/bg.png';
import list from './images/list.png';

const List = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
  return (
    <ScrollView>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.container_1}>
        
        <Image source={list} style={styles.profileImg} />
        </View>
        <View style={styles.textBox}>
        
          <View style={styles.textRow1}>
            <Text style={styles.boldFont}>
              First Name
            </Text>
            <Text style={styles.boldFont}>
              Last Name
            </Text>
            <Text style={styles.boldFont}>
              E-Mail
             </Text>
          </View>


          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.popDetails}>Name : Amal perera</Text>
            <Text style={styles.popDetails}>E-Mail: ama@gmail.com</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

          <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              Amal
            </Text>
            <Text style={styles.textStyle}>
              Perera
            </Text>
            <Text style={styles.textStyle}>
              ama@gmail.com
            </Text>
          </View>
          </TouchableOpacity>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.popDetails}>Name : sunil perera</Text>
            <Text style={styles.popDetails}>E-Mail: sunil@gmail.com</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


          <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              sunil
            </Text>
            <Text style={styles.textStyle}>
              perera
            </Text>
            <Text style={styles.textStyle}>
              sunil@gmail.com
            </Text>
          </View>
          </TouchableOpacity>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.popDetails}>Name : tilan perera</Text>
            <Text style={styles.popDetails}>E-Mail: tilan@gmail.com</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              tilan
            </Text>
            <Text style={styles.textStyle}>
              perera
            </Text>
            <Text style={styles.textStyle}>
              tilan@gmail.com
            </Text>
          </View>
          </TouchableOpacity>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible3);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.popDetails}>Name : sithumi sithara</Text>
            <Text style={styles.popDetails}>E-Mail: sithumi@gmail.com</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible3(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              sithumi
            </Text>
            <Text style={styles.textStyle}>
              sithara
            </Text>
            <Text style={styles.textStyle}>
              sithumi@gmail.com
            </Text>
          </View>
          </TouchableOpacity>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible4(!modalVisible4);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.popDetails}>Name : Peter samuel</Text>
            <Text style={styles.popDetails}>E-Mail: peter@gmail.com</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible4(!modalVisible4)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible4(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              peter
            </Text>
            <Text style={styles.textStyle}>
              samuel
            </Text>
            <Text style={styles.textStyle}>
              peter@gmail.com
            </Text>
          </View>
          </TouchableOpacity>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible5);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.popDetails}>Name : {route.params.firstName} {route.params.lastName}</Text>
            <Text style={styles.popDetails}>E-Mail: {route.params.eMail}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible5(!modalVisible5)}
            >
              <Text style={styles.textbtn}>close &#x2716;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          <TouchableOpacity
        style={[styles.textStyle,styles.buttonOpen]}
        onPress={() => setModalVisible5(true)}
      >
          <View style={styles.textRow}>
            <Text style={styles.textStyle}>
              {route.params.firstName}
            </Text>
            <Text style={styles.textStyle}>
              {route.params.lastName}
            </Text>
            <Text style={styles.textStyle}>
              {route.params.eMail}
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fixToText}>
        </View>
      </View>
      </ImageBackground>
      </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centeredView: {
    marginTop: 400,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    padding:10,
    
  },
  textbtn:{
    textAlign: 'center',
    fontWeight:'bold',
    color:'white',
    fontSize:16,

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
  popDetails:{
    fontSize:18,
    fontWeight:'bold',

  },
  textStyle: {
    width:120,
    fontSize: 16,
    textAlign:'center',
    paddingLeft:20,
    padding:10,
    fontWeight:'bold',
  },
  textBox:{
    backgroundColor:'',
    borderRadius:4,
    padding:10,
    flexDirection: 'column',
    backgroundColor:'transparent',
  },
  textRow:{
    flexDirection: 'row',
    margin:1,
    height:50,
    backgroundColor:'rgba(246, 246, 246, 0.54)',
  },
  textRow1:{
    flexDirection: 'row',
    height:50,
  },
  boldFont:{
    fontWeight:'bold',
    color: "black",
    textAlign: "center",
    fontSize:16,
    width:120,
    height:60,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width:400,
    height:200,},
 shadowOffset: {
    width: 2,
    height: 2,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen:{
    width:350,
    height:55,
  },
  buttonClose: {
    backgroundColor: "rgb(191, 95, 255)",
    marginTop:50,
    width:200,
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize:16,
    width:120,
    height:60,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  profileImg: {
    width:200,
    height:200,
    
  },
});