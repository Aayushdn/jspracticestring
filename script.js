'use strict';

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const links = document.querySelectorAll('li');
const submitBtn = document.querySelector('.sbmtBtn');
const txtMethods = document.querySelector('.txtMethods');
const txtArea = document.querySelector('#inpText');
const optRep = document.querySelector('.optReplace');
const customs = document.querySelectorAll('.customization');
const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');
console.log(customs, optRep);

const upperCase = function (text) {
  return text.toUpperCase();
};

const capitalize = function (text) {
  return text.replace(text[0], text[0].toUpperCase());
};

const lowerCase = function (text) {
  return text.toLowerCase();
};

const replace = function (text) {
  let userCustom = [];
  customs.forEach((custom) => {
    userCustom.push(custom.value);
  });
  const [whatto, withwhat] = userCustom;
  return text.replaceAll(whatto, withwhat);
};

const fineTune = function (text) {
  let sentences = text.split(/[.?\n]/);
  console.log(sentences);
  let finalSentences = [];
  for (let sentence of sentences) {
    if (sentence === '') {
      continue;
    } else {
      sentence = sentence.trim();
      sentence = capitalize(sentence);
      if (sentence[sentence.length - 1] === ',') {
        sentence = sentence + ' ';
      } else {
        sentence += '.';
      }
      finalSentences.push(sentence);
    }
  }

  return finalSentences.join('');
};

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamburger.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

clearBtn.addEventListener('click', () => {
  txtArea.value = '';
});

copyBtn.addEventListener('click', () => {
  txtArea.select();
  txtArea.setSelectionRange(0, 999999);
  console.log(navigator.clipboard);

  navigator.clipboard.writeText(txtArea.value);
});

submitBtn.addEventListener('click', () => {
  let text = txtArea.value;
  let output = '';
  let txtOption = txtMethods.value;
  if (txtOption === 'uppercase') {
    output = upperCase(text);
  }
  if (txtOption === 'capitalize') {
    output = capitalize(text);
  }
  if (txtOption === 'lowercase') {
    output = lowerCase(text);
  }
  if (txtOption === 'replace') {
    output = replace(text);
  }
  if (txtOption === 'fineTune') {
    output = fineTune(text);
  }
  txtArea.value = output;
});

// optRep.addEventListener('click', () => {
//   console.log(customs);
//   alert('Yes user clicked');
//   customs.forEach((element) => {
//     console.log(customs);
//     element.style.display = 'inline';
//   });
// });

txtMethods.addEventListener('change', function () {
  if (this.value === 'replace') {
    customs.forEach((elem) => {
      elem.hidden = false;
    });
  } else {
    customs.forEach((elem) => {
      elem.hidden = true;
    });
  }
});
