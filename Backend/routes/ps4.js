var express = require('express');
var axios = require("axios");
const request = require('request');
const fetch = require('node-fetch');
const config = require('./config');

var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form_page', { title: 'CS412 is LIT' });
});

const constructUrl = (text) => {
  let textParam = text.replaceAll(' ', '+');
  let url = `${config['url']}?to=es&from=en&text=${textParam}`;
  return url;
};

// PROMISE CODE

router.post('/promise', (req, res) => {
  let textToTranslate = req.body.text;
  let endpointUrl = constructUrl(textToTranslate);

  const options = {
    method: 'GET',
    url: endpointUrl,
    headers: {
      'X-RapidAPI-Key': config['X-RapidAPI-Key'],
      'X-RapidAPI-Host': config['X-RapidAPI-Host']
    }
  };

  let makeRequest = () => {
    return new Promise((resolve, reject) => {
      request(options, function (error, response, body) {
        if (error) reject(error);
        let bodyJson = JSON.parse(body);
        let originalText = bodyJson.original_text;
        let translatedText = bodyJson.translated_text.es;
        resolve({
          'originalText': originalText,
          'translatedText': translatedText
        });
      });
    });
  }

  makeRequest().then((result => {
    res.render('display_translation', {
      'originalText': result.originalText,
      'translatedText': result.translatedText
    });
  })).catch(err => {
    console.log(err);
  });

});

// ASYNC CODE

router.post('/async', (req, res) => {
  let textToTranslate = req.body.text;
  let endpointUrl = constructUrl(textToTranslate);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config['X-RapidAPI-Key'],
      'X-RapidAPI-Host': config['X-RapidAPI-Host']
    }
  };

  (async function () {
    const response = await fetch(endpointUrl, options);
    const json = await response.json();
    let originalText = json.original_text;
    let translatedText = json.translated_text.es;
    res.render('display_translation', {
      'originalText': originalText,
      'translatedText': translatedText
    })
  }
  )()
});

// CALLBACK CODE

router.post('/callback', (req, res) => {
  let textToTranslate = req.body.text;
  let endpointUrl = constructUrl(textToTranslate);

  const options = {
    method: 'GET',
    url: endpointUrl,
    headers: {
      'X-RapidAPI-Key': config['X-RapidAPI-Key'],
      'X-RapidAPI-Host': config['X-RapidAPI-Host']
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let bodyJson = JSON.parse(body);
    let originalText = bodyJson.original_text;
    let translatedText = bodyJson.translated_text.es;
    res.render('display_translation', {
      'originalText': originalText,
      'translatedText': translatedText
    })
  });
});

module.exports = router;