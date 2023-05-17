import React, { Component } from 'react'
import Card from '../component/Card';

export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
         
   async componentDidMount(){
        let url = await 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e02d5f50fbe40c8b3ec8e4d1ffd49c5&pageSize=20'
        let data = await fetch(url)
        let parserData = await data.json()
        this.setState({articles: parserData.articles, totalResults: parserData.totalResults })
    }

    handlePreviouClick = async () =>{
        
        let url = await `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e02d5f50fbe40c8b3ec8e4d1ffd49c5&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parserData = await data.json()
        this.setState({ 
            page: this.state.page-1,
            articles: parserData.articles })


    }

    handleNextClick = async () => {
        if( this.state.page+1 >  Math.ceil(this.state.totalResults/20)){

        }else{

      
        let url = await `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e02d5f50fbe40c8b3ec8e4d1ffd49c5&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url)
        let parserData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parserData.articles })
        }

    }

  render() {

    return (
<>
        <div className='row'>
  {this.state.articles.map((element) => (
    <div className='column'>
      <Card
        title={element.title}
        description={element.description}
        img={element.urlToImage}
        news={element.url}
      />
    </div>
  ))}
</div>

<div className='pageChange'>
    <button disabled = {this.state.page <=1 } onClick={this.handlePreviouClick}>&larr; Previous</button>
    <p>Page no. {this.state.page}</p>
    <button  disabled = {this.state.page+1 >  Math.ceil(this.state.totalResults/20) } onClick={this.handleNextClick} > Next &rarr;</button>
</div>

</>

    )
  }
}
