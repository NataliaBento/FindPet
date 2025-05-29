import React, { useEffect, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { FAB, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const API_URL = 'http://192.168.20.69:3000';



export default function HomeScreen() {
  const [pets, setPets] = useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/pets`);
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.description}</Paragraph>
              <Paragraph>
                {item.emPerigo ? "⚠️ Está em perigo!" : "✅ Não parece em perigo"}
              </Paragraph>
            </Card.Content>
            {item.photo && (
              <Card.Cover source={{ uri: `${API_URL}/${item.photo}` }} style={styles.image} />
            )}
          </Card>
        )}
      />
      <FAB icon="plus" style={styles.fab} onPress={() => navigation.navigate('Registrar Animal')} />
      <FAB icon="map" style={styles.mapButton} onPress={() => navigation.navigate('Mapa')} />
    </View>
  );
}
