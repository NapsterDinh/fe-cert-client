export const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const countAnswerRatePerTopic = (dataParams, topic, submissions) => {
  if (
    dataParams !== undefined &&
    topic.length !== 0 &&
    submissions !== undefined
  ) {
    const groupByIDTopic = groupBy(dataParams, "topic");
    let groupQuestionByTopic = {
      labels: Object.keys(groupByIDTopic).map(
        (item) => topic.find((t) => t._id === item)?.title
      ),
      series: Object.entries(groupByIDTopic).map((item) => item),
    };

    let result = groupQuestionByTopic.series.map((item, index) => {
      let countCorrect = 0;
      item[1].map((t) => {
        const tempArray = submissions.find((u) => t._id === u.question_id);
        if (tempArray !== undefined && tempArray.correct) {
          countCorrect++;
        }
      });
      return {
        title: groupQuestionByTopic.labels[index],
        percentage: ((parseInt(countCorrect) / item[1].length) * 100).toFixed(
          0
        ),
        total: item[1].length,
        countCorrect: countCorrect,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        last: index === groupQuestionByTopic.series.length - 1 ? true : false,
      };
    });
    return result;
  }
  return [];
};

export const countPercentTopicInExam = (dataParams, topic) => {
  if (dataParams !== undefined && topic.length !== 0) {
    const groupByIDTopic = groupBy(dataParams, "topic");

    return {
      labels: Object.keys(groupByIDTopic).map(
        (item) => topic.find((t) => t._id === item)?.title
      ),
      series: Object.entries(groupByIDTopic).map((item) =>
        parseInt(item[1].length)
      ),
    };
  }
  return {
    labels: ["Empty"],
    series: [100],
  };
};

export const countPercentAnswerRate = (dataParams, submissions) => {
  if (dataParams !== undefined && submissions !== undefined) {
    const temp = [...submissions].map((item) => {
      const tempArray = dataParams.find((t) => item._id === t.question_id);
      if (item?.answers === "") {
        return {
          ...tempArray,
          result: "No Answer",
        };
      } else {
        if (item.correct) {
          return {
            ...tempArray,
            result: "Correct",
          };
        } else {
          return {
            ...tempArray,
            result: "Incorrect",
          };
        }
      }
    });
    const groupByResult = groupBy(temp, "result");

    return {
      labels: Object.keys(groupByResult),
      series: Object.entries(groupByResult).map((item) =>
        parseInt(item[1].length)
      ),
    };
  }
  return {
    labels: ["Empty"],
    series: [100],
  };
};


export const getTimeAndPercentCorrectByID = (historyExam, resultNextTest) => {
  if (historyExam !== undefined) {
    let result = [...historyExam].map((item) => {
      let count = [...item?.newSubmissions]?.filter(
        (item) => item.correct === true
      ).length;
      let total = [...item?.newSubmissions].length;
      return {
        count: count,
        total: total,
        percentage: ((count / total) * 100).toFixed(2),
        time: new Date(item?.result?.createdAt).toLocaleString(),
      };
    });
    let totalCorrect = 0;
    let totalSubmission = 0;
    result.map((item) => {
      totalCorrect += item.count;
      totalSubmission += item.total;
    });
    const average = ((totalCorrect / totalSubmission) * 100).toFixed(2);

    if (resultNextTest !== undefined) {
      result.push({
        count: 0,
        total: 0,
        percentage: resultNextTest,
        time: new Date().toLocaleString(),
      });
    }

    return {
      annotations: {
        yaxis: [
          {
            y: average,
            borderColor: "#00E396",
            offsetY: 20,
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: `Average: ${average}`,
            },
          },
        ],
        points: [
          resultNextTest !== undefined && {
            x: new Date().toLocaleString(),
            y: resultNextTest,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
              cssClass: "apexcharts-custom-class",
            },
            label: {
              borderColor: "#FF4560",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#FF4560",
              },

              text: `Result Prediction: ${resultNextTest}`,
            },
          },
        ],
      },
      xaxis: {
        categories: [...result].map((item) => item.time).slice(-5),
        title: {
          text: "Time to test",
        },
      },
      yaxis: {
        title: {
          text: "Percentage of Correct Answer",
        },
        min: 0,
        max: 100,
      },
      series: [
        {
          name: "Chart Line of correct answer",
          data: [...result].map((item) => item.percentage).slice(-5),
        },
      ],
    };
  }
  return [];
};
