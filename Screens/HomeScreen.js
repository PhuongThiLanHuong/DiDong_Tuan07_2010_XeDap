import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.view2}>
        <Image style={styles.img1}  source={require('../assets/bifour_-removebg-preview.png')} ></Image>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity onPress={()=>{navigation.navigate("ListProduct")}}>
          <Text style={styles.text3}>Get Started</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:700,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    height:90,
    width:350
  },
  text1:{
    fontWeight:700,
    fontSize:20,
    textAlign:'center',
    top:60,
    left:15,
    fontFamily:'VT323'
  },
  view2:{
    left:1,
    width:360,
    height:380,
    backgroundColor:'#E941411A',
    borderRadius:50,
    top:10
  },
  img1:{
    height:270,
    width:290,
    top:50,
    left:30
  },
  view3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    top:10,
    left:12,
    height:50,
    width:350,
  },
  text2:{
    fontFamily:'Ubuntu',
    fontWeight:700,
    fontSize:26,
    lineHeight:26,
    textAlign:'center'
  },
  view4:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:350,
    height:30,
    top:10,
    backgroundColor:'#E94141',
    borderRadius:30,
  },
  text3:{
    color:'white',
    fontSize:25,
    fontWeight:500,
    fontFamily:'Ubuntu',
    textAlign:'center',
  }
})
