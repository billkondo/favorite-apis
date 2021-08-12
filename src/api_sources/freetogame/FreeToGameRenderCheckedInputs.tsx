import FREETOGAME_KEY from './FreeToGameKey';

import FreeToGameRenderSearchBar from './FreeToGameRenderSearchBar';

const FreeToGameInputKeys = [
  `${FREETOGAME_KEY}_platform`,
  `${FREETOGAME_KEY}_category`,
  `${FREETOGAME_KEY}_sortBy`,
];

const FreeToGameRenderCheckedInputs = (checkedInputs: Array<string>) => {
  const checkedNames = FreeToGameInputKeys.map((key) =>
    checkedInputs.includes(key) ? key : ''
  );

  return FreeToGameRenderSearchBar(checkedNames);
};

export default FreeToGameRenderCheckedInputs;
