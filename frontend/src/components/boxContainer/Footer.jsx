import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vmax;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10vmax;
`;

export const FooterElementFirst = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterH4 = styled.h4`
  text-align: center;
  color: #fff;
  font-family: "Roboto";
`;

export const FooterP = styled.p`
  text-align: center;
  font-family: "Roboto";
`;

export const FooterH1 = styled.h1`
  font-size: 3vmax;
  font-family: "Roboto";
  color: #EE2019;
  text-align: center;
`;

export const FooterA = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  color: white;
  margin: 0.5vmax;
  transition: all 0.5s;
  &:hover {color:#EE2019}
`;
export function FooterJSX() {
  return (
    <FooterContainer>
      <FooterElementFirst>
        <FooterH4>Về chúng tôi</FooterH4>
        <FooterP>Công ty TNHH thương mại điện tử Gaming Gear</FooterP>
        <FooterP>370 Lê Hồng Phong, Phú Hòa, Thủ Dầu Một, Bình Dương</FooterP>
        <FooterP>Số điện thoại: 0989230351</FooterP>
      </FooterElementFirst>

      <FooterElementFirst>
        <FooterH1>GAMING GEAR</FooterH1>
        <FooterP>Cửa hàng linh kiện máy tính</FooterP>
        <FooterP>Copyrights 2021 &copy; Trần Minh Chiến</FooterP>
      </FooterElementFirst>

      <FooterElementFirst>
        <FooterH4>Theo dõi chúng tôi</FooterH4>
        <FooterA href="#">Facebook</FooterA>
        <FooterA href="#">Instagram</FooterA>
      </FooterElementFirst>
    </FooterContainer>
  );
}
