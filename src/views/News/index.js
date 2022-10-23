import React, { useEffect } from "react";
import Card from "../../components/Card";
import { fetchAllNews } from "../../store/slices/news/index.js";
import { useDispatch, useSelector } from "react-redux";
import CreatedPost from "../../components/CreatedPost";
import Tabsmenu from "../../components/Tabsmenu";
import PostControversiales from "../../components/PostControversiales";
import "./news.scss";

const Home = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchAllNews());
  }, []);

  return (
    <div className="containerNews">
      <div>
        <CreatedPost />
        <Tabsmenu active={3} />

        <div className="post">
          {news.new.map((per, index) => {
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
