import styled from "styled-components";
import type { PropsWithChildren } from "react";

export const Container = styled.section<
  PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h2,
  h3,
  .experience h3,
  .education h3 {
    color: var(--green);
    font-weight: 700;
    letter-spacing: 0.01em;
  }
  h2 {
    font-size: 3.2rem;
    font-weight: 800;
    margin: 0 0 2rem 0;
  }
  h3,
  .experience h3,
  .education h3 {
    font-size: 2.2rem;
    margin: 2rem 0 1.2rem 0;
  }

  p,
  .experience-item p,
  .education p {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.7;
    margin: 0;
  }

  .hard-skills {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    font-size: 1.5rem;
    margin-top: 1.6rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .about-image {
    text-align: center;
    position: relative;
      div {
        position: absolute;
        width: 400px;
        height: 400px;
        background: var(--green);
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
    img {
      margin-top: 2rem;
      width: 50%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .experience,
  .education {
    margin-bottom: 0;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding-left: 2rem;
    border-left: 3px solid var(--green);
  }

  .experience-item {
    padding: 0.2rem 0 0.7rem 0;
    min-width: unset;
    flex: unset;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .experience-item h4,
  .education h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.2rem 0;
  }

  .experience-item p,
  .education p {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.7;
    margin: 0;
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .certification {
      a {
        margin: 0 auto 25px auto;
        display: block;
        width: 100%;
        max-width: 300px;
      }
    }

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      text-align: center;
      position: relative;
      div {
        position: absolute;
        width: 300px;
        height: 300px;
        background: var(--green);
        border-radius: 50%;
      }
      img {
        margin-top: 2rem;
        width: 30%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }

    .experience-item {
      width: 100%;
      align-items: flex-start;
    }
    .experience-item h4,
    .education h4 {
      font-size: 1.2rem;
    }
    .experience-item p,
    .education p {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      width: 100%;
      position: relative;
      div {
        position: absolute;
        width: 200px;
        height: 200px;
        background: var(--green);
        border-radius: 50%;
      }
      img {
        margin-top: 2rem;
        width: 30%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
    .experience-item {
      padding: 0.1rem 0 0.5rem 0;
    }
    .experience-item h4,
    .education h4 {
      font-size: 1rem;
    }
    .experience-item p,
    .education p {
      font-size: 1rem;
    }
  }

  .about-text > *:not(:last-child) {
    margin-bottom: 0;
  }
`;
