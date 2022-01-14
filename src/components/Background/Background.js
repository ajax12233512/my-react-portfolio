import React from "react";
import Sketch from "react-p5";
import './Background.css';



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
	};

    const ellipsesArr = [];

    class Ellipse {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.xSpeed = 1;
            this.ySpeed = 1;
            this.history = [];
        }

        getX(){
            return this.x;
        }
        getY(){
            return this.y;
        }
        moveX(){
            if(this.x >= window.innerWidth){
                this.xSpeed = -1;
            }
            if(this.x <= 0){
                this.xSpeed = 1;
            }
            this.x += this.xSpeed;
        }
        moveY(){
            if(this.y >= window.innerHeight){
                this.ySpeed = -1;
            }
            if(this.y <= 0){
                this.ySpeed = 1;
            }
            this.y += this.ySpeed;
        }
    }

    for(let k = 0; k < 10; k++){
        let newEllipse = new Ellipse(
            Math.floor(Math.random() * window.innerWidth), 
            Math.floor(Math.random() * window.innerHeight)
        );
        ellipsesArr.push(newEllipse);
    }

    let r = 50;
    let g = 5;
    let b = 5;
    // let t = .4;

    let increment = 1;

	const draw = (p5) => {
        let color = p5.color('hsla(100, 90%, 80%, 1)');
	    p5.background(color);
        


        p5.fill(250);
        ellipsesArr.forEach(ellipse => {
            //Draw circle
            p5.fill(100, 50)
            p5.ellipse(ellipse.x, ellipse.y, 70, 70);

            //Move circle 
            ellipse.moveX();
            ellipse.moveY();

            
        })

        if(r >= 100) increment = -.4;
        else if(r <= 0) increment = .4;


        if(g >= 100) increment = -1;
        else if(g <= 0) increment = 1;


        if(b >= 100) increment = -2;
        else if(b <= 0) increment =.2;
  

        r += increment
        b += increment
        g += increment
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};

    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }
	return <Sketch windowResized={windowResized} className='sketch' setup={setup} draw={draw} />;
};