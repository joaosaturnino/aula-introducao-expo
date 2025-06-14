import { createDrawerNavigator } from '@react-navigation/drawer';

// import Exemplos from '../exemplos';
import Tab from './tab';
import Sobre from '../sobre';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen name="Tab" component={Tab} />
      <DrawerNavigation.Screen name="Sobre" component={Sobre} />
    </DrawerNavigation.Navigator>
  );
};
