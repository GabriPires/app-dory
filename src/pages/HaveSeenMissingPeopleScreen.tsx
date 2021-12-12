import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { useForm, Controller } from 'react-hook-form';
import { InputError, TextInput } from '../components/TextInput';
import { Title } from '../components/Title';
import { TextInputMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';
import { Divider } from '../components/Divider';
import { Description } from '../components/Description';
import api from '../services/api';
import { showToast } from '../utils/showToast';
import { isValid, parse } from 'date-fns';

interface Params {
  id: string;
}

type SeenForm = {
  email: string;
  name: string;
  city: string;
  local: string;
  date: string;
  clothes: string;
  description: string;
};

const HaveSeenMissingPeopleScreen: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;
  const navigation = useNavigation();

  const navigateToSeenScreen = (id: string): void => {
    // @ts-expect-error err
    navigation.navigate('HaveSeenMissingPeople', { id: id });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      city: '',
      local: '',
      date: '',
      clothes: '',
      description: '',
    },
  });
  const onSubmit = (data: SeenForm) => {
    const formatedDate = parse(data.date, 'P', new Date());

    if (!isValid(formatedDate)) {
      return setError('date', { message: 'Data inválida (Ex: 12/12/2021)' });
    }

    api
      .post('/casos', {
        contatoQuemViu: data.email,
        desaparecidoCodigo: routeParams.id,
        emailQuemViu: data.email,
        maisInfos: data.description,
        nomeQuemViu: data.name,
        ultimaLocalizacao: data.city,
        ultimaRoupa: data.clothes,
        ultimoHorario: formatedDate,
        ultimoLugar: data.local,
      })
      .then(() => {
        showToast({
          type: 'success',
          title: 'Caso registrado com sucesso!',
          message: 'Obrigado pela contribuição!',
        });
        navigation.goBack();
      })
      .catch((err) => {
        showToast({
          type: 'error',
          title: 'Ops, algo deu errado!',
          message: 'Por favor revise os dados e tente novamente',
        });
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <Header />
      <Title style={{ marginBottom: 16 }}>Você viu esta pessoa?</Title>
      <Title
        style={{ alignSelf: 'flex-start', marginLeft: 8, marginBottom: 8 }}
      >
        Sobre você
      </Title>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Digite seu email'}
          />
        )}
        name={'email'}
      />
      {errors.email && <InputError>Não pode estar vazio</InputError>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Digite seu nome'}
            style={{ marginTop: 8 }}
          />
        )}
        name={'name'}
      />
      {errors.name && <InputError>Não pode estar vazio</InputError>}
      <Divider />
      <Description>
        Descreva aqui algumas informações sobre a pessoa que você viu para que
        possamos avisar ao responsável por ele.
      </Description>
      <Title
        style={{ alignSelf: 'flex-start', marginLeft: 8, marginBottom: 8 }}
      >
        Sobre o desaparecido
      </Title>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Cidade onde o viu'}
          />
        )}
        name={'city'}
      />
      {errors.city && <InputError>Não pode estar vazio</InputError>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Descreva o local onde o viu'}
            style={{ marginTop: 8 }}
          />
        )}
        name={'local'}
      />
      {errors.local && <InputError>Não pode estar vazio</InputError>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputMask
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Data que o viu (ex: 12/12/2021)'}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            style={{
              backgroundColor: '#f7f9fa',
              paddingHorizontal: 16,
              paddingVertical: 12,
              marginLeft: 8,
              marginRight: 8,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: '#9eadba',
              marginTop: 8,
            }}
          />
        )}
        name={'date'}
      />
      {errors.date && <InputError>{errors.date.message}</InputError>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Descreva a roupa que ele estava usando'}
            style={{ marginTop: 8 }}
          />
        )}
        name={'clothes'}
      />
      {errors.clothes && <InputError>Não pode estar vazio</InputError>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Deseja adicionar mais alguma informação?'}
            style={{ marginTop: 8, textAlignVertical: 'top' }}
            multiline={true}
            numberOfLines={5}
          />
        )}
        name={'description'}
      />
      {errors.description && <InputError>Não pode estar vazio</InputError>}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        <RectButton
          style={{
            backgroundColor: '#9EADBA',
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderRadius: 6,
          }}
          onPress={() => navigateToSeenScreen(routeParams.id)}
        >
          <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 16 }}>
            Cancelar
          </Text>
        </RectButton>
        <RectButton
          style={{
            backgroundColor: '#2C88D9',
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderRadius: 6,
          }}
          // @ts-expect-error onSubmit type
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 16 }}>
            Finalizar
          </Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default HaveSeenMissingPeopleScreen;
