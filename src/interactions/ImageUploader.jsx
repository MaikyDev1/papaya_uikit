"use client";

import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/buttons/BasicButtons";

const imageUrl = (imageServer, id) => `${imageServer}/api/v1/image/${id}`;

/**
 * Uploads an image to DuckyImagesServer and gives back its ID.
 * @param imageId initial/saved image id (may be null/undefined)
 * @param title label
 * @param ref use `await ref.current.getImageId()`: uploads/replaces/deletes as needed
 *            and returns the id to store (null = no image). Throws on failure,
 *            so the parent must abort its save when it throws.
 */
export default function ImageUpload({ imageServer, imageId, title, ref }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(imageId ? imageUrl(imageServer, imageId) : null);
  const savedIdRef = useRef(imageId ?? null); // what the server currently has

  // Sync when the parent's data arrives or changes
  useEffect(() => {
    savedIdRef.current = imageId ?? null;
    setFile(null);
    setPreviewUrl(imageId ? imageUrl(imageServer, imageId) : null);
  }, [imageId]);

  // Revoke blob URLs when replaced or on unmount
  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function handleFileChange(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    e.target.value = ""; // allows re-picking the same file
  }

  function clear() {
    setFile(null);
    setPreviewUrl(null);
  }

  function revert() {
    const id = savedIdRef.current;
    setFile(null);
    setPreviewUrl(id ? imageUrl(imageServer, id) : null);
  }

  useImperativeHandle(ref, () => ({
    async getImageId() {
      const current = savedIdRef.current;

      // Cleared by the user
      if (!previewUrl) {
        if (current) {
          const res = await fetch(`${imageServer}/api/v1/delete/${current}`, {
            credentials: "include",
            method: "DELETE",
          });
          if (!res.ok && res.status !== 404) throw new Error("Image delete failed");
          savedIdRef.current = null;
        }
        return null;
      }

      // Nothing new picked
      if (!file) return current;

      // New file: upload, or replace if one exists
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        current
          ? `${imageServer}/api/v1/replace/${current}`
          : `${imageServer}/api/v1/upload`,
        { credentials: "include", method: "POST", body: formData }
      );
      if (!res.ok) throw new Error("Image upload failed");

      const { id } = await res.json();
      savedIdRef.current = id;
      setFile(null);
      setPreviewUrl(`${imageUrl(imageServer, id)}?v=${Date.now()}`); // bust cache if the id is reused
      return id;
    },
  }));

  const dirty = file !== null || (previewUrl === null && savedIdRef.current != null);

  return (
    <div>
      <p className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </p>
      <div className="p-2 flex flex-col gap-2 bg-stone-100 border border-stone-200 squircle-4xl">
        <div className="flex gap-2 items-center">
          {previewUrl && (
            <img
              className="rounded-xl"
              src={previewUrl}
              alt="Preview"
              style={{ width: 70, height: 70, objectFit: "contain" }}
            />
          )}

          <label className="flex items-center cursor-pointer justify-center squircle-2xl bg-stone-200 h-17.5 grow focus-within:ring-2">
            Upload {previewUrl !== null && "a new"} image
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="flex gap-2 justify-end">
          {dirty && <SecondaryButton title="Revert to original" onClick={revert} />}
          {previewUrl !== null && <PrimaryButton title="Clear Image" onClick={clear} />}
        </div>
      </div>
    </div>
  );
}