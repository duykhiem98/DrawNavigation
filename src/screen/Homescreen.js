import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { IC_FILTER, IC_LOUPE, IC_MENU } from "../image/index";

const DATA = [
  {
    id: "1",
    title: "TU B",
    Name: "General Code of Conducts",
  },
  {
    id: "2",
    title: "TU B",
    Name: "Workplace policies, Working times and conditions",
  },
  {
    id: "3",
    title: "TU B",
    Name: "Các quy định về bảo về, sử dụng có tráchnhiệm, và đảm bảo an toàn tài sản của công ty",
  },
  {
    id: "4",
    title: "TU B",
    Name: "Liên quan đến: Sự chính trực về tài chính,báo cáo, đánh giá và ra quyết định",
  },
  {
    id: "5",
    title: "TU B",
    Name: "Các nguyên tắc về quản trị và phát triển nhân sự",
  },
  {
    id: "6",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
  {
    id: "7",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
  {
    id: "8",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
  {
    id: "9",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
  {
    id: "10",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
  {
    id: "11",
    title: "TU B",
    Name: "Communication Policy ~ internally, socially and in the public",
  },
];
const Name = styled.Text`
  font-size: 17px;
  color: #111;
  font-weight: bold
`;
const Description = styled.Text`
  font-size: 15px;
  color: #333;
`;
const Item = ({ item, style }) => {
  return (
    <>
      <TouchableOpacity style={[styles.item, style]}>
        <Name>{item.title}</Name>
        <Description>{item.Name}</Description>
      </TouchableOpacity>
    </>
  );
};

const Homescreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SViewtop>
        <Sbutton>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={IC_MENU} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </Sbutton>

        <Stext>
          <STB>Thong bao</STB>
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

      <Sviewmid>
        <S2>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <S3>Moi nhat</S3>
          </TouchableOpacity>

          <TouchableOpacity>
            <S3>chua doc</S3>
          </TouchableOpacity>
        </S2>
      </Sviewmid>

      <SViewdown>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SViewdown>

    </SafeAreaView>
  );
};
const SViewtop = styled(View)`
  flex: 0.8;
  flex-direction: row;
  background-color: white;
`;
const Sviewmid = styled(View)`
  flex: 0.6;
  background-color: white;
  border-bottom-width: 0.6px;
  border-bottom-color: #CECECE;
  padding-left: 20px;
`;
const SViewdown = styled(View)`
  flex: 8;
  background-color: white;
`;
const Sbutton = styled(View)`
  width: 80px;
  align-items: center;
  justify-content: center;
`;
const Stext = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Sloupe = styled(View)`
  width: 80px;
  flex-direction: row;
  align-items: center;
`;
const STB = styled(Text)`
  font-size: 23px;
  font-weight: bold;
`;
const S2 = styled(View)`
  flex-direction: row;
  padding-top: 25px;
`;
const S3 = styled(Text)`
  font-size: 20px;

`;
const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    marginHorizontal: 20,
    borderBottomWidth: 0.7,
    paddingVertical: 16,
    borderBottomColor: "#CECECE",
  },
});

export default Homescreen;
