import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Homescreen from "./src/screen/Homescreen";
import {DrawScreen} from "./src/screen/Drawscreen";
import TabView from "./src/screen/TabView";
import { IC_LOUPE, IC_HOUSE, IC_MENU } from "./src/image";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { memo } from "react";

const HomeHeader = styled.View`
  height: 76px;
  padding-top: 30px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #CECECE;
`;

const ButtonLeft = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`
const IconMenu = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #111
`;

// gõ Control + Space để nó gợi ý import cho mình
// hoặc Alt + Enter

function Home( ) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1,  }}>
      <HomeHeader>
        <ButtonLeft onPress={() => {
          navigation.openDrawer()
        }}>
          <IconMenu source={IC_MENU}/>
        </ButtonLeft>
      </HomeHeader>

    </View>
  );
}

const DrawerStack = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerStackComponent = memo(function DrawerStackComponent() {
  return (
    <DrawerStack.Navigator drawerContent={() =><DrawScreen />}>
      <DrawerStack.Screen name="HomeScreen" component={Homescreen} />
      <DrawerStack.Screen name="Home" component={Home}/>
      <DrawerStack.Screen name="TabView" component={TabView}/>
    </DrawerStack.Navigator>
  )
})
// trên lý thuyết có ghi rõ
// cái drawer này muốn sử dụng hiệu quả thì cần bọc ở bên ngoài nó 1 cái stack
// thì ở đây a đặt tên nó là RoootStack (rễ cây) để bọc ở ngoài giờ thêm màn hình nào thì có thể thêm ở 2 chỗ
// hoặc là ở root stack hoặc ở drawer đều đc

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={"none"}>
        <RootStack.Screen name={'Root'} component={DrawerStackComponent} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
