import { BarLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <BarLoader
      color="rgba(131, 163, 216, 1)"
      height={30}
      speedMultiplier={0.8}
      width={400}
    />
  );
};

export default LoadingSpinner;
