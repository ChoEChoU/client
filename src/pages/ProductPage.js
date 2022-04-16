import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
//import { useEffect } from "react";
import { useState } from 'react';

//antd - serch
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
//

const spawn = require('child_process').spawn;

const onSearch = value => spawn('python', ['parsing.py', value]);

function ProductPage() {
  // 더미데이터
  const [items, setitems] = useState([
    {
      platform : "img/DaangnMarket_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/ccc791bda675ecbfa6ef2d831ebea79bf603f9085cfbca183bfa177580e5728b.webp?q=82&s=300x300&t=crop",
      price: "150,000",
      title: "에어팟프로 Air Pods Pro 판매합니다.",
      address: "천안시 서북구 두정동",
      time: "30분 전",
    },
    {
      platform : "img/DaangnMarket_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/2e5ecd77627b7a5f60b6674777603a6c184c7f86df0823ed5ae100c616db005f.webp?q=82&s=300x300&t=crop",
      price: "160,000",
      title: "에어팟 프로 Air pod Pro 팝니다",
      address: "천안시 서북구 성정동",
      time: "50분 전",
    },
    {
      platform : "img/bunjang_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202203/2401731297F4715EE7190863D57AE08FF12C2ED14E926BF7DAA19D84F2FA24F9.jpg?q=82&s=300x300&t=crop",
      price: "165,000",
      title: "[정품/미개봉]에어팟 프로 미개봉/air pods pro",
      address: "천안시 서북구 성정동",
      time: "1시간 30분 전",
    },
    {
      platform : "img/bunjang_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/48CE25B987D47E3D8455A8E0F36A321DD72B0755ACD64436CDFAE2C74020B6C9.jpg?q=82&s=300x300&t=crop",
      price: "170,000",
      title: "Air Pods Pro 블루투스 이어폰",
      address: "천안시 동남구 신부동",
      time: "5시간 30분 전",
    },
    {
      platform : "img/bunjang_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202203/2A75BE1342A2EFE002E921B90C8294C614E2907AACAABCF5DAFE0A2575C428A5.jpg?q=82&s=300x300&t=crop",
      price: "175,000",
      title: "Air pods Pro 직거래만 합니다.",
      address: "천안시 동남구 신부동",
      time: "4시간 30분 전",
    },
    {
      platform : "img/DaangnMarket_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202203/46E18CBACC5E18628179D30630F2C7C94621BA548D0E086A35B161B31C2117AC.jpg?q=82&s=300x300&t=crop",
      price: "190,000",
      title: "AirPod Pro 에어팟 프로 미개봉 제품 판매 (에어팟프로)",
      address: "천안시 서북구 불당동",
      time: "8시간 30분 전",
    },
    {
      platform : "img/jgnara_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/68F894DA07489D599A0BF53A581B76BD06079F398725EFF330E1321990D7B6C1.jpg?q=82&s=300x300&t=crop",
      price: "200,000",
      title: "에어팟 프로 Airpod Pro 팝니다",
      address: "천안시 서북구 불당동",
      time: "2일 전",
    },
    {
      platform : "img/jgnara_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/9C4BDC5D31BA98A1BAE9E538EC17829ED9CFC6C23AAAE2953DE67D3E07465F8C.jpg?q=82&s=300x300&t=crop",
      price: "210,000",
      title: "AirPods Pro (에어팟 프로) / 에어팟 3세대 교환원해요",
      address: "천안시 서북구 불당동",
      time: "2일 전",
    },
    {
      platform : "img/jgnara_logo.png",
      imgSrc: "https://dnvefa72aowie.cloudfront.net/origin/article/202204/cb0148998c869026c33de622753437cbb985ad4dd30d2feb5cf795dbc72ab3d6.webp?q=82&s=300x300&t=crop",
      price: "225,000",
      title: "에어팟 프로 사실분 !",
      address: "천안시 서북구 두정동",
      time: "3일 전",
    }
  ])

  //useEffect(()=>{ 쓰고, json 데이터를 {data.map(()=><ItemCard />)} 이런식으로  
  return (
    <Container>
      <Categori>
        <CategoriItem>
          <h3>카테고리</h3>
        </CategoriItem>
        <CategoriItem>
          <CategoriSpan>전자기기</CategoriSpan>
          <CategoriSpan>의류</CategoriSpan>
          <CategoriSpan>악세서리</CategoriSpan>
          <CategoriSpan>도서</CategoriSpan>
        </CategoriItem>
        <CategoriItem>
          <CategoriSpan>미용</CategoriSpan>
          <CategoriSpan>식품</CategoriSpan>
          <CategoriSpan>가구</CategoriSpan>
          <CategoriSpan>기타</CategoriSpan>
        </CategoriItem>
      </Categori>

      <TextBox>
        <Search placeholder="사고싶은 상품을 입력하세요! " onSearch={onSearch} style={{ width: 600, height:60 }}/>
      </TextBox>

      <CardBox>
        <ItemCard items={items[0]} />
        <ItemCard items={items[1]} />
        <ItemCard items={items[2]} />
        <ItemCard items={items[3]} />
        <ItemCard items={items[4]}/>
        <ItemCard items={items[5]}/>
        <ItemCard items={items[6]}/>
        <ItemCard items={items[7]}/>
      </CardBox>
    </Container>
  );
}

export default ProductPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

const CardBox = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width:1520px;
  
  gap: 5px;
  row-gap: 30px;
  
  margin-top:30px;
  padding: 0 10%;
  margin-bottom:30px;
`

const TextBox = styled.div`
  display:flex;
  align-items:center;
  margin-top:30px;
  margin-bottom:-30px;
`

const Categori = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top:20px;
  margin-bottom:-10px;
  gap: 0px;

  width:1160px;
  height:160px;
  background-color:beige;
  border-radius: 10px;
`

const CategoriItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap : 40px;
  margin-top: 5px;
`

const CategoriSpan = styled.span`
    font-size: 20px;
    box-shadow: inset 0 -1.5px 0 #b2bec3; 
    line-height: 30px;
`