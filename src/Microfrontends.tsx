import MicroFrontend from './components/MicroFrontend/MicroFrontend';

const microxHost = process.env.REACT_APP_MICRO_X_HOST ?? '';
const microyHost = process.env.REACT_APP_MICRO_Y_HOST ?? '';

export const MicroX = () => {
  return (
    <MicroFrontend
      id={1}
      name="Micro-Frontend X"
      microId="MicroAppX"
      host={microxHost}
      basePath="/micro-x"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

export const MicroY = () => {
  return (
    <MicroFrontend
      id={2}
      name="Micro-Frontend Y"
      microId="MicroAppY"
      host={microyHost}
      basePath="/micro-y"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};
