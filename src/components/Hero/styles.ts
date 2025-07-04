import styled from "styled-components";
import type { PropsWithChildren } from "react";

export const Container = styled.section<
  PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  // New added
  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }
  .social-media a {
    transition: transform 0.2s cubic-bezier(0.4, 0.2, 0.2, 1);
    display: inline-flex;
    align-items: center;
  }
  .social-media a:hover {
    transform: scale(1.5);
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }
  @media (max-width: 480px) {
    margin-top: 45%;
  }

  .btn-grad {
    background-image: linear-gradient(
      to right,
      #1cd8d2 0%,
      #93edc7 51%,
      #1cd8d2 100%
    );
  }
  .btn-grad {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    font-size: 20px;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 30px;
    display: block;
  }

  .btn-grad:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
