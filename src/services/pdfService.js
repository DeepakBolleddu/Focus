// pdfService.js

import axios from 'axios';

const API_KEY = 'david8deepu@gmail.com_820ZqWQi6g8X2n6GRojD4X6Hf7qEXQ0lcWNoyMna9p6vzj9re6p8e0a8495M55S0'; // Replace with your PDF.co API key
const API_ENDPOINT = 'https://api.pdf.co/v1/pdf/convert/from';

const generateResumePDF = async (resumeData) => {
  try {
    const response = await axios.post(API_ENDPOINT, resumeData, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Error generating PDF');
  }
};

export default generateResumePDF;