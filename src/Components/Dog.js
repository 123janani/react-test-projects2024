import { useEffect, useState } from "react";

const getDogPics = async () => {
  // API: https://dog.ceo/dog-api/
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();

  return dog.message;
};

export default function DogPics() {
  
// to display new random pic
  const [dogPic, setDogPic] = useState("");

  // as side effect to 
  useEffect(() => {
    getDogPics().then((pic) => setDogPic(pic));
  }, [dogPic]);

  return (
    <div className="dog-pics">
  <div className="dog-image-container">
    <img className="dog-image" src={dogPic} alt="Random dog" />
  </div>
  <button onClick={async () => setDogPic(await getDogPics())}>🐶</button>
</div>
  );
}
