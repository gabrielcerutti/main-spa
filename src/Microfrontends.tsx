import MicroFrontend from './components/MicroFrontend';

const microaHost = process.env.REACT_APP_MICROA_HOST ?? '';
const microbHost = process.env.REACT_APP_MICROB_HOST ?? '';

export const MicroX = () => {
  return (
    <MicroFrontend
      id={1}
      name="Micro-frontend A"
      microId="YourBrandNewMicrofrontend"
      host={microaHost}
      basePath="main-spa/microx"
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
      microId="YourBrandNewMicrofrontendB"
      host={microbHost}
      basePath="main-spa/microy"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};
