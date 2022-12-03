import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import AlarmList from "../components/AlarmList";
import AntDesign from "react-native-vector-icons/AntDesign";

const Alarm = () => {
  return (
    <View className="p-2 mt-2">
      <View className="flex-row-reverse	ml-1">
        <Entypo name="dots-three-vertical" color={"#fff"} size={20} />
      </View>

      <Text className="text-5xl font-extralight mt-2 text-white">Alarm</Text>
      <Text className="text-gray-500">Alarm will ring in 9 h 25 min</Text>
      
      <AlarmList />
      <View className="items-center relative">
        <TouchableOpacity className="absolute top-8">
          <AntDesign name="pluscircle" color={"#87de87"} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Alarm;
