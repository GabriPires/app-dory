import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Avatar } from '../components/Avatar';
import { Title } from '../components/Title';
import { Description } from '../components/Description';
import { Button } from '../components/Button';
import {
  InformationContainer,
  InformationDetails,
} from '../components/InformationContainer';
import { InformationTitle } from '../components/InformationContainer/style';
import { Divider } from '../components/Divider';
import { ScrollView } from 'react-native-gesture-handler';

interface Params {
  id: string;
}

export const MissingDetailsScreen: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <ScrollView>
      <Header />
      <Avatar
        source={{
          uri: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
        }}
        style={{ marginTop: 16 }}
      />
      <Title>Nome Sobrenome</Title>
      <Text style={{ textAlign: 'center', marginBottom: 24 }}>00 anos</Text>
      <Title>Sobre esta pessoa</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit
        ratione voluptates commodi nemo, nobis ipsa quisquam ea at enim animi
        eveniet voluptatum ipsum veritatis libero ad sunt maxime incidunt!
      </Description>
      <View style={{ width: '60%', alignSelf: 'center' }}>
        <Button title={'Eu vi esta pessoa'} onPress={() => console.log('oi')} />
      </View>
      <InformationContainer>
        <InformationDetails>
          <View>
            <InformationTitle>Desaparecido desde</InformationTitle>
            <Text>22/12/2020</Text>
          </View>
          <View>
            <InformationTitle>Etnia</InformationTitle>
            <Text>Pardo</Text>
          </View>
          <View>
            <InformationTitle>Cor dos olhos</InformationTitle>
            <Text>Castanhos</Text>
          </View>
        </InformationDetails>
        <InformationDetails>
          <View>
            <InformationTitle>Sexo</InformationTitle>
            <Text>Masculino</Text>
          </View>
          <View>
            <InformationTitle>Tipo sanguíneo</InformationTitle>
            <Text>A+</Text>
          </View>
          <View>
            <InformationTitle>Cor do cabelo</InformationTitle>
            <Text>Moreno</Text>
          </View>
        </InformationDetails>
      </InformationContainer>
      <Divider />
      <Title>Outras Informações</Title>
      <InformationContainer>
        <InformationDetails>
          <View>
            <InformationTitle>Deficiência mental</InformationTitle>
            <Text>Não possui</Text>
          </View>
          <View>
            <InformationTitle>Comidas alergênicas</InformationTitle>
            <Text>Não possui</Text>
          </View>
        </InformationDetails>
        <InformationDetails>
          <View>
            <InformationTitle>Deficiência física</InformationTitle>
            <Text>Não possui</Text>
          </View>
          <View>
            <InformationTitle>Medicamentos alergênicos</InformationTitle>
            <Text>Ibuprofeno</Text>
          </View>
        </InformationDetails>
      </InformationContainer>
    </ScrollView>
  );
};
