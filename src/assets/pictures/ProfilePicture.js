import React from "react";
import me from "../pictures/Me/John_Chan.jpg"

export function ProfilePicture() {
  return (
    <img
      className="h-32 w-32 rounded-full object-cover shadow-xl"
      src={me}
      alt="profile"
    />
  );
}
