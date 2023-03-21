import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "../src/components/Link"

export async function getStaticProps() {

  const faq_api_url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq = await fetch(faq_api_url)
    .then(resposta => resposta.json())
    .then(data => {
      return data;
    })
  return {
    props: { faq },
  }
};



const FaqPage = ({ faq }) => {


  /*
  const [faq, setFaq] = useState([]);
     useEffect(() => {
    const faq_api_url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  
      fetch(faq_api_url)
        .then(resposta => resposta.json())
        .then(data => setFaq(data))
    }, []) */


  return (
    <div>
      <Head> <title> FAQ - Alura Cases Campanha </title> </Head>

      <h1> Alura cases- Página de perguntas FAQ </h1>
      <Link href="/">Ir para a home</Link>
      <div>
        <ul>
          {faq.map(({ answer, question }, i) => (
            <li key={i}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default FaqPage;