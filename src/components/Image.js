const images = [
    { id: 1, src: '../images/image1.jpg', title: 'foo', description: 'bar' },
    { id: 2, src: '../images/image2.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: '../images/image3.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: '../images/image4.jpg', title: 'foo', description: 'bar' },
  ];
  
  function imageLoader() {
    return images;
  }
  
  export default imageLoader;