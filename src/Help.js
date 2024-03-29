import React from "react";
import injectStyles from "react-jss";

const styles = {
  root: {
    backgroundColor: "#f1f1f1",
    borderBottom: "1px solid #ccc",
    padding: "1.2em",

    "& a:link": {
      textDecoration: "none",
      color: "rgb(0, 0, 238)",
    },

    "& a:hover": {
      textDecoration: "underline",
    },

    "& a:visited": {
      color: "rgb(0, 0, 238)",
    },
  },

  ul: {
    marginTop: "1.2em",
    marginBottom: "0.7em",
    paddingLeft: "1em",

    "& li:not(:last-child)": {
      marginBottom: "0.7em",
    },
  },

  title: {
    fontWeight: "bold",
    fontSize: "1.1em",
  },

  by: {
    fontSize: "0.8em",
    marginTop: "0.3em",
    marginLeft: "0.1em",
  },
};

function Help(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.title}>JavaScript Object Reference Graph</div>
      <div className={classes.by}>by Dan Farino, 2018-2021</div>
      <ul className={classes.ul}>
        <li>
          Call the &ldquo;show&rdquo; function with any objects/values that
          you&rsquo;d like to graph.
        </li>
        <li>
          If you&rsquo;d like to use{" "}
          <a
            href="https://immerjs.github.io/immer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            immer 9.0
          </a>
          , it&rsquo;s in scope as &ldquo;produce&rdquo; (
          <a href="?code=MYewdgzgLgBCBGArAjDAvDA3gKBjMAhgLYCmAXDAOQAiBYlANLvgK5HwkBOEFA2ssgYxkAZiHIA7AF1sAXwDc2bBAAWIAO4AKBCgCUi7KEiwdAJnQwADpxAATFsBLakgmLfQA+LM1sA6QqQWlABSICr0irL6Sqoazoim0Ybg0HBIIhbWdg5OZkLuaF44eH5gbBzcvAAMUhYALKaKJf7lXBC+liyqmshVVdFRBrFaOiLRQA">
            example
          </a>
          ).
        </li>
        <li>
          <a
            href="https://github.com/danfarino/objectgraph"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code on GitHub
          </a>
        </li>
        <li>
          <span>
            Since strings are immutable, you can render them as values in order
            to de-clutter the output. However, rendering them as references is
            more accurate in showing that references are being shared and no
            copies of the strings are being made.
          </span>
          <br />
          <em>
            Note: when rendering strings as references, it is assumed that all
            identical strings are shared in memory. This may not be true in all
            cases (e.g. when you are programmatically generating strings).
          </em>
        </li>
      </ul>
    </div>
  );
}

export default injectStyles(styles)(Help);
