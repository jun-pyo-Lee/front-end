import React, {Component} from 'react';
import ApiService from '../../ApiService';
import NewsItem from './NewsItem';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


class NewsListComponent extends Component{
	constructor(props){
		super(props)

		this.state = {
			newses: [],
			message: null
		}
	}


	componentDidMount(){
		this.rerloadNewsList();
	}
	rerloadNewsList = () => {
		ApiService.fetchNewses()
		.then(res => {
			this.setState({
				newses: res.data
			})
		})
		.catch(err => {
			console.log('reloadNewsList() Error!', err);
		})
	}
	render(){

		return(
		<NewsItemBlock>
			<h2>News List</h2>
				<body>
					{this.state.newses.map(news =>
						<tr>
							<td>{news.newsFile}</td>
							<td>{news.newsNo}번</td>
							<td><h3>{news.newsTitle}</h3></td>
							<td>{news.newsContents}</td>
						</tr>
						)}
				</body>
		</NewsItemBlock>
		
				
		)
	}
}
export default NewsListComponent;