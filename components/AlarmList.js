import { View, Text, FlatList } from "react-native";
import React from "react";
import { DATA } from "../Constants/Models";
import AlarmItems from "./AlarmItems";

const AlarmList = () => {
  const renderItem = ({ item }) => (
    <AlarmItems
      id={item.id}
      time={item.time}
      userText={item.userText}
      alarmText={item.alarmText}
      onFlag={item.onFlag}
    />
  );

  return (
    <View className="flex-1">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlarmList;
