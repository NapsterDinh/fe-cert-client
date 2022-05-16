import bannerBg from 'app/assets/img/to-chuc-thi-scaled.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Banner = ({ name }) => {
    const isHome = name === 'Home Page' ? "pageBanner_def home" : "pageBanner_def"

    return (
        <div className={isHome} style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="container_common">
                <div className="content_common">
                    <div className="ifm">

                        {
                            name === 'Home Page' ?
                                <div className="w3-content learntocodecontent">
                                    <h1 className="learntocodeh1">Learn about FE</h1>
                                    <h3 className="learntocodeh3">With the world's largest web developer site.</h3>
                                    <br></br>
                                    <div className="container-form" >
                                        <input type="text" placeholder="Search our tutorials" id="search2"></input>
                                        <button type="button" id="learntocode_searchbtn">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                    <h4>
                                        <a href="/studyRoad">Not Sure Where To Begin?</a>
                                    </h4>
                                </div>
                                :
                                <div className="name">{name}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;