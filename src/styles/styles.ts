import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    .emkYpc{
        background-color: hsl(200, 100%, 10%);
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        background-image: url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
    }

    img{
        -webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: hsl(200, 100%, 10%);
        font-size: 56px;
        line-height: 1.18;
        white-space: pre-line;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: hsl(120, 100%, 25%);
        font-size: 25px;        
        line-height: 1.41;
        white-space: pre-line;
        text-decoration: strong;
        text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 hsl(120, 100%, 25%), -1px 0 0 hsl(120, 100%, 25%);
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
