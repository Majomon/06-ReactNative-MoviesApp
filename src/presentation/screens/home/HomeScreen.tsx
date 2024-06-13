import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, marginBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />
        {/* Próximamente */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
