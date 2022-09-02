import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const App = () => {
  const words = {
    first : ['다음달에','갑자기','연말에','이번주에','다음주에','갑자기','이번달에','매일매일','언젠가','눈깜짝할새에'],
    second : ['해변','병원','집','바닷가','한강','카페','피시방','식당','길거리','공중화장실','편의점','버스정류장'],
    third: ['칭찬받는다','살이 찐다','돈을 줍는다','소원성취한다','넘어진다','복권에 당첨된다','귀인을 만난다','주목 받는다','꿈을 이룬다','건강해진다',
            '돈을 쓴다','키가 큰다','얻어먹는다','소리지른다','목표를 이룬다','살이 빠진다','노래를 부른다','아무일도 없다','취직한다','일복이 터진다',
            '씨름한다','원수를 만난다','휴식을 즐긴다','운명의 상대를 만난다','조심해야 한다','최고로 행복해진다','잔다','치킨을 먹는다','기분이 좋아진다','행운이 온다','바빠진다']
  }
  const [year, setYear] = useState(-1);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [resultShow, setResultShow] = useState(false);

  const changeYear = (year) => {
    let yearNum = year.slice(3,4);
    setYear(yearNum);
    setResultShow(!resultShow);
  }

  const restart = () => {
    setYear(-1);
    setMonth(0);
    setDay(0);
    setResultShow(!resultShow);
  }

  return (
    <Frame className='frame'>
      {
          resultShow
          ?
          <Inner>
            <TitleBox>
              <Title>2022 남은 운세 결과는 ?!</Title>
            </TitleBox>
            <ResultBox>
              <p>{ words.first[year] }</p>
              <p>{ words.second[month-1] }에서</p>
              <p>{ words.third[day-1] }</p>
            </ResultBox>
            <Button type="button" onClick={()=>{restart()}}>다시 하기</Button>
          </Inner>
          :
          <Inner>
            <TitleBox>
              <Title>2022 남은 운세 알아보기</Title>
            </TitleBox>
            <InputBox>
              <Content>
                <Input placeholder="태어난 년도를 입력하세요" type="text" onChange={(event) => setYear(event.target.value)} />
                <div>년</div>
              </Content>
              <Content>
                <Input placeholder="태어난 달을 입력하세요" type="number" onChange={(event) => setMonth(event.target.value)} />
                <div>월</div>
              </Content>
              <Content>
                <Input placeholder="태어난 날을 입력하세요" type="number" onChange={(event) => setDay(event.target.value)} />
                <div>일</div>
              </Content>
            </InputBox>

            <Button type="button" onClick={()=>{changeYear(year)}}>결과 보기</Button>
          </Inner>
      }
    </Frame>
  )
}

export default App;

const Frame = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Y_Spotlight';
  font-weight: 400;
  font-size: 20px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleBox = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`
const Title = styled.div`
  font-size: 28px;
  font-family: 'PyeongChangPeace-Bold';
  color: white;
  text-shadow: 2px 2px 0 #ab21ff;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: white;
`
const Input = styled.input`
  padding: 8px;
  margin-right: 5px;

  font-family: 'Y_Spotlight';
  font-weight: 400;
  font-size: 16px;

  color: black;
`
const Button = styled.button`
  padding: 8px;
  width: 250px;

  font-family: 'Y_Spotlight';
  font-weight: 400;
  font-size: 16px;

  background-color: transparent;
  border: 3px inset #ab88ff;
  color: white;
  &:focus{
    border: 3px outset #ab88ff;
  }
`

const ResultBox = styled.div`
  margin-bottom: 10px;
  color: white;
`