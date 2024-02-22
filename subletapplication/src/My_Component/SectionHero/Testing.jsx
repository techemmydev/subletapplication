<div className={footerstyle.footercontainer}>
<div className={footerstyle.flexcontainer}>
  <div>
    <div className={footerstyle.footerimage}>
      <img
        src="/src/assets/SubletImages/Frame 1.png"
        alt="logofooter"
        className={footerstyle.footerimage2}
      />
    </div>
  </div>
  <div className={footerstyle.contactlist}>
    <h2>contact us</h2>
    <ul>
      <li>
        <MdOutlineLocalPhone className={footerstyle.iconstyle} /> +234
        817 1122 907, +234 814 4349 593 
      </li>
      <li>
        <FaWhatsapp className={footerstyle.iconstyle} />
        +234 8023019 103
      </li>
      <li>
        <MdOutlineMail className={footerstyle.iconstyle} />
        <span className={footerstyle.ctaemail}> sublet@gmail.com </span>
      </li>
    </ul>
  </div>
  <div className={footerstyle.quicklink}>
    <h2>quick links</h2>
    <nav>
      <ul>
        <li>contact us</li>
        <li>privacy policy</li>
        <li>terms of use</li>
      </ul>
    </nav>
    <div className={footerstyle.icon_quicklink}>
      <CiFacebook className={footerstyle.iconstyle_quick} />
      <FaInstagram className={footerstyle.iconstyle_quick} />
    </div>
  </div>
  <p className={footerstyle.copyright}>
    {" "}
    © {copyright} SUBLET | All Rights Reserved{" "}
  </p>
</div>
</div>


<div>
<nav> </nav>
<li>{item.phonenumber}</li>

<li>{item.emailLabel}</li>
</div>

<div>
<li>{item.label}</li>
<li>{item.label}</li>
<li>{item.label}</li>
</div>