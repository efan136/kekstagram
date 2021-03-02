"use strict";

let pictureTemplate = document.querySelector('#picture').content;
let picturesContainer = document.querySelector('.pictures');
let bigPicture = document.querySelector('.big-picture');
let bigPictureImg = document.querySelector('.big-picture__img img');
let bigPictureLikes = document.querySelector('.likes-count');
let bigPictureCommentsCount = document.querySelector('.comments-count');
let bigPictureComments = document.querySelector('.social__comments');
let bigPictureCommentCounts = document.querySelector('.social__comment-count');
let bigPictureCommentAddNew = document.querySelector('.social__comments-loader');


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

let hideElement = function (element) {
  element.classList.add("visually-hidden");
};

let generatesData = function () {
  let posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(
        {
          url: "photos/" + i + ".jpg",
          likes: getRandomNumber(15, 200),
          comments: comments,
          description: getRandomArrItem(description)
        }
    );
  }
  return posts;
};

let drawPosts = function (dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    let newpictureTemplate = pictureTemplate.cloneNode(true);
    newpictureTemplate.querySelector('.picture__img').src = dataArr[i].url;
    newpictureTemplate.querySelector('.picture__likes').textContent = dataArr[i].likes;
    newpictureTemplate.querySelector('.picture__comments').textContent = dataArr[i].comments;
    picturesContainer.append(newpictureTemplate);
  }
};

drawPosts(generatesData());

bigPicture.classList.remove('hidden');

let printComments = function () {
  while (bigPictureComments.firstChild) {
    bigPictureComments.removeChild(bigPictureComments.firstChild);
  }
  for (let i = 0; i < generatesData()[0].comments.length; i++) {
    let templateComment = document.querySelector('#comment').content.cloneNode(true);
    templateComment.querySelector('img').src = "img/avatar-" + getRandomNumber(1, 6) + ".svg";
    templateComment.querySelector(".social__text").textContent = generatesData()[0].comments[i];
    bigPictureComments.appendChild(templateComment);
  }
};

let fillMainPhoto = function (dataArr) {
  bigPictureImg.src = dataArr[0].url;
  bigPictureLikes.textContent = dataArr[0].likes;
  bigPictureCommentsCount.textContent = dataArr[0].comments.length;
  printComments();
  hideElement(bigPictureCommentCounts);
  hideElement(bigPictureCommentAddNew);
};

fillMainPhoto(generatesData());
