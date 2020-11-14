import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/RestaurantCard';

const restaurants = [
  {
    name: 'The Muffin Man Bakery',
    categories: 'Desserts, Cakes and Bakery',
    deliveryTime: '35 min',
    distance: '3.7 km',
    image: require('../../assets/the-muffin-man-bakery.jpg'),
    id: 1,
  },
  {
    name: 'Central Perk Coffee House',
    categories: 'Beverages, Desserts, Cakes and Bakery',
    deliveryTime: '45 min',
    distance: '4.3 km',
    image: require('../../assets/central-perk.jpg'),
    id: 2,
  },
  {
    name: 'WildBread Bakery',
    categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
    deliveryTime: '25 min',
    distance: '3 km',
    image: require('../../assets/wildbread-bakery.jpg'),
    id: 3,
  },
  {
    name: "McDonald's",
    categories: 'Fast Food, Burgers, Desserts',
    deliveryTime: '20 min',
    distance: '2.5 km',
    image: require('../../assets/mcdo.jpg'),
    id: 4,
  },
  {
    name: 'Jollibee',
    categories: 'Fast Food, Burgers, Desserts',
    deliveryTime: '25 min',
    distance: '3.1 km',
    image: require('../../assets/jollibee.jpg'),
    id: 5,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Food Central" />
      {/* <Card /> */}
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
