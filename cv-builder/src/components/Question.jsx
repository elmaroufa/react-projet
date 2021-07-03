import React, { useContext}  from "react";
import {Button, TextField} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme)=> ({

    buttonContainer:{
      display: "block",
      marginTop: "irem",
    },
    button: {
      background: "white",
    }
}));

function Question(){

    const classes = useStyles();
    const value = useContext(AppContext);

    let { questionAnswer } = value.state;
    let { handleChangeQuestion, nextQuestion } = value.function;


    return (
        <div>
          <form noValidate autoComplete="on" onSubmit={nextQuestion} >
            
          </form>
        </div>
    );
}