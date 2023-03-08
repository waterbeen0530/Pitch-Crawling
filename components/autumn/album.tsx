import styled from "@emotion/styled";

interface props {
  view: boolean;
  album: () => void;
}

export default function Album({ view, album }: props) {
  const item = [
    {
      title: "Celebrity",
      genre: "댄스",
      singer: "아이유",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize",
      number: "14,952,929",
    },
    {
      title: "밤하늘의 별을(2020)",
      genre: "발라드",
      singer: "경서",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/18/234/10518234_20210216102853_500.jpg/melon/resize/120/quality/80/optimize",
      number: "7,967,549",
    },
    {
      title: "Dynamite",
      genre: "댄스",
      singer: "방탄소년단",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/104/79/150/10479150_20200918102847_500.jpg/melon/resize/120/quality/80/optimize",
      number: "7,542,157",
    },
    {
      title: "롤린 (Rollin')",
      genre: "댄스",
      singer: "브레이브걸스",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/100/43/575/10043575_20210302112520_500.jpg/melon/resize/120/quality/80/optimize",
      number: "15,421,699",
    },
    {
      title: "Celebrity",
      genre: "댄스",
      singer: "아이유",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize",
      number: "14,124,051",
    },
    {
      title: "LOVE DAY (2021) (바른연애 길잡이 X 양요섭, 정은지)",
      genre: "댄스",
      singer: "양요섭정은지",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/73/486/10573486_20210304202053_500.jpg/melon/resize/120/quality/80/optimize",
      number: "8,393,389",
    },
    {
      title: "롤린 (Rollin')",
      genre: "댄스",
      singer: "브레이브걸스",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/100/43/575/10043575_20210302112520_500.jpg/melon/resize/120/quality/80/optimize",
      number: "15,915,169",
    },
    {
      title: "라일락",
      genre: "댄스",
      singer: "아이유",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize",
      number: "15,898,364",
    },
    {
      title: "Celebrity",
      genre: "댄스",
      singer: "아이유",
      cover:
        "https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize",
      number: "12,565,886",
    },
  ];
  return view ? (
    <Container>
      <Wrapper>
        <Header>
          <Title>봄 대중음악 특징</Title>
          <ExportButton onClick={album}>X</ExportButton>
        </Header>
        <Frame>
          {item.map((items, i) => (
            <Cover key={i}>
              <Image src={items.cover} />
              <Div>
                <Text>{items.title}</Text>
                <Genre>{items.genre}</Genre>
                <Singer>{items.singer}</Singer>
                <Number>{items.number}</Number>
              </Div>
            </Cover>
          ))}
        </Frame>
      </Wrapper>
    </Container>
  ) : (
    <></>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20202060;
`;

const Wrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 500px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c0c0c0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const ExportButton = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 14px;
  border-radius: 18px;
  border: 1px solid #aaa;
  background-color: #fff;
  color: #808080;
  cursor: pointer;
`;

const Frame = styled.div`
  width: 90%;
  height: 400px;
  margin-top: 30px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 39%);
  grid-row-gap: 30px;
`;

const Cover = styled.div`
  width: 200px;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgb(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const Image = styled.img``;

const Div = styled.div``;

const Text = styled.p`
  font-weight: 700;
`;

const Genre = styled.p``;

const Singer = styled.p``;

const Number = styled.p``;
