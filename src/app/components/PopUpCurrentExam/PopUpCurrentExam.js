import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Tooltip } from "antd";
import { checkExamByIdAndUser } from "app/core/apis/exam";
import { updateCurrentExam } from "app/store/examReducer";
const PopUpCurrentExam = () => {
  const user = useSelector((state) => state.persist.user?.user?.user);
  const location = useLocation();
  const [currentExam, setCurrentExam] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await checkExamByIdAndUser();
        if (response.status === 200) {
          setCurrentExam(response?.data?.exam);
          dispatch(updateCurrentExam(response?.data?.exam));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  //http://localhost:3000/exams/62a406e87fdf2d5e6e857b4e/attempt?question=1
  return (
    <>
      {currentExam !== "" &&
        currentExam !== null &&
        currentExam?.status !== "success" &&
        !location?.pathname?.includes("attemp") && (
          <Tooltip title="Continue to finish previous test">
            <a
              href={`/exams/${currentExam?.exam?._id}/attempt?question=1`}
              className="scroll-top current-exam"
            >
              <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </Tooltip>
        )}
    </>
  );
};

export default PopUpCurrentExam;
