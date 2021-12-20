import React from "react"
import Game from '../lib';
import {Container,Col} from "react-bootstrap"
import { HomeWrapper } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default class Character extends React.Component {
    constructor(){
        super();
        this.state={
            status:false,
            Name:'',
            display:true,
            width:600

        }
      }
      HandleChacater(name){
this.setState({status:true})
this.setState({Name:name})

      }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        const characterarray=[
            {Name:"Batman",image:require('../img/CharacterOptions/batman.png')},
            {Name:"Dino",image:require("../img/CharacterOptions/Dino.png")},
            {Name:"Mickey",image:require("../img/CharacterOptions/Mickey.png")},
            {Name:"Sonic",image:require("../img/CharacterOptions/sonic.png")},
            {Name:"BlackRanger",image:require("../img/CharacterOptions/BlackRanger.png")},
            {Name:"Godzilla",image:require("../img/CharacterOptions/Godzilla.png")},
            {Name:"GreenRanger",image:require("../img/CharacterOptions/GreenRanger.png")},
            {Name:"Mario",image:require("../img/CharacterOptions/Mario.png")},
            {Name:"RedRanger",image:require("../img/CharacterOptions/RedRanger.png")},
            {Name:"JackSparrow",image:require("../img/CharacterOptions/JackSparrow.png")},
            {Name:"Aladdin",image:require("../img/CharacterOptions/Aladdin.png")}

        ]
        return (
            <HomeWrapper>       
            <Container>
        {this.state.status?   <Game player={this.state.Name}></Game>:
              
               <center>
               <h3 className="text-center text-primary">Select any Character</h3>
               <Slider {...settings}>
                {characterarray.map((ele,i)=>{
                    return(
                        <React.Fragment>
                      <Col>  
                        <div key={i} >
                        <div className="card" style={{"width":200,"marginTop":"10px"}}>
                        <img className="card-img-top" src={ele.image} height="150" alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title text-center">{ele.Name}</h5>
                          <button type="button" className="btn btn-success" onClick={this.HandleChacater.bind(this,ele.Name)}>Play</button>
                          <br/>
                        </div>
                        </div>
                        </div>
                        </Col>
                        </React.Fragment>
                     
                   
                    )
                })
                }
                </Slider>
               
               
                </center>
                }
        </Container>
        </HomeWrapper>

        )
    }
}
