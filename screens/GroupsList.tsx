import React, { useEffect, useState } from 'react';
import { View } from "../components/Themed";
import { List } from 'react-native-paper';
import { StyleSheet } from "react-native";
import axios from 'axios';
import groups from "../data/fake";

export default function GroupsList({ navigation }: any) {
  return (
    <List.AccordionGroup>
      {groups.map((group, index) => (
        <List.Accordion title={group.name} id={index.toString()}>
          {group.categories.map(category => (
            <List.Item
              title={category.name}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', { data: category.data });
              }}
            />
          ))}
        </List.Accordion>
      ))}
    </List.AccordionGroup>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
