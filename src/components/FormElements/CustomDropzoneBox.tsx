import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

import AddFilesIcon from "@/Icons/addFilesIcon";

interface DropzoneComponentProps {
  uploadText: string;
  dragText: string;
  fileTypesText: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  fileSizeLimitText?: string;
}

const CustomDropzoneBox: React.FC<DropzoneComponentProps> = ({
  uploadText = "Upload a file",
  dragText = "or drag and drop",
  fileTypesText = "PDF, DOC, JPG up to ",
  borderColor,
  textColor,
  iconColor,
  fileSizeLimitText = "10MB",
}) => {
  const theme = useTheme();

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: `2px dashed ${borderColor || theme.palette.grey[300]}`,
        textAlign: "center",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        color: textColor || theme.palette.text.secondary,
      }}
    >
      <input {...getInputProps()} />
      <AddFilesIcon
        width={48}
        height={48}
        color={iconColor || theme.palette.grey[500]}
      />
      <Typography variant="body2" fontWeight="500">
        <Typography
          component="span"
          variant="body2"
          fontWeight="500"
          color={theme.palette.primary.main}
          marginRight={0.5}
        >
          {uploadText}
        </Typography>
        {dragText}
      </Typography>
      <Typography variant="caption" color={textColor || theme.palette.text.secondary}>
        {`${fileTypesText} ${fileSizeLimitText}`}
      </Typography>
    </Box>
  );
};

export default CustomDropzoneBox;
