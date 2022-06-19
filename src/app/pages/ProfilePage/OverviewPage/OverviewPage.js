import { faCashRegister, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "@themesberg/react-bootstrap";
import { LineChart } from "app/components/Chart/Chart";
import { CounterWidget, ProgressTrackWidget } from "app/components/Widgets";
import { getTopicStatistic } from "app/core/apis/user";
import { getTimeAndPercentCorrectByID } from "app/utils/ArrayUtils";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./OverviewPage.css";

const { TabPane } = Tabs;
const OverviewPage = () => {
  const [examOverview, setExamOverview] = useState("");
  const [historyExam, setHistoryExam] = useState("");
  const [predictNextResult, setPredictNextResult] = useState("");
  const [percentExam, setPercentExam] = useState("");
  const [percentPractice, setPercentPractice] = useState("");
  const [percentMixingExamTest, setPercentMixingExamTest] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await getTopicStatistic("normal_practice");
        const response1 = await getTopicStatistic("topic_practice");
        const response2 = await getTopicStatistic("exam");
        if (response2.status === 200 && response1.status === 200) {
          setExamOverview(response2?.data?.exam);

          setPercentExam(
            response2?.data?.exam?.topicsList.map((item, index) => {
              return {
                title: item.title,
                countCorrect: item.totalCorrect,
                percentage:
                  item.totalQuestion !== 0
                    ? parseInt(
                        (
                          (item.totalCorrect / item.totalQuestion) *
                          100
                        ).toFixed(0)
                      )
                    : 0,
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                total: item.totalQuestion,
                last:
                  index === response2?.data?.exam?.topicsList?.length - 1
                    ? true
                    : false,
              };
            })
          );

          setPercentPractice(
            response1?.data?.exam?.topicsList.map((item, index) => ({
              title: item.title,
              countCorrect: item.totalCorrect,
              percentage:
                item.totalQuestion !== 0
                  ? parseInt(
                      ((item.totalCorrect / item.totalQuestion) * 100).toFixed(
                        0
                      )
                    )
                  : 0,
              color: "#" + Math.floor(Math.random() * 16777215).toString(16),
              total: item.totalQuestion,
              last:
                index === response1?.data?.exam?.topicsList?.length - 1
                  ? true
                  : false,
            }))
          );

          setPercentMixingExamTest(
            response?.data?.exam?.topicsList.map((item, index) => ({
              title: item.title,
              countCorrect: item.totalCorrect,
              percentage:
                item.totalQuestion !== 0
                  ? parseInt(
                      ((item.totalCorrect / item.totalQuestion) * 100).toFixed(
                        0
                      )
                    )
                  : 0,
              color: "#" + Math.floor(Math.random() * 16777215).toString(16),
              total: item.totalQuestion,
              last:
                index === response?.data?.exam?.topicsList?.length - 1
                  ? true
                  : false,
            }))
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Row className="justify-content-md-center mt-4 overview-container-page">
        {historyExam !== "" &&
          historyExam !== [] &&
          predictNextResult !== "" && (
            <LineChart
              {...getTimeAndPercentCorrectByID(historyExam, predictNextResult)}
              title="Result and Prediction"
            />
          )}
        <Tabs defaultActiveKey="1">
          <TabPane tab="Exam statistic" key="1">
            <div className="statistic-component">
              <h2>Exam statistic</h2>
              <div>
                <Col xs={12} sm={6} xl={4} className="mb-4">
                  <CounterWidget
                    category="Number of times to make exam tests"
                    title={examOverview.totalExams}
                    period="Feb 1 - Apr 1"
                    percentage={18.2}
                    icon={faChartLine}
                    iconColor="shape-secondary"
                  />
                </Col>
              </div>

              <div>
                <ProgressTrackWidget
                  titleProgress={"Exam progess track"}
                  data={percentExam !== "" ? percentExam : []}
                />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Practice statistic" key="2">
            <div className="statistic-component">
              <h2>Practice statistic</h2>
              <div>
                <Col xs={12} sm={6} xl={4} className="mb-4">
                  <CounterWidget
                    category="Number of times to make practice tests"
                    title={examOverview.totalPractices}
                    period="Feb 1 - Apr 1"
                    percentage={28.4}
                    icon={faCashRegister}
                    iconColor="shape-tertiary"
                  />
                </Col>
              </div>
              <ProgressTrackWidget
                titleProgress={"Practice progess track"}
                data={percentPractice !== "" ? percentPractice : []}
              />
            </div>
          </TabPane>
          <TabPane tab="Mixing Exam Test statistic" key="3">
            <div className="statistic-component">
              <h2>Mixing Exam Test statistic</h2>
              <div>
                <Col xs={12} sm={6} xl={4} className="mb-4">
                  <CounterWidget
                    category="Number of times to make practice tests"
                    title={examOverview.totalPractices}
                    period="Feb 1 - Apr 1"
                    percentage={28.4}
                    icon={faCashRegister}
                    iconColor="shape-tertiary"
                  />
                </Col>
              </div>
              <ProgressTrackWidget
                titleProgress={"Mixing exam test progess track"}
                data={percentMixingExamTest !== "" ? percentMixingExamTest : []}
              />
            </div>
          </TabPane>
        </Tabs>

        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Traffic Share" data={trafficShares} />
        </Col> */}
      </Row>
    </>
  );
};

export default OverviewPage;
