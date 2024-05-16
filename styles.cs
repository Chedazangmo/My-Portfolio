body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail {
  margin: 5px;
  cursor: pointer;
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
}

.lightbox-img {
  display: block;
  margin: auto;
  max-width: 80%;
  max-height: 80%;
}

.close {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
}

.prev,
.next {
  color: #fff;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  cursor: pointer;
  font-size: 20px;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail {
  margin: 5px;
  cursor: pointer;
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
}

.lightbox-img {
  display: block;
  margin: auto;
  max-width: 80%;
  max-height: 80%;
}

.close {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
}

.prev,
.next {
  color: #fff;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  cursor: pointer;
  font-size: 20px;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  // Add more photo URLs here
];