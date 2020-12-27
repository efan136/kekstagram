"use strict";

let comments = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.",
  "Как можно было поймать такой неудачный момент?!"
];

let description = [
  "Тестим новую камеру!",
  "Затусили с друзьями на море",
  "Как же круто тут кормят",
  "Отдыхаем...",
  "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......"
];

let getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomArrItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

let generatesPosts = function () {
  let posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(
        {
          url: "photos/" + i + ".jpg",
          likes: getRandomNumber(15, 200),
          comments: getRandomArrItem(comments),
          description: getRandomArrItem(description)
        }
    );
  }
  return posts;
};
generatesPosts();
