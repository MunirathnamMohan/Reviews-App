import { Component } from "react"

import './index.css'

class ReviewsCarousel extends Component {
    state={isActive:0}

    getFilteredItem=()=>{
        const {isActive}=this.state
        const{reviewsList}=this.props
        const res=reviewsList.filter((each)=>each.id===isActive)
        return res
    }
    onLeftArrow=()=>{
        const{isActive}=this.state
        const{reviewsList}=this.props
        if(isActive>(reviewsList.length === 0)){
            this.setState((prevState)=>({isActive:prevState.isActive-1}))

        }

    }

    onRightArrow=()=>{
        const{isActive}=this.state
        const{reviewsList}=this.props
        const size=reviewsList.length
        if(isActive>=0 && isActive<size-1){
           this.setState((prevState)=>({isActive:prevState.isActive+1}))
        }else if(isActive===size-1){
            this.setState({isActive:0})
        }
    }

   
       render(){
        const{reviewsList}=this.props
       const filteredOne=this.getFilteredItem()
       
        return(
            <div className="bg-container">
                <div className="card-con">
                    <h1 className="header">Reviews</h1>
                    <div className="reviews-list-con">
                        <img className="arrow" onClick={this.onLeftArrow}  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"/>
                        
                           {filteredOne.map((each)=>( 
                           <ul className="text-con">
                             <img src={each.imgUrl}/>
                            <p className="name">{each.username}</p>
                            <p className="company-name">{each.companyName}</p>
                            <p className="desc">{each.description}</p>
                            </ul>
                         
                        )
                       )}
                       
                        <img className="arrow" onClick={this.onRightArrow} src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"/>

                    </div>

                </div>

            </div>
        )
       }

       
    }



export default ReviewsCarousel