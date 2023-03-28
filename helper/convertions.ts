import React, { ChangeEvent } from "react";

export function ImgToBase64(event: ChangeEvent<HTMLInputElement>) {
  const selectedfile = event.target.files;

  if (selectedfile && selectedfile.length > 0) {
    const [imageFile] = selectedfile;
    const fileReader = new FileReader();
    let srcData;
    fileReader.onload = () => {
      srcData = fileReader.result;
    };
    fileReader.readAsDataURL(imageFile);

    return srcData;
  }
}
