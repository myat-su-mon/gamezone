import React from "react";
import { View, Text, Image, Button } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const rating = route.params.rating;

  console.log(images.ratings[rating]);

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Card>
        <Text>{route.params?.title}</Text>
        <Text>{route.params?.body}</Text>
        <View style={globalStyles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
}
