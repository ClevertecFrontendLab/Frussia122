import {
    CustomLoader,
    Wrapper
} from './styled'

import animationData from '../data/loader.json'; 

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Wrapper>
        <CustomLoader options={defaultOptions} height={100} width={100} />;
    </Wrapper>
  )
};
