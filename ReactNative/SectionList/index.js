import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from 'react-native';
import HTML from 'react-native-render-html';
const DATA = [
  {
    title: '1Main dishes',
    
    data: ['aPizza', 'bBurger', 'cRisotto'],
  },
  {
    title: '2Sides',
    data: ['aFrench Fries', 'bOnion Rings', 'Fried Shrimps'],
  },
  {
    title: '3Drinks',
    data: ['aWater', 'bCoke', 'Beer'],
  },
  {
    title: '4Desserts',
    data: ['aCheese Cake', 'bIce Cream'],
  },
  {
    title: '5Main dishes',
    data: ['aPizza', 'bBurger', 'Risotto'],
  },
  {
    title: '6Sides',
    data: ['aFrench Fries', 'bOnion Rings', '17 Fried Shrimps'],
  },
  {
    title: '7Drinks',
    data: ['aWater', 'Coke', 'Beer'],
  },
  {
    title: '8Desserts',
    data: ['aCheese Cake', 'Ice Cream'],
  },
  {
    title: '1Main dishes',
    data: ['aPizza', 'bBurger', 'cRisotto'],
  },
  {
    title: '2Sides',
    data: ['aFrench Fries', 'bOnion Rings', 'Fried Shrimps'],
  },
  {
    title: '3Drinks',
    data: ['aWater', 'bCoke', 'Beer'],
  },
  {
    title: '4Desserts',
    data: ['aCheese Cake', 'bIce Cream'],
  },
  {
    title: '5Main dishes',
    data: ['aPizza', 'bBurger', 'Risotto'],
  },
  {
    title: '6Sides',
    data: ['aFrench Fries', 'bOnion Rings', 'Fried Shrimps'],
  },
  {
    title: '7Drinks',
    data: ['aWater', 'Coke', 'Beer'],
  },
  {
    title: '8Desserts',
    data: ['aCheese Cake', 'Ice Cream'],
  },
];

const Item = ({ title, index ,html}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{html}</Text>
   
  </View>
);

const App = () => {
  const refX = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="17"
        onPress={() => {
          refX.current.scrollToLocation({
            itemIndex: 17,
          });
        }}
      />
      <SectionList
        ref={refX}
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Item title={item} index={index} html={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
