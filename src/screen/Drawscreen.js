import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { IC_HOUSE, IC_MENU, IC_OVER, IC_LOUPE, IC_BAG, IC_LOGOUT ,IC_BIN,IC_NHAP} from "../image";
import Homescreen from "./Homescreen";
// ko dùng hàng có sẵn nhé, mình ko custom được

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ItemView = styled.TouchableOpacity`
  width: 89%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-color: antiquewhite;
  border: 0.5px;
  padding-right: 10px;
  background-color: #CECECE;
`;
const Icon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: #989898;
  padding: 10px 10px 10px 10px;
`;
const Title = styled.Text`
  font-size: 14px;
  color: #333;
  padding-left: 12px;
`;
const Sheader = styled.View`
  height: 100px;
  flex-direction: row;
  background-color: white;
  border-bottom-width: 0.7px;
`;
const Sboder = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-top: 20px;
`;

// Crtl + D để duplicate code những phần mình tô màu hoặc dòng
// giờ bấm Alt Shift F để format lại code đi

export function DrawScreen(props) {
  const navigation = useNavigation();
  return (
    <Container>
      <Sheader>
        <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
          <Image source={IC_OVER} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Khuat Duy Khiem</Text>
          <Text style={{ fontSize: 14 }}>duykhiemhaui@gmail.com</Text>
        </View>
      </Sheader>


      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_BAG} /></View>
        <ItemView onPress={() => {
          navigation.navigate("TabView");
        }}>

          <Title>Lich lam viec trong ngay</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_BAG} /></View>
        <ItemView onPress={() => {
          navigation.navigate("HomeScreen");
        }}>

          <Title>Lich hop</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_BAG} /></View>
        <ItemView>

          <Title>Lich da gui cho duyet</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_BAG} /></View>
        <ItemView>
          <Title>Lich duyet cong tac</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_LOUPE} /></View>
        <ItemView>
          <Title>Tra cuu lich lam viec</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_NHAP} /></View>
        <ItemView>
          <Title>Lich nhap</Title>
        </ItemView>
      </Sboder>

      <Sboder>
        <View style={{paddingRight:10}}><Icon source={IC_LOGOUT} /></View>

        <ItemView>
          <Title>Dang xuat</Title>
        </ItemView>
      </Sboder>


    </Container>
  );
}



