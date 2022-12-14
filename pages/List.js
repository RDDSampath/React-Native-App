import React from 'react';
import { 
  StyleSheet,
   View, 
   Text, 
   Image, 
   ImageBackground, 
   Button, 
   Alert, 
   ScrollView,
   TouchableOpacity,
   Modal,
  } from 'react-native';


import bg from './images/bg_3.png';

const List = ({route}) => {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  return (
    <ScrollView>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.container_1}>
        <Text style={styles.heading}>
          List
        </Text>
        </View>
        <View style={styles.textBox}>
          <View style={styles.textRow1}>
            <Text style={styles.textStyle}>
              First Name
            </Text>
            <Text style={styles.textStyle}>
              Last Name
            </Text>
            <Text style={styles.textStyle}>
              E-Mail
             </Text>
          </View>
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <TouchableOpacity onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
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
          </TouchableOpacity></Modal>
          <TouchableOpacity>
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
          <TouchableOpacity>
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
          <TouchableOpacity>
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
          <TouchableOpacity>
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
          <TouchableOpacity>
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
    width:120,
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
  textBox:{
    backgroundColor:'#AFabcdef',
    borderRadius:4,
    padding:10,
    flexDirection: 'column',
  },
  textRow:{
    flexDirection: 'row',
    backgroundColor:'white',
    margin:1,
  },
  textRow1:{
    backgroundColor:'red',
    flexDirection: 'row',
  },
});