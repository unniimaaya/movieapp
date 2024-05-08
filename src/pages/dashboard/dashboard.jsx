import { Card } from "antd";
import moviesimg from "../../asset/movies.jpeg";
import Videos from "../../component/card/utubevideos/videos";
import MovieCards from "../../component/moviecards/moviecards";

function Dashboard() {
  
  return (
    <>
      <h1 style={{ color:"white" }} >Welcome </h1>

      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-xl-4 col-lg-4 col-sm-6">
           <MovieCards/>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
          <MovieCards/>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
          <MovieCards/>
          </div>
        </div>
        <div className="row mt-5 py-5">
          <div className="col-xl-4 col-lg-4 col-sm-6">
          <MovieCards/>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
          <MovieCards/>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
          <MovieCards/>
          </div>
        </div>
        <br></br>
        <div className="row mt-5 py-5 ">
            {/* <div className="col-xl-4 col-lg-4 col-sm-6"> */}
                
            <Videos/>
            {/* </div> */}
           
        </div>
      </div>
    </>
  );
}
export default Dashboard;
