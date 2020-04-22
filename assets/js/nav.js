fetch("http://127.0.0.1:5000/api/v1.0/getetfstocks")
  .then((res) => res.json())
  .then((data) => console.log(data));
