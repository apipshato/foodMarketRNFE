import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components'

const OrderSummary = () => {
    return (
        <View>
        <Header title="Payment" subTitle="You deserve to meal" onBack={() => {}}/>
            <Text>OrderSummary</Text>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({})
