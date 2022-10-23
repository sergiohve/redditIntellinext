import React, { useEffect } from "react";
import Card from "../../components/Card";
import { fetchAllBest } from "../../store/slices/bests/index.js";
import CreatedPost from "../../components/CreatedPost";
import Tabsmenu from "../../components/Tabsmenu";
import { useDispatch, useSelector } from "react-redux";
import PostControversiales from "../../components/PostControversiales";
import "./best.scss";

const Home = () => {
  const dispatch = useDispatch();

  const { best } = useSelector((state) => state.bests);

  useEffect(() => {
    dispatch(fetchAllBest());
  }, []);

  return (
    <div className="containerHome">
      <div>
        <CreatedPost />
        <Tabsmenu active={1} />
        <div className="post">
          {best.map((per, index) => {
            return (
              <Card
                key={index}
                url={per.data.permalink}
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
