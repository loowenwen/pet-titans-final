import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Header() {
    const [creditsLeft, setCreditsLeft] = useState(500);

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Rewards</Text>
            <Image source={require("../../assets/trophy.png")} style={styles.headerIcon} />
            <View style={styles.creditContainer}>
                <Text style={styles.creditText}>{creditsLeft}</Text>
                <Image source={require("../../assets/credit.png")} style={styles.creditIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginRight: 'auto',
        fontFamily: "Times New Roman"
    },

    headerIcon: {
        width: 35,
        height: 50,
        justifyContent: "flex-end",
        marginRight: 80
    },

    boxContainer: {
        flex: 1,
        width: "100%",
        height: 100,
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "snow"
    },

    box: {
        width: "40%",
        height: "40%",
        padding: 5,
        backgroundColor: "linen"
    },

    creditContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 4,
    },
    creditIcon: {
        width: 65,
        height: 30,
    },

    rewardList: {
        flex: 1,
        flexGrow: 1,
        paddingBottom: 20
    },
    rewardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 20000
    },
    rewardItem: {
        width: '48%',
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 8,
    },

    rewardImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },

    rewardName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    rewardPoints: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 5,
    },
    rewardDescription: {
        fontSize: 12,
        textAlign: 'center',
    }
});