import FreeToGameInputKeys from './FreeToGameInputKeys';
import FreeToGameRenderSearchBar from './FreeToGameRenderSearchBar';

const FreeToGameRenderCheckedInputs = (checkedInputs: Array<string>) => {
  const checkedNames = FreeToGameInputKeys.map((key) =>
    checkedInputs.includes(key) ? key : ''
  );

  return FreeToGameRenderSearchBar({ names: checkedNames });
};

export default FreeToGameRenderCheckedInputs;
