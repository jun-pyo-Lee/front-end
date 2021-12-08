import React, {Component} from 'react';
import ApiService from '../../ApiService';
import styled from 'styled-components';

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
			<table>
				<tbody>
					{this.state.newses.map(news =>
						<tr key={news.url}  >
							<td>{news.urlToImage}</td>
							<h2>{news.title}</h2>
							<p>{news.description}</p>
							</tr>
							)}
				</tbody>
			</table>
		</NewsItemBlock>
		)
	}
}
export default NewsListComponent;