import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = () => {};
  return {
    isLoading,
  };
};
