import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings139762Navigator from '../features/Settings139762/navigator';
import Settings139747Navigator from '../features/Settings139747/navigator';
import NotificationList139746Navigator from '../features/NotificationList139746/navigator';
import Maps139745Navigator from '../features/Maps139745/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings139762: { screen: Settings139762Navigator },
Settings139747: { screen: Settings139747Navigator },
NotificationList139746: { screen: NotificationList139746Navigator },
Maps139745: { screen: Maps139745Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
