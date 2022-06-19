import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const StudyRoadItem = ({ index, item }) => {
  const history = useHistory();
  return (
    <div className="LearningPathGroup_wrapper__PqkfS">
      <div
        className="d-flex justify-content-between title-container"
        onClick={() => history.push(`/topics/${item._id}`)}
      >
        <h2 className="LearningPathGroup_title__9Sige">{`${index + 1}. ${
          item.title
        }`}</h2>
        <FontAwesomeIcon icon={faCirclePlay} />
      </div>
      {item?.description !== undefined && (
        <div
          className="LearningPathGroup_desc__SnXOr"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        ></div>
      )}
      {/* <div className="body">
                <div className="CourseItem_wrapper__kyH00">
                    <div className="CourseItem_inner__YxSfd">
                        <div className="CourseItem_thumb__7g8hs"><a href="/courses/lessons-for-newbie"><img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="Kiến Thức Nhập Môn IT"></a></div>
                        <div className="CourseItem_info__kIF53">
                            <h2 className="CourseItem_title__ezJnH"><a href="/courses/lessons-for-newbie">Kiến Thức Nhập Môn IT</a></h2>
                            <p className="CourseItem_desc__uqUwX">Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.</p><a className="Button_btn__RW1e2 Button_primary__86yfm CourseItem_detail-btn__70DYv" href="/courses/lessons-for-newbie">Xem khóa học</a></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default StudyRoadItem;
