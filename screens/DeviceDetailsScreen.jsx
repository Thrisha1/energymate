import { View, Text, Image, Switch } from "react-native";
import React, { useState,useEffect } from "react";
import Usage from "../components/Usage";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";

const DeviceDetailsScreen = ({ route }) => {

  const { name, image, power, place } = route.params;

  return (
    <>
    <View className="bg-[#74a6b6]">
      <View className="bg-[#4C7380] pt-12 px-7 pb-5 rounded-bl-full">
        
        <Text className="text-3xl text-center font-bold text-white">
          {name}
        </Text>
        <View className="flex-row w-full justify-between my-5">
        <View>
        {/* <Text className="text-xl text-white">{place}</Text> */}
        
        </View>
        {/* <Image source={image} /> */}
        </View>
        <View className="bg-[#D8E4E8] px-5 py-2 rounded-xl">
            <Text className="text-[#1d3e4a] font-bold text-2xl py-3">Usages</Text>
            <View className="flex-row w-full justify-between py-3">
                <Text className="text-[#1d3e4a] text-lg">Use Today</Text>
                <Text className="text-[#1d3e4a] text-lg">₹ 100</Text>
                <Text className="text-[#1d3e4a] text-lg">50 Watt</Text>
            </View>
            <View className="flex-row w-full justify-between">
                <Text className="text-[#1d3e4a] text-lg">Use Month</Text>
                <Text className="text-[#1d3e4a] text-lg">₹ 5000</Text>
                <Text className="text-[#1d3e4a] text-lg">500 kwh</Text>
            </View>
        </View>
      </View>
      <View className="bg-[#D8E4E8] h-full rounded-tr-full">
        <Text className="text-[#1d3e4a] font-bold text-3xl py-3 px-5">Usage History</Text>
        <Usage month="March" power="1000" price="2000" />
        <Usage month="February" power="750" price="1750" />
        <Usage month="January" power="600" price="1500" />
      </View>
    </View>
    <Footer/>
    </>
  );
};

export default DeviceDetailsScreen;
