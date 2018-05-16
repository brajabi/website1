import styled from "styled-components"

export default ({ color, ...props }) => (
  <Wrapper>
    <Bullet color={color} />
    <span>{props.children}</span>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 24px;
  line-height: 24px;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Open Sans";
`
const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${props => props.color};
  line-height: 24px;
  font-size: 16px;
  color: #082333;
`
const BulletText = styled.div`
  flex-grow: 1;
`
