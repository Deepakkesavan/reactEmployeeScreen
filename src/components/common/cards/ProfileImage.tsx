import { useState, useEffect } from "react";
import { User, Loader2 } from "lucide-react";

interface ProfileImageProps {
  empId: string;
  firstName?: string;
  lastName?: string;
  className?: string;
  fallbackClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onImageStatusChange?: (exists: boolean) => void;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export default function ProfileImage({
  empId,
  firstName = "",
  lastName = "",
  className = "",
  fallbackClassName = "",
  size = "md",
  onImageStatusChange
}: ProfileImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (!empId) {
        setLoading(false);
        onImageStatusChange?.(false);
        return;
      }
  
      try {
        setLoading(true);
        setError(false);
  
        const response = await fetch(
          "https://people-dev.clarium.tech/emsapi/api/Employee/Getprofile",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ empId, profile: null }),
          }
        );
  
        if (!response.ok) throw new Error();
  
        const blob = await response.blob();
  
        if (blob.size === 0) {
          setError(true);
          onImageStatusChange?.(false);
          return;
        }
  
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        onImageStatusChange?.(true); // ✅ image exists
      } catch {
        setError(true);
        onImageStatusChange?.(false);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfileImage();
  
    return () => {
      if (imageUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [empId]);
  

  const baseClasses = `${sizeClasses[size]} rounded-full ${className}`;

  if (loading) {
    return (
      <div
        className={`${baseClasses} bg-base-200 flex items-center justify-center`}
      >
        <Loader2 className="w-1/2 h-1/2 animate-spin text-base-content/30" />
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div
        className={`${baseClasses} bg-base-200 flex items-center justify-center ${fallbackClassName}`}
      >
        {firstName || lastName ? (
          <span className="text-xl font-bold text-base-content/50">
            {firstName?.charAt(0) || ""}
            {lastName?.charAt(0) || ""}
          </span>
        ) : (
          <User className="w-1/2 h-1/2 text-base-content/30" />
        )}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${firstName} ${lastName}`}
      className={`${baseClasses} object-cover`}
    />
  );
}
