import { Wrapper, Content } from "./styled";
import { Col, Row } from "antd";
import { testData } from "../data/data";
import { MainFooter } from "@widgets/footer";
import { CardLayout } from "@shared/layouts/card";
import { Header } from "@widgets/header";
import background from "@pages/layouts/main/images/Main_page_light.png";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header title="Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!" />
      <Wrapper backgroundimg={background}>
        <Content>
          <Row>
            <Col span={24}>
              <CardLayout
                data={testData[0]}
                customstyle={{
                  contentcolor: "#061178",
                  contentfontweight: 500,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CardLayout
                data={testData[1]}
                customstyle={{
                  contentfontweight: 500,
                  contentfontsize: 20,
                }}
              />
            </Col>
          </Row>
          <Row gutter={[16, 0]}>
            {testData.slice(2, 5).map((data, index) => (
              <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}>
                <CardLayout
                  data={data}
                  customstyle={{
                    footercolor: "#2f54eb",
                    footerfontsize: 14,
                  }}
                />
              </Col>
            ))}
          </Row>
        </Content>
        <MainFooter />
      </Wrapper>
    </>
  );
};
