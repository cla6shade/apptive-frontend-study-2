import SkeletonBox from './SkeletonBox.tsx';

const Loading = () => {
  const renderSkeletons = () => {
    const ret = [];
    for (let i = 0; i < 10; i++) {
      ret.push(<SkeletonBox key={`skeleton-box-${i}`}/>)
    }
    return ret;
  }
  return renderSkeletons();
}
export default Loading;
