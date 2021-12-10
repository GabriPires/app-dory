import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Box } from '../components/Box';
import { MissingPeopleCard } from '../components/MissingPeopleCard';
import { Title } from '../components/Title';
import api from '../services/api';
import { randomDate } from '../utils/randomDate';

export type MissingPeopleProps = {
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

export const MissingScreen: React.FC = ({}) => {
  const [missing, setMissing] = useState<MissingPeopleProps[]>();

  useEffect(() => {
    api.get(`/desaparecidos`).then((response) => {
      setMissing(response.data);
    });
  }, []);

  return (
    <Box>
      <Title style={{ marginBottom: 24 }}>Pessoas Desaparecidas</Title>
      {missing
        ? missing.map((people) => (
            <MissingPeopleCard
              key={people.codigo}
              id={people.codigo}
              age={people.idade}
              location={'Guaratinguetá - SP'}
              missingDate={randomDate(new Date(2012, 0, 1), new Date())}
              name={people.pessoa.nome}
            />
          ))
        : null}
    </Box>
  );
};
