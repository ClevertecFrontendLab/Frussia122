import { CustomLoader, Wrapper } from "./styled";

import animationData from "../data/loader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Loader = () => (
  <Wrapper data-test-id="loader">
    <CustomLoader options={defaultOptions} height={100} width={100} />;
  </Wrapper>
);
