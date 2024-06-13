import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;

  const {movieId} = route.params;

  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        /* movie={movie!} */
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />

      {/* Details */}
      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};
