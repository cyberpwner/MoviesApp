import { useQuery } from '@tanstack/react-query';
import fetchFeaturedList from '../loaders/fetchFeaturedList';

const useFeaturedList = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['featuredList'],
    queryFn: fetchFeaturedList,
  });

  if (isPending) {
    return { isPending, featuredList: null, error: null };
  }

  if (isError) {
    return { isPending, featuredList: null, error };
  }

  // if success
  return { isPending, featuredList: data.results, error: null };
};

export default useFeaturedList;
