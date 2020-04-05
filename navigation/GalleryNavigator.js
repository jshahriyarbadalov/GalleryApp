import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  CategoriesScreen  from '../screens/CategoriesScreen';
import  ImageDetailScreen  from '../screens/ImageDetailScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerTitle: 'A Screen',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

    },
    headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17
    },
    headerBackTitleStyle: {
        fontFamily: 'OpenSans-Regular'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

};

const GalleryNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    ImageDetail: ImageDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

export default createAppContainer(GalleryNavigator);