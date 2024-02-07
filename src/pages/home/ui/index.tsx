import {
    Wrapper,
    Content
} from './styled';
import background from '../images/Main page_light.png'
import { Col, Row } from 'antd';
import { CardLayout } from '@shared/cardLayout';
import { testData } from '../data/data';
export const MainPage: React.FC = () => {

    return (
            <Wrapper backgroundImg={background}>
                <Content>
                    <Row>
                        <Col span={24}>
                            <CardLayout 
                                data={testData[0]} 
                                customStyle={{
                                    contentColor: '#061178',
                                }}
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <CardLayout 
                                data={testData[1]}
                                customStyle={{
                                    contentFontWeight: 500,
                                    contentFontSize: 20,
                                }}
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                             <CardLayout 
                             data={testData[2]}
                             customStyle={{
                                footerColor: '#2f54eb',
                                footerFontSize: 14,
                            }}
                             />
                        </Col>
                        <Col span={8}>
                             <CardLayout 
                             data={testData[3]}
                              customStyle={{
                                footerColor: '#2f54eb',
                                footerFontSize: 14,
                            }}/>
                        </Col>
                        <Col span={8}>
                             <CardLayout 
                             data={testData[4]}
                              customStyle={{
                                footerColor: '#2f54eb',
                                footerFontSize: 14,
                            }}/>
                        </Col>
                    </Row>
                </Content>
            </Wrapper>
    );
};
