'use strict';
// отображение блока .setup
var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

// массив имен
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// массив фамилий
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// массив цветов мантии
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// массив цвета глаз
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// генерация параметров персонажа
var renderName = function () {
  var randomNames = Math.floor(Math.random() * NAMES.length);
  var randomSurnames = Math.floor(Math.random() * SURNAMES.length);
  var fullName = NAMES[randomNames] + ' ' + SURNAMES[randomSurnames];
  return fullName;
}

// генерация цвета мантии
var renderCoat = function () {
  var randomCoatColor = Math.floor(Math.random() * COAT_COLOR.length);
  return COAT_COLOR[randomCoatColor];
};

// генерация цвета глаз
var renderEyes = function () {
  var randomEyesColors = Math.floor(Math.random() * EYES_COLORS.length);
  return EYES_COLORS[randomEyesColors];
};

// создание параметров персонажей
var similarListElement = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// создание шаблона одного волшебника
var renderWizard = function () {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = renderName();
  wizardElement.querySelector('.wizard-coat').style.fill = renderCoat();
  wizardElement.querySelector('.wizard-eyes').style.fill = renderEyes();

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
