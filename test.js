import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        const name = 'Khatereh';
        const showHello = true;
        const showMath = true;
        let math;
        if (showMath)
            math = <h2><div>1 + 1 = {1 + 1}</div></h2>;
        else
            math = null;
        
        return (
            <div> 
        { showHello ? (<h1> <p>Hi I'm {name} </p> </h1>): null}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dignissimos numquam atque harum qui minima culpa quam a? Quae mollitia ratione quaerat quas dolorem, eos quisquam laboriosam. Rerum, quaerat consectetur?</p>
                <br />
                <p><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae maiores vitae accusantium quas. Veritatis obcaecati provident, nam repellendus voluptatem aut quis vero dignissimos nesciunt, explicabo maiores sequi, numquam aliquid.</i></p>
                <br />                
                {math}
            </div>
        )
    }
}

export default Test