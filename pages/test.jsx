import { useState } from "react";
import styled from "styled-components";
import Radio from "../components/Radio/Radio";
import * as S from "../components/Radio/Radio.styles";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  /* background-color: lightgray; */
  height: 100vh;

  & > .vl {
    border: 0.5px solid lightgray;
    height: 100%;
    position: absolute;
  }

  & > .hl {
    border: 0.5px solid lightgray;
    width: 100%;
    position: absolute;
  }
`;

const test = () => {
  // const [loading, setLoading] = useState(false);

  // const getdata = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     console.log("this is somedata");
  //   }, 4000);
  // };
  const [video, setVideo] = useState("");

  const setOption = (e) => {
    console.log(e.target.value);
    setVideo(e.target.value);
  };

  return (
    <Container>
      {/* <div className="vl"></div> */}
      {/* <div className="hl"></div> */}
      {/* <S.RadioButton2 value={1.2} valueExtension="Months" name="views" disabled={true}/> */}
      <S.RadioButton
        value="USB"
        valueExtension=""
        name="videos"
        option={video}
        setOption={setOption}
      />
      <S.RadioButton
        value="Download"
        valueExtension=""
        name="videos"
        option={video}
        setOption={setOption}
      />
    </Container>
  );
};

test.getLayout = (page) => page;

export default test;
