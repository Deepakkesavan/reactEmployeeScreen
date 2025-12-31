import { useState, useRef } from "react";
import { Camera, Upload, Loader2, CheckCircle, XCircle } from "lucide-react";
import ProfileImage from "@/components/common/cards/ProfileImage";

interface UploadProfilePhotoProps {
  empId: string;
  firstName?: string;
  lastName?: string;
  onUploadSuccess?: () => void;
  onUploadError?: (error: string) => void;
}

export default function UploadProfilePhoto({
  empId,
  firstName = "",
  lastName = "",
  onUploadSuccess,
  onUploadError,
}: UploadProfilePhotoProps) {
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [key, setKey] = useState<number>(0);
  const [hasImage, setHasImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadStatus("error");
      setErrorMessage("Please select a valid image file");
      onUploadError?.("Please select a valid image file");
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setUploadStatus("error");
      setErrorMessage("Image size must be less than 5MB");
      onUploadError?.("Image size must be less than 5MB");
      return;
    }

    await uploadPhoto(file);
  };

  const uploadPhoto = async (file: File) => {
    try {
      setUploading(true);
      setUploadStatus("idle");
      setErrorMessage("");

      const formData = new FormData();
      formData.append("empId", empId);
      formData.append("profile", file);

      const response = await fetch(
        "https://people-dev.clarium.tech/emsapi/api/Employee/UploadProfile",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      if (!response.ok) {
        // const errorText = await response.text();

        throw new Error(`Upload failed: ${response.status}`);
      }

      // const result = await response.text();

      setUploadStatus("success");
      setKey((prev) => prev + 1);
      setHasImage(true);
      onUploadSuccess?.();

      // Reset success message after 3 seconds
      setTimeout(() => {
        setUploadStatus("idle");
      }, 3000);
    } catch (err) {
      const error = err instanceof Error ? err.message : "Upload failed";

      setUploadStatus("error");
      setErrorMessage(error);
      onUploadError?.(error);
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Profile Image with Upload Button Overlay */}
      <div className="relative group">
        <ProfileImage
          key={key}
          empId={empId}
          firstName={firstName}
          lastName={lastName}
          size="lg"
          className="transition-opacity group-hover:opacity-75"
        />

        {/* Upload Button Overlay */}
        <button
          onClick={handleButtonClick}
          disabled={uploading}
          className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer disabled:cursor-not-allowed"
          aria-label={
            hasImage ? "Update profile photo" : "Upload profile photo"
          }
        >
          {uploading ? (
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          ) : (
            <Camera className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Status Badge */}
        {uploadStatus === "success" && (
          <div className="absolute -top-2 -right-2 bg-success text-success-content rounded-full p-1">
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
        {uploadStatus === "error" && (
          <div className="absolute -top-2 -right-2 bg-error text-error-content rounded-full p-1">
            <XCircle className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={uploading}
      />

      {/* Upload/Update Button */}
      <button
        onClick={handleButtonClick}
        disabled={uploading}
        className="btn btn-outline btn-sm gap-2"
      >
        {uploading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            {hasImage ? "Update Photo" : "Upload Photo"}
          </>
        )}
      </button>

      {/* Status Messages */}
      {uploadStatus === "success" && (
        <div className="alert alert-success py-2 px-4">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm">
            Photo {hasImage ? "updated" : "uploaded"} successfully!
          </span>
        </div>
      )}

      {uploadStatus === "error" && errorMessage && (
        <div className="alert alert-error py-2 px-4">
          <XCircle className="w-4 h-4" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      {/* Info Text */}
      <p className="text-xs text-base-content/50 text-center">
        Accepted: JPG, PNG, GIF (Max 5MB)
      </p>
    </div>
  );
}
