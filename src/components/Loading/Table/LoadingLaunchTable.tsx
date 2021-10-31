import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const LoadingLaunchTable = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="overflow-x-auto">
        <div className="mb-3">
          <Skeleton height="40px" count={1} />
        </div>
        <div className="mb-10">
          <Skeleton count={5} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-3">
        <Skeleton height="40px" count={1} />
        </div>
        <div className="mb-10">
          <Skeleton count={5} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-3">
          <Skeleton height="40px" count={1} />
        </div>
        <div className="mb-10">
          <Skeleton count={5} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-3">
          <Skeleton height="40px" count={1} />
        </div>
        <div className="mb-10">
          <Skeleton count={5} />
        </div>
      </div>
    </SkeletonTheme>
  );
};
