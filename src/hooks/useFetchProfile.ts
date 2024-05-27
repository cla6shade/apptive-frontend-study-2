import Profile from '../dto/Profile.ts';
import {useQuery} from 'react-query';

const useFetchProfile = () => {
  return useQuery('profiles', async () => {
    const url =
      'https://mission.insd.dev/api/profiles';
    const res = await fetch(url, {
      headers: {
        'Authorization': 'Bearer Wdi4n63eZ2OGLw2RJb9UB42qdu1WUDax',
      },
    });
    const jsonData: Profile[] = await res.json();
    const promises = jsonData.map(async (profile) => {
      const fetchImageBlob = async (url?: string): Promise<string | undefined> => {
        if (!url) {
          return undefined;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return URL.createObjectURL(await response.blob());
      };
      profile.background = await fetchImageBlob(profile.background as string);
      profile.image = await fetchImageBlob(profile.image as string);
      return profile;
    });
    return Promise.all(promises);
  }, {
    suspense: true,
    staleTime: 60*5*1000,
    cacheTime: 60*30*1000,
    refetchOnWindowFocus: false,
  });
};
export default useFetchProfile;
