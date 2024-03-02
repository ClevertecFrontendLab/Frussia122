import { Props } from "../models/types";
import {
  Header,
  Content,
  Footer,
  FooterItem,
  FooterItemText,
  CardWrapper,
} from "./styled";

export const CardLayout: React.FC<Props> = ({ data, customstyle }) => {
  const { header, content, footer, contentHtml } = data;

  const {
    headercolor = "black",
    footercolor = "black",
    contentcolor = "black",
    headerfontsize = 16,
    footerfontsize = 16,
    contentfontsize = 16,
    headerfontweight = 400,
    contentfontweight = 400,
    footerfontweight = 400,
  } = customstyle || {};

  return (
    <CardWrapper
      style={footer ? { padding: "12px 0 12px 0" } : { padding: "24px" }}
    >
      {header && (
        <Header
          headercolor={headercolor}
          headerfontweight={headerfontweight}
          headerfontsize={headerfontsize}
        >
          {header}
        </Header>
      )}
      {content && (
        <Content
          contentcolor={contentcolor}
          contentfontweight={contentfontweight}
          contentfontsize={contentfontsize}
        >
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            content
          )}
        </Content>
      )}
      {footer && (
        <Footer>
          {footer.map((item) => (
            <FooterItem
              key={item.id}
              footercolor={footercolor}
              footerfontweight={footerfontweight}
              footerfontsize={footerfontsize}
            >
              {item.icon}
              <FooterItemText>{item.text}</FooterItemText>
            </FooterItem>
          ))}
        </Footer>
      )}
    </CardWrapper>
  );
};
