import Link from "next/link"
import styled from "styled-components"

import ContentBox from "../components/ContentBox"

export default () => (
  <IndexContainer>
    <ContentBox
      title="Contributing to Prisma"
      contentText="Prisma is built by a welcoming community guided by our core team in Berlin and San Francisco. We welcome contributions of all forms from experienced developers and beginners alike."
      bulletList={{
        title: "Some great ways to get involved",
        bulletListItems: [
          { color: "#0F7AD8", text: "Report an issue" },
          { color: "#00CCE4", text: "Submit a pull request" },
          { color: "#15BD76", text: "Write documentation" },
          { color: "#FFCC07", text: "Write a blog post" },
          { color: "#FF4F56", text: "Give a conference talk" },
          { color: "#AA0D95", text: "Organize a meetup" }
        ]
      }}
    />
  </IndexContainer>
)

const IndexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  padding: 30px;
`
