import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Description } from '../components/Description';
import { ReconnectedPeopleCounter } from '../components/ReconnectedPeopleCounter';
import { TitleUppercase } from '../components/Title';

export const HomeScreen: React.FC = () => {
  const FatherImage = require('../assets/undraw_fatherhood_7i19.png');
  return (
    <ScrollView>
      <ReconnectedPeopleCounter counter={53} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TitleUppercase>Sobre o projeto</TitleUppercase>

        <Image source={FatherImage} style={{ width: 334, height: 237 }} />

        <Description>
          O projeto Dory proporciona ao usuário um sistema web para cadastrar
          pessoas que desapareceram ou que possam vir a desaparecer, com o
          objetivo de mediar a relação entre as famílias e terceiros que possam
          encontrá-las.
        </Description>
        <Description>
          O conceito principal da aplicação é fornecer uma busca prática com
          dados centralizados, e uma plataforma intuitiva para que o processo
          seja feito de maneira rápida, segura e eficiente. Além claro, de um
          serviço de informações didáticas para ocasiões inesperadas.
        </Description>
      </View>
    </ScrollView>
  );
};
