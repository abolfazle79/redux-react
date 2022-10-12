import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free",
  mimeTypes: ["image/jpeg", "text"],
});

export const ReactUploader = () => {
  return (
    <UploadDropzone
      uploader={uploader}
      options={{ multi: true }}
      onUpdate={(files) => console.log(files)}
      width="600px"
      height="375px"
    />
  );
};
