import React, { forwardRef } from "react";
import { PageContainer, TextDiv } from "../style/Style";
import { useRecoilValue } from "recoil";
import { page } from "../store/recoil";
const third = forwardRef((props, ref) => {
  const current = useRecoilValue(page);
  return (
    <PageContainer ref={ref}>
      <TextDiv className={current === 3 ? "action " : null}>Third</TextDiv>
    </PageContainer>
  );
});

export default third;
