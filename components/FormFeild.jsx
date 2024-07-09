import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import {icons} from '../constants'
import { TouchableOpacity } from 'react-native';


const FormFeild = ({handleChangeText , otherStyle , title , value , placeholder , ...props}) => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl
       focus:border-secondary items-center flex-row">
      <TextInput 
        className="flex-1 text-white font-psemibold text-base "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title == "Password" && !showPassword }
      />
      {title == "Password" && (
         
            <TouchableOpacity onPress={() =>
              setShowPassword(!showPassword )}>
                <Image source={!showPassword ? icons.eye : icons.eyehide}  className="w-6 h-6 "resizeMode="contian"/>
                {/* <Image source={icons.eye} className="w-8 h-8"/> */}

            </TouchableOpacity>
          )}
      </View>
    </View> 
  )
}

export default FormFeild

const styles = StyleSheet.create({})