import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Box } from '../components/Box';
import { MissingPeopleCard } from '../components/MissingPeopleCard';
import { Title } from '../components/Title';
import api from '../services/api';

export type MissingPeopleProps = {
  codigo: number;
  encontrado: string;
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
              age={24}
              location={'Guaratinguetá - SP'}
              missingDate={new Date()}
              name={people.pessoa.nome}
            />
          ))
        : null}
    </Box>
  );
};
