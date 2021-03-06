import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import api from '../services/api';
import { MoreInfoText } from '../components/MoreInfoText';

interface Params {
  id: string;
}

export type MissingPeopleProps = {
  desaparecido: {
    codigo: number;
    encontrado: string;
    idade: number;
    pessoa: {
      codigo: number;
      cpf: string;
      rg: string;
      nome: string;
      nascimento: string;
      sexo: string;
      cutis: string;
      tipo: string | undefined;
    };
  };
  maisInfos: {
    cabelo: string;
    olhos: string;
    altura: string;
    peso: string;
    descricao: string;
    tipoSanguineo: string;
    deficienciaMental: string;
    deficienciaFisica: string;
    restricaoAlimentar: string;
    restricaoMedicamentos: string;
    doencas: string;
  };
};

export const MissingDetailsScreen: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;
  const navigation = useNavigation();

  const [missing, setMissing] = useState<MissingPeopleProps>();

  useEffect(() => {
    api.get(`/desaparecido/${routeParams.id}`).then((response) => {
      setMissing(response.data);
    });
  }, []);

  const navigateToSeenScreen = (id: string): void => {
    // @ts-expect-error err
    navigation.navigate('HaveSeenMissingPeople', { id: id });
  };

  return (
    <ScrollView>
      <Header />
      <Avatar
        source={{
          uri: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
        }}
        style={{ marginTop: 16 }}
      />
      <Title>{missing?.desaparecido.pessoa.nome ?? 'Nome'}</Title>
      <Text style={{ textAlign: 'center', marginBottom: 24 }}>
        {missing?.desaparecido.idade} anos
      </Text>
      <Title>Sobre esta pessoa</Title>
      <Description>{missing?.maisInfos.descricao}</Description>
      <View style={{ width: '60%', alignSelf: 'center' }}>
        <Button
          title={'Eu vi esta pessoa'}
          onPress={() =>
            navigateToSeenScreen(
              missing ? missing?.desaparecido.codigo.toString() : '1',
            )
          }
        />
      </View>
      <InformationContainer>
        <InformationDetails>
          <View>
            <InformationTitle>Desaparecido desde</InformationTitle>
            <MoreInfoText>22/12/2020</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Etnia</InformationTitle>
            <MoreInfoText>{missing?.desaparecido.pessoa.cutis}</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Cor dos olhos</InformationTitle>
            <MoreInfoText>{missing?.maisInfos.olhos}</MoreInfoText>
          </View>
        </InformationDetails>
        <InformationDetails>
          <View>
            <InformationTitle>Sexo</InformationTitle>
            <MoreInfoText>{missing?.desaparecido.pessoa.sexo}</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Tipo sangu??neo</InformationTitle>
            <MoreInfoText>A+</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Cor do cabelo</InformationTitle>
            <MoreInfoText>{missing?.maisInfos.cabelo}</MoreInfoText>
          </View>
        </InformationDetails>
      </InformationContainer>
      <Divider />
      <Title>Outras Informa????es</Title>
      <InformationContainer>
        <InformationDetails>
          <View>
            <InformationTitle>Defici??ncia mental</InformationTitle>
            <MoreInfoText>{missing?.maisInfos.deficienciaMental}</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Comidas alerg??nicas</InformationTitle>
            <MoreInfoText>{missing?.maisInfos.restricaoAlimentar}</MoreInfoText>
          </View>
        </InformationDetails>
        <InformationDetails>
          <View>
            <InformationTitle>Defici??ncia f??sica</InformationTitle>
            <MoreInfoText>{missing?.maisInfos.deficienciaFisica}</MoreInfoText>
          </View>
          <View>
            <InformationTitle>Medicamentos alerg??nicos</InformationTitle>
            <MoreInfoText>
              {missing?.maisInfos.restricaoMedicamentos}
            </MoreInfoText>
          </View>
        </InformationDetails>
      </InformationContainer>
    </ScrollView>
  );
};
