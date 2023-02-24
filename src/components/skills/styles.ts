import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      
      }

      header{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
      }
      body{
        gap: 20px;
      }
      .skill-title{
        color:blue;
        
    }
      .skills-container{
  
        padding:20px;
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        gap:20px;
      
    }
    
    .skill{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        gap:20px;
        padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        
        
        padding:20px;
       
    }
    
    
    
    .skill-group{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        gap:20px;
    }
    .technology
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        gap:5px;
        color:white;
    }
    .image{
        flex-basis: 50%;
        align-items:center;
        justify-content:center;
        display:flex;
        position:absolute;
        z-index: -1;
    }
    
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`