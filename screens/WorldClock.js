import { View, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const WorldClock = () => {
  return (
    <View className="flex-1 p-2 mt-2">
      <View className="flex-row-reverse	ml-1">
        <Entypo name="dots-three-vertical" color={"#fff"} size={20} />
      </View>

      <View className="items-center relative">
        <TouchableOpacity className="absolute top-8">
          <Ionicons name="play-circle" color={"#87de87"} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorldClock;
