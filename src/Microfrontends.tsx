import MicroFrontend from './components/MicroFrontend';

const microxHost = process.env.REACT_APP_MICRO_X_HOST ?? '';
const microyHost = process.env.REACT_APP_MICRO_Y_HOST ?? '';

export const MicroX = () => {
  return (
    <MicroFrontend
      id={1}
      name="Micro-frontend A"
      microId="MicroAppX"
      host={microxHost}
      basePath="main-spa/micro-x"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

export const MicroY = () => {
  return (
    <MicroFrontend
      id={2}
      name="Micro-frontend B"
      microId="MicroAppY"
      host={microyHost}
      basePath="main-spa/micro-y"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};
