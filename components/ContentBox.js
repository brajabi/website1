import styled from "styled-components"

import BulletItem from "../components/BulletItem"

export default ({ title, contentText, bulletList = false }) => (
  <Wrapper>
    <ContentTitle>{title}</ContentTitle>
    <ContentText>{contentText}</ContentText>
    {bulletList && (
      <BulletListWrapper>
        <BulletListTitle>{bulletList.title}</BulletListTitle>
        <BulletListItems>
          {bulletList.bulletListItems.map(p => (
            <BulletItem color={p.color}>{p.text}</BulletItem>
          ))}
        </BulletListItems>
      </BulletListWrapper>
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  width: 580px;
  height: 340px;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(8, 35, 51, 0.05);
  font-family: "Open Sans";
`
const ContentTitle = styled.h2`
  margin: 0;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 20px;
  font-size: 20px;
  color: #082333;
`
const ContentText = styled.p`
  margin-top: 16px;
  line-height: 24px;
  font-size: 16px;
  color: #3d5866;
  font-weight: normal;
`

const BulletListWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 24px;
`

const BulletListTitle = styled.div`
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  color: #082333;
`

const BulletListItems = styled.div`
  width: 100%;
  max-height: 120px;
  padding: 10px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
