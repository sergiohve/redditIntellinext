import React, { useEffect } from "react";
import { fetchAllControversial } from "../../store/slices/controversiales";
import { useDispatch, useSelector } from "react-redux";
import CardLateral from "../CardLateral";

const PostControversiales = () => {
  const dispatch = useDispatch();
  const { controversial } = useSelector((state) => state.controversiales);

  useEffect(() => {
    dispatch(fetchAllControversial());
  }, []);
  return (
    <div>
      {controversial.map((per, index) => {
        return (
          <CardLateral
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
  );
};

export default PostControversiales;
