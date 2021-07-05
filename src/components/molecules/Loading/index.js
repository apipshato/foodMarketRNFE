import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#1ABC9C"/>
            <Text style={styles.textnya}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex:1,
        backgroundColor:'rgba(0, 0, 0 ,0.1)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    textnya :{
        fontSize:18,
        fontFamily:'Poppins-Regular',
        marginTop: 12,
    }
})
