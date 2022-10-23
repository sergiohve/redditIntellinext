import React, { useEffect } from "react";
import Card from "../../components/Card";
import { fetchAllRisings } from "../../store/slices/risings/index.js";
import { useDispatch, useSelector } from "react-redux";
import CreatedPost from "../../components/CreatedPost";
import Tabsmenu from "../../components/Tabsmenu";
import PostControversiales from "../../components/PostControversiales";



const Home = () => {
  const dispatch = useDispatch();

  const { rising } = useSelector((state) => state.risings);

  useEffect(() => {
    dispatch(fetchAllRisings());
  }, []);

  return (
    <div className="containerHome">
      <div>
        <CreatedPost />
        <Tabsmenu active={4} />

        <div className="post">
          {rising.map((per, index) => {
            return (
              <Card
                key={index}
                url={per.permalink}
                images={per.data.url_overridden_by_dest}
                coments={per.data.num_comments}
                name={per.data.author}
                title={per.data.title}
                description={per.data.selftext}
              />
            );
          })}
        </div>
      </div>
      <div className="controversial">
        <PostControversiales />
      </div>
    </div>
  );
};

export default Home;
