import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Touchable, TouchableOpacity } from 'react-native';
//이렇게 상단에 가져와 사용할 이미지를 불러옵니다
import favicon from "./assets/parmacyLogo.png"
import arrow from "./assets/arrowBack.png"

export default function signIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.title}>
        <Image 
        source={arrow}
        resizeMode={"contain"}
        style={styles.imageLogo}
        />
        <Text style={styles.textHeader}>회원가입</Text>
      </View>
      <View style={styles.contentPic}>
        <Image 
        source={favicon}
        style={styles.imageStyle}
        />
      </View>
      <View style={styles.contentBtn}>
        <TouchableOpacity style={styles.signinBtnMto1}>
          <Text style={styles.textBtn1}>멘토</Text> 
          <Text style={styles.textBtn1}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinBtnMto2}>
          <Text style={styles.textBtn2}>멘티</Text> 
          <Text style={styles.textBtn2}>회원가입</Text>
        </TouchableOpacity>


      </View>
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:"50%",
    height:"50%"
  },
  
  contentPic: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30
  },
  contentBtn: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row"
  },
  
  header: {
    width:"100%",
    height:"3%",   
  },
  
  title: {
    width: "100%",
    height: "7%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  imageLogo: {
    width: "10%",
    height: "50%",
  },
  textHeader: {
    height: "50%",
    width: "80%",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingTop: 5
  },
  
  signinBtnMto1: {
    width: "30%",
    height: "35%",
    backgroundColor: "#254D6A",
    borderRadius:10,
    marginRight: 10,
    paddingTop: 38
  },
  signinBtnMto2: {
    width: "30%",
    height: "35%",
    backgroundColor: "#FFD662",
    borderRadius:10,
    marginLeft:10,
    paddingTop: 38
  },
  textBtn1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",

  },
  textBtn2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#254D6A",
    textAlign: "center",

  }

});