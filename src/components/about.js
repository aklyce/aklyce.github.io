import React from 'react';
import styled from 'styled-components'
import Angel from '../images/IMG_6565.jpg'



class About extends React.Component {
    

render() {
      const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    
    const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
    return (
        <Wrapper>
            <Title>
       
        
       Hello my name is Angel Klyce, thanks for visiting my page. I graduated from The University of California, Berkeley in May 2019 with my Bachelors Degree in Cognitive Science with a concentration in Computer Science. And I currently work at Yelp as a Technical Recruiting Coordinator for Software Engineers. <br></br> Bay Area born and raised! <br></br> Im a Software Engineer and have a love for Fullstack Frontend web development.
            </Title> 
             <Image src={Angel} alt="angel" style={{"height":"100%", "width": "100%"}} />
        </Wrapper>
        

    )
}
}
export default About;
