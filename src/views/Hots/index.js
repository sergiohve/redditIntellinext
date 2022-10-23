import React, { useEffect } from "react";
import Card from "../../components/Card";
import { fetchAllHots } from "../../store/slices/hots/index.js";
import { useDispatch, useSelector } from "react-redux";
import CreatedPost from "../../components/CreatedPost";
import Tabsmenu from "../../components/Tabsmenu";
import PostControversiales from "../../components/PostControversiales";

const Home = () => {
  const dispatch = useDispatch();

  const { hot } = useSelector((state) => state.hots);

  useEffect(() => {
    dispatch(fetchAllHots());
  }, []);

  return (
    <div className="containerHome">
      <div>
        <CreatedPost />
        <Tabsmenu active={2} />

        <div className="post">
          {hot.map((per, index) => {
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
