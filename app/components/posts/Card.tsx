"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Skeleton from "@mui/material/Skeleton";
import BugReportIcon from "@mui/icons-material/BugReport";
import Fab from "@mui/material/Fab";

export default function PostCard({ isLoading }: { isLoading: boolean }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: "60vw", maxWidth: "70vw", marginBottom: "14px" }} className="postsCard">
      <CardHeader

      //  action={

      //   <IconButton aria-label="settings">

      //    {
      //         isLoading?<Skeleton animation="wave" variant="circular" width={30} height={30} />:  !expanded?  <BookmarkBorderIcon />: <BookmarkIcon />
      //       }
      //   </IconButton>
      // }

      // subheader={
      //   <Typography variant="subtitle2" color="" >
      //     {
      //       isLoading?<Skeleton animation="wave" variant="rectangular" width={150} height={20} />:" September 14, 2016"
      //     }

      //   </Typography>
      // }
      />
      {/* <CardMedia
        component="img"
        height="100"
        image="data:image/png;base64,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"
        alt="Paella dish"
      /> */}
      <CardContent>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height={20}
          />
        ) : (
          <div className="mb-6 flex gap-4">
          <div>

            <Fab color="error" aria-label="add">
              <BugReportIcon />
            </Fab>
          </div>
            
            <div className="d-block">
            <span className="text-red-400 hover:text-blue-400 hover:underline cursor-pointer">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </span>
            <Typography variant="subtitle2" color="text.secondary">June 2023</Typography>
          
            {isLoading ? (
          <Skeleton
            sx={{ marginTop: 2 }}
            animation="wave"
            variant="rectangular"
            width="100%"
            height={100}
          />
        ) : (
          <Typography  variant="subtitle2" color="text.secondary" marginTop={2}>
            When discussing performance with colleagues, teaching, sending a bug
            report or searching for guidance on mailing lists and here on Stack
            When discussing performance with colleagues, teaching, sending a bug
            report or searching for guidance on mailing lists and here on Stack
            When discussing performance with colleagues, teaching, sending a bug
            report or searching for guidance on mailing lists and here on Stack
            Overflow, a reproducible example is often asked and always ...
          </Typography>
        )}

            </div>

           
            
          </div>
        )}

        {/* description */}

        {/* {isLoading ? (
          <Skeleton
            sx={{ marginTop: 2 }}
            animation="wave"
            variant="rectangular"
            width="100%"
            height={100}
          />
        ) : (
          <Typography  variant="subtitle2" color="text.secondary" marginTop={2}>
            When discussing performance with colleagues, teaching, sending a bug
            report or searching for guidance on mailing lists and here on Stack
            Overflow, a reproducible example is often asked and always ...
          </Typography>
        )} */}
      </CardContent>

      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
