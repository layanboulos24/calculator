import React from "react";
import Button from "./button.js";
import OutputScreen from "./outputScreen.js";
import CalculatorTitle from "./calculatorTitle.js";

class Calculator extends React.Component {
    constructor(){
        super();
        this.state = {
            question: '',
            answer: '',
        }

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(event) {
        const value = event.target.value;

        console.log("Button clicked:", value);

        switch (value){
            case "=":
                console.log("Evaluating:", this.state.question);
                if(this.state.question !== ""){
                    let ans = "";
                    try{
                        ans = eval(this.state.question);
                    }
                    catch(err){
                        console.log("math error", err.message)
                        this.setState({answer: "Math Error"});
                        return;
                    }
                    if(ans === undefined || isNaN(ans)){
                        console.log("Answer is undefined or NaN, setting to Math Error");
                        this.setState({answer: "Math Error"});
                    } else {
                        console.log("calculated answer:", ans)
                        this.setState({answer: ans, question: ""});
                    }
                }
                break;
                
            case "Clear": {
                this.setState({question: "", answer: ""})
                break;
            }
            case "Delete": {
                this.setState((prevState) => ({
                    question: prevState.question.slice(0, -1)
                }));
                break;
            }
            default: {
                this.setState((prevState) => ({
                    question: prevState.question + value
                }));
                break;
            }

            
        }

        
    }

    
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="Calculator"/>
                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer}/>
                    <div className="button-row">
                        <Button label={"Clear"} value="Clear" handleClick={this.handleClick}/> 
                        <Button label={"Delete"} value="Delete" handleClick={this.handleClick}/> 
                        <Button label={"."} value="." handleClick={this.handleClick}/> 
                        <Button label={"/"} value="/" handleClick={this.handleClick}/> 
                    </div>
                    <div className="button-row">
                        <Button label={"7"} value="7" handleClick={this.handleClick}/> 
                        <Button label={"8"} value="8" handleClick={this.handleClick}/> 
                        <Button label={"9"} value="9" handleClick={this.handleClick}/> 
                        <Button label={"*"} value="*" handleClick={this.handleClick}/> 
                    </div>
                    <div className="button-row">
                        <Button label={"4"} value="4" handleClick={this.handleClick}/> 
                        <Button label={"5"} value="5" handleClick={this.handleClick}/> 
                        <Button label={"6"} value="6" handleClick={this.handleClick}/> 
                        <Button label={"-"} value="-" handleClick={this.handleClick}/> 
                    </div>
                    <div className="button-row">
                        <Button label={"1"} value="1" handleClick={this.handleClick}/> 
                        <Button label={"2"} value="2" handleClick={this.handleClick}/> 
                        <Button label={"3"} value="3" handleClick={this.handleClick}/> 
                        <Button label={"+"} value="+" handleClick={this.handleClick}/> 
                    </div>
                    <div className="button-row">
                        <Button label={"0"} value="0" handleClick={this.handleClick}/> 
                        <Button label={"="} value="=" handleClick={this.handleClick}/> 
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Calculator;