import React from "react";
// import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
function Header() {
  return (
    <header>
      <h1 style={{ display: "inline-block" }}>
        {" "}
        {/* <EventNoteRoundedIcon /> */}
        Keeper
      </h1>
      <small className="copyright">
        ©️ Copyright @kunaltijare <br />
        <a
          href="https://twitter.com/kunal_tijare"
          target="_blank"
          class="fa fa-twitter"
        ></a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kunal-tijare-aaab76179"
          class="fa fa-linkedin"
        ></a>{" "}
        <a
          target="_blank"
          class="fa fa-instagram"
          href="https://www.instagram.com/kunal_tijare/"
        ></a>
      </small>
    </header>
  );
}

export default Header;
