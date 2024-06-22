export default function Info(){
  return(
    <div className="info-container">
      <img src='./src/images/Rectangle 90.png' />
      <h3>Laura Smith</h3>
      <p>Frontend Developer</p>
      <a href="http://www.facebook.com">laurasmith.website</a>
      <div className="button-container">
        <button className="email-btn">
          <img src='./src/images/email-icon.png' />
          <h4>Email</h4>
        </button>
        <button className="linkedin-btn">
          <img src='./src/images/vector.png' />
          <h4>Linkedin</h4>
        </button>
      </div>
    </div>
  )
}


