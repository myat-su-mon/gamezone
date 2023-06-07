// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { View, Text, Button, Image } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details Again..."
//         onPress={() => navigation.push("Details")}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require("./assets/adaptive-icon.png")}
//     />
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerTitle: (props) => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert("This is a button!")}
//                 title="Update Count"
//                 color="#333"
//               />
//             ),
//           }}
//         />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
