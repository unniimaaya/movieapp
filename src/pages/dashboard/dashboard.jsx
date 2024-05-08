import { Card } from "antd";
import moviesimg from "../../asset/movies.jpeg";
import Videos from "../../component/card/utubevideos/videos";

function Dashboard() {
  const { Meta } = Card;
  return (
    <>
      <h1 style={{ color:"white" }} >Welcome </h1>

      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
               
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
              style={{color:"white"}}
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
        <div className="row mt-4 py-5">
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
               
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
              style={{color:"white"}}
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <Card
              style={{
                height: 200,
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
        <div className="row mt-5 py-5 ">
            <div className="col-xl-4">
                
            <Videos/>
            </div>
           
        </div>
      </div>
    </>
  );
}
export default Dashboard;
