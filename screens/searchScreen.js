import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'

const SearchScreen = () => {

    const {darkMode,colors,movies} = useContext(AppContext);

    const [searchInput,setSearchInput] = useState('')
    return (
    <View style={styles.container}>
        <TextInput 
            focusable
            style={styles.searchbar}
            placeholder = 'search movies or series ... e.g Titanic,Regular Show'
            placeholderTextColor= 'gray'
            onChangeText={(val)=> setSearchInput(val)}   
        />

        {
        movies.map((item,index)=>{
            return (
                <Text key={index}>{item.title}</Text>
            )
        })
        }
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    searchbar : {
        borderWidth : 1,
        marginVertical : 12,
        marginHorizontal : 8,
        color : 'white',
        paddingVertical : 4,
        paddingHorizontal : 8
    }
})