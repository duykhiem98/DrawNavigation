import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { IC_FILTER, IC_LOUPE, IC_MENU } from "../image";
import { useNavigation } from "@react-navigation/native";
import ReactPage from './TabScreen/ReactPage';
import FlowPage from './TabScreen/FlowPage';
import JestPage from'./TabScreen/JestPage';

var ScrollableTabView = require('react-native-scrollable-tab-view');
const App = (props) => {
  const navigation=useNavigation();
  return(
    <Scontainer>
      <SViewtop>
        <Sbutton>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={IC_MENU} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </Sbutton>

        <Stext>
          <STB>Trang chu</STB>
        </Stext>

        <Sloupe>

          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Image source={IC_FILTER} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={IC_LOUPE} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </Sloupe>
      </SViewtop>

      <SViewbot>
        <ScrollableTabView>
          <ReactPage tabLabel="React" />
          <FlowPage tabLabel="Flow" />
          <JestPage tabLabel="Jest" />
        </ScrollableTabView>
      </SViewbot>
    </Scontainer>

  )
};
const Scontainer=styled.SafeAreaView`
  flex: 1;
`;
const SViewtop = styled.View`
  flex: 0.8;
  flex-direction: row;
  background-color: white;
`;
const SViewbot=styled.View`
   flex: 9;
  background-color: aqua;
`;
const Sbutton = styled(View)`
  width: 80px;
  align-items: center;
  justify-content: center;
`;
const Sloupe = styled(View)`
  width: 80px;
  flex-direction: row;
  align-items: center;
`;
const Stext = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const STB = styled(Text)`
  font-size: 23px;
  font-weight: bold;
`;
export default App;

