import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {

   // newstitle newscontent newsno newsFile
  // const { title, description, url, urlToImage } = article;
  const { newsTitle, newsContent, newsNo, newsFile } = article;
  return (
    <NewsItemBlock>
      {newsFile && (
        <div className="thumbnail">
          <a href={newsNo} target="_blank" rel="noopener noreferrer">
            <img src={newsFile} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={newsNo} target="_blank" rel="noopener noreferrer">
            {newsTitle}
          </a>
        </h2>
        <p>{newsContent}</p>
      </div>
    </NewsItemBlock> 
  );
};

export default NewsItem;