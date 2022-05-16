const MainHomePage = () => {
    return ( 
    <>
        <div className="ws-black w3-center">
            <div className="w3-content learntocodecontent">
                <h1 className="learntocodeh1">Learn about FE</h1>
                <h3 className="learntocodeh3">With the world's largest web developer site.</h3>
                <br></br>
                <div className="container-form" >
                    <input type="text" placeholder="Search our tutorials" id="search2"></input>
                    <button type="button" id="learntocode_searchbtn"><i id="learntocode_searchicon" className="fa fa-search"></i></button>
                </div>  
                <h4>
                    <a href="/studyRoad">Not Sure Where To Begin?</a>
                </h4>
            </div>
        </div>
        <svg width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#2F6BFF"></path>
        </svg>
    </> 
    );
}
 
export default MainHomePage;