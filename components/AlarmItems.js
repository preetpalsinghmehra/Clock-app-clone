import { View, Text, Button, Switch } from "react-native";
import React, { useState } from "react";

const AlarmItems = ({ id, time, userText, alarmText, onFlag }) => {
  const [isEnabled, setIsEnabled] = useState(onFlag);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="mt-2 ">
      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          <Text className="text-3xl text-thin text-white">{time} PM</Text>
          <Text className="text-white px-2 ">{userText}</Text>
        </View>
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <Text className="text-white text-gray-400">{alarmText}</Text>
    </View>
  );
};

export default AlarmItems;
