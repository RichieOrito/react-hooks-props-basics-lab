import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio(props)}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {Links(props)}
    </div>
  );
}

function Links(props){
  return(
      <div>
      <h3>Links</h3>
          <a href={props.github}>{props.github}</a>
          <a href={props.linkedIn}>{props.linkedIn}</a>
      </div>
  )
}

function bio(props){
  if(!props.bio){
    return null
  }else{
    return <p>{props.bio}</p>
  }
}

export default About;
