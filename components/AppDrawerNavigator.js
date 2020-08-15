import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigatorNavigator({
    Home : {
        screen : AppTabNavigator
    },
    {
        contentComponent : CustomSideBarMenu
    },
    {
        initialRouteName : 'Home'
    },
})