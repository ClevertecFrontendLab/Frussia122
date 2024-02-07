import { Wrapper, Header, Content, Footer, FooterItem, FooterItemText } from './styled';
import { Props } from '../models/types';

export const CardLayout: React.FC<Props> = ({ data, customStyle }) => {
  const { header, content, footer, contentHtml } = data;

  const {
    headerColor = 'black',
    footerColor = 'black',
    contentColor = 'black',
    headerFontSize = 16,
    footerFontSize = 16,
    contentFontSize = 16,
    headerFontWeight = 400,
    contentFontWeight = 400,
    footerFontWeight = 400
  } = customStyle || {};

  return (
    <Wrapper style={footer? {padding: '12px 0 12px 0'} : {padding: '24px'}}>
      {header && (
        <Header
          headerColor={headerColor}
          headerFontWeight={headerFontWeight}
          headerFontSize={headerFontSize}
        >
          {header}
        </Header>
      )}
      {content && (
        <Content
          contentColor={contentColor}
          contentFontWeight={contentFontWeight}
          contentFontSize={contentFontSize}
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
          {footer.map(item => (
            <FooterItem 
                key={item.id}
                footerColor={footerColor} 
                footerFontWeight={footerFontWeight} 
                footerFontSize={footerFontSize}>
              {item.icon}
              <FooterItemText>{item.text}</FooterItemText>
            </FooterItem>
          ))}
        </Footer>
      )}
    </Wrapper>
  );
};