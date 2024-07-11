import { useEffect, useState } from "react";

const getDogPics = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();

  return dog.message;
};

export default function DogPics() {
  // API: https://dog.ceo/dog-api/

  const [dogPic, setDogPic] = useState("");

  useEffect(() => {
    getDogPics().then((pic) => setDogPic(pic));
  }, []);

  return (
    // <div className="dog-pics">
    //   <img src={dogPic} alt="" />
    //   <button onClick={async (p) => setDogPic(await getDogPics())}>🐶</button>
    // </div>

    <div className="dog-pics">
  <div className="dog-image-container">
    <img className="dog-image" src={dogPic} alt="Random dog" />
  </div>
  <button onClick={async () => setDogPic(await getDogPics())}>🐶</button>
</div>
  );
}
