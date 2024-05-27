import Profile, {OnlineStatus} from '../dto/Profile.ts';
import {BriefcaseBusiness} from 'lucide-react';

type ProfileBoxProps = {
  profile: Profile;
}
const ProfileBox = ({profile}: ProfileBoxProps) => {
  const getStatusBadge = () => {
    const badgeClass = {
      [OnlineStatus.ONLINE]: 'status_badge--online',
      [OnlineStatus.OFFLINE]: 'status_badge--offline',
      [OnlineStatus.DO_NOT_DISTURB]: 'status_badge--do_not_disturb',
      [OnlineStatus.AWAY]: 'status_badge--away'
    }
    return <div className={'status_badge ' + badgeClass[profile.status]} />
  }
  return <div className='profile__box'>
    <div className='profile__box__header'>
      <img src={profile.background} alt='background' style={{
        display: profile.background ? 'block' : 'none'
      }}/>
      <div className='profile__image'>
        <img src={profile.image} alt='image' style={{
          display: profile.image ? 'block' : 'none'
        }} />
        {getStatusBadge()}
      </div>
    </div>
    <div className='profile__box__content'>
      <div className='profile__job'>
        <BriefcaseBusiness />
        <p>
          {profile.job}
        </p>
      </div>
      <h1>
        {profile.name}
      </h1>
      <div className='profile__id'>
        {profile.id}
      </div>
      <div className='profile__bio'>
        {profile.bio}
      </div>
    </div>
  </div>;
};
export default ProfileBox;
