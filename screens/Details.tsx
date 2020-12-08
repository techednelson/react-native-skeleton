import React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet } from "react-native";

export default function Details({ route, navigation }: any) {
  const { data } = route.params;
  return (
    <List.AccordionGroup>
      {data.map((el, index) => (
        <List.Accordion title={el.name} id={index.toString()}>
          <List.Item title="dose" description={el.details.dose} />
          <List.Item title="dose" description={el.details.strength} />
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
