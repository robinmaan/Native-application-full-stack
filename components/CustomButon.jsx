import { TouchableOpacity ,Text} from 'react-native'
import React from 'react'


const CustomButon = ({title,containerStyle,hnandlePress, textStyle,isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={hnandlePress}
    activeOpacity={0.7}

    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${ isLoading ? "opacity-50" : " "}`}>
        <Text className={`text-primary font-pregular text-lg `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButon

