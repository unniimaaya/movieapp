import { Card } from "antd";
import moviesimg from "../../asset/movies.jpeg";

function MovieCards({title,description}){
    const { Meta } = Card;
    return(
        <>
            <Card
              style={{
                height: 200,
               
              }}
              hoverable
              cover={<img alt="example" src={moviesimg} />}
            >
              <Meta
                title={title}
                description={description}
              />
            </Card>
        </>
    )
}
export default MovieCards