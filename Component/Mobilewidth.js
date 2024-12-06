import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Mobilewidth = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{backgroundColor:'skyblue',height:50,width:'90%',justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white',fontSize:18}}>submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Mobilewidth

const styles = StyleSheet.create({})