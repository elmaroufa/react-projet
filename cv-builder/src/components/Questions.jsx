import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import Question from "./Question";
import AppContext from "../AppContext";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh"
    },
    progresBar:{
        margin: "irem"
    }
}))