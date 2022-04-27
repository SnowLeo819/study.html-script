import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Touchable, TouchableOpacity, TextInput } from 'react-native';
//이렇게 상단에 가져와 사용할 이미지를 불러옵니다
import favicon from "./assets/pramacy.png"
import arrow from "./assets/arrowBack.png"

export default function App() {
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
      <View style={styles.content}>
        <View style={styles.contentBox}>
          <Text style={styles.contentName}>아이디</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="아이디를 입력해주세요."
          />
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.contentName}>비밀번호</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="비밀번호를 입력해주세요."
          />
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.contentName}>이름</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="이름을 입력해주세요."
          />
        </View>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={{fontSize:18, color:"#fff"}}>회원가입 완료</Text>
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
  
  content: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70
  },
  contentBox: {
    width: "75%",
    height: "10%",
    marginBottom: 25
  },
  contentName: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5
  },
  inputBox: {
    borderWidth:1,
    borderColor: "#999",
    width: "100%",
    height: 50,
    borderRadius:5,
    fontSize:15,
    paddingLeft: 5
  },
  signInBtn: {
    backgroundColor: "#254D6A",
    width: "75%",
    height: 60,
    borderRadius: 5,
    marginTop: 30,
    alignItems: "center",
    paddingTop: 17
  }
});