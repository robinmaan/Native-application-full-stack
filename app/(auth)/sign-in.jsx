import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {images} from '../../constants'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFeild from '../../components/FormFeild'
import { useState } from 'react'
import CustomButon from '../../components/CustomButon'


import { TouchableOpacity } from 'react-native-web'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email:"",
    password:"",
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const submit = () => {}
  return (
    <SafeAreaView className="bg-primary h-full ">

      <ScrollView>
        <View className="w-full justify-center min-h-[86vh] px-4  ">
          <Image source={images.logo} className="w-[115px] h-[35px]" resiseMode="contain" />
          <Text className="text-2xl text-white text-semibold font-psemibold mt-10">Log in to Aora</Text>
          <FormFeild 
           title="Email"
           value={form.email}
           handleChangeText = {(e)=> setForm({...form,
            email:e
           })}
           otherStyle="mt-7"
           keyboardType = "email-address"
          />
          <FormFeild 
           title="Password"
           value={form.password}
           handleChangeText = {(e)=> setForm({...form,
            password:e
           })}
           otherStyle="mt-7"
           
          />
          <CustomButon 
           title="Sign In"
           handlePrress={submit}
           containerStyle="mt-7"
           isLoading={isSubmit}
          />
          <View className="justify-center flex-row pt-5 gap-2"> 
            <Text className="text-lg text-gray-100 font-psemibold">
              Don't have account?
            </Text>
            <Link className='text-red-400 font-psemibold' href="/sign-up">sign up</Link>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})