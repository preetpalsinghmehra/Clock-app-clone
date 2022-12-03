import { useColorScheme } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Alarm from "./screens/Alarm";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import WorldClock from "./screens/WorldClock";
import StopWatch from "./screens/StopWatch";
import Timer from "./screens/Timer";
import { titleColor } from "./Constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DarkTheme}>
      <Tab.Navigator >
        <Tab.Screen
          name="Alarm"
          component={Alarm} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="alarm" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="WorldClock"
          component={WorldClock}
          options={{
            headerShown: false,
            tabBarLabel:"World Clock",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clock-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="StopWatch"
          component={StopWatch}
          options={{
            headerShown: false,
            tabBarLabel:"Stopwatch",
            tabBarIcon: ({ color }) => (
              <Entypo name="stopwatch" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="timer-sand" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
