import { Switch, Route, Redirect } from "react-router-dom";

import StudyRoad from "./StudyRoad";
import ModulePage from "./TopicPage";
import TutorialPage from "./DocumentPage";
const ContentPage = ({setGrayBg}) => {
    return ( 
        <>
        <div className="Empty-sidebar">

        </div>
        <div className="App-with-sidebar-content">
            <div className="index-grid">
                <Switch>
                    <Route exact path={'/module/:slug'} component={ModulePage}/>
                    <Route exact path={'/studyRoad'} component={StudyRoad}/>
                    <Route exact path={'/tutorial/:slug'} 
                    render={() => {
                        setGrayBg(true)
                        return(
                            <TutorialPage />
                        )
                    }}/>
                    <Redirect exact from="/tutorial" to={'/studyRoad'}/>
                </Switch>
            </div>
        </div>
        </>
     );
}
 
export default ContentPage;