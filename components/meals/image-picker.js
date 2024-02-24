"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  const [pickedImage, setPickedImage] = useState(null);

  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handlaInputChange = () => {
    const file = inputRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPickedImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPickedImage(null);
      return;
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Picked image" fill />
          ) : (
            <p>No image</p>
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={classes.input}
          ref={inputRef}
          onChange={handlaInputChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
