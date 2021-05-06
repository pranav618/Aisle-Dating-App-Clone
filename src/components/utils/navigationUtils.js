import React from 'react'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { styles } from '../../commonStyles'
import R from '../../res/R'

export const headerTitle = (title, component) => (
    <View>
        {component ? (
            <View style={styles.headerDiv}>
                <Text style={styles.headerTitleStyle}>{title}</Text>
                {component}
            </View>
        ) : (
            <Text style={styles.headerTitleStyle}>{title}</Text>
        )}
    </View>
)

export const MyCustomHeaderBackImage = () => {
    const source = require('../../assets/BackButton/fill_1.png')
    return Platform.OS === 'ios' ? (
        <Ionicon
            style={{ paddingTop: 2, paddingHorizontal: R.dimens.margins.horizontal.small }}
            name="ios-arrow-back"
            size={30}
        />
    ) : (
        <Image style={styles.headerBackImageStyle} source={source} />
    )
}