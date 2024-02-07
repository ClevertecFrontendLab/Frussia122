import { useEffect, useState } from 'react';
import { Wrapper, Content } from './styled';
import background from '../images/Main page_light.png'
import { Col, Row } from 'antd';
import { CardLayout } from '@shared/cardLayout';
import { testData } from '../data/data';
import { MainFooter } from '@widgets/footer';

export const MainPage: React.FC = () => {

    return (
        <>
            <Wrapper backgroundImg={background}>
                <Content>
                    <Row>
                        <Col span={24}>
                            <CardLayout
                                data={testData[0]}
                                customStyle={{
                                    contentColor: '#061178',
                                    contentFontWeight: 500,
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
                    <Row gutter={[16, 0]}>
                        {testData.slice(2, 5).map((data, index) => (
                            <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}>
                                <CardLayout
                                    data={data}
                                    customStyle={{
                                        footerColor: '#2f54eb',
                                        footerFontSize: 14,
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