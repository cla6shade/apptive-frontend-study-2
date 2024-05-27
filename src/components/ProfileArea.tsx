import '../css/ProfileArea.css';
import ProfileBox from './ProfileBox.tsx';
import useFetchProfile from '../hooks/useFetchProfile.ts';

const ProfileArea = () => {
  const { data } = useFetchProfile();

  return data?.map(profile => {
    return <ProfileBox key={`profile-box-${profile.id}`}
      profile={profile}/>
  });
}
export default ProfileArea;
