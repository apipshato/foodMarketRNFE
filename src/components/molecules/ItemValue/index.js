import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Label</Text>
            <Text style={styles.value}>Value</Text>
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    label:{fontSize:14,
        fontFamily:"Poppins-Regular",
        color:"#8D92A3"

    },
    value:{fontSize:14,
        fontFamily:"Poppins-Regular",
        color:"#020202"


    }
})
