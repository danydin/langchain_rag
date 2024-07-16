import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'
async function segementDoc(){
    const response = await fetch('https://www.upwork.com/jobs/~010f7cbb88c1165183/?referrer_url_path=%2Fnx%2Fsearch%2Fjobs%2Fdetails%2F~0176d81173d49802ad');
    const text = await response.text();
    console.log(text);
}

segementDoc();