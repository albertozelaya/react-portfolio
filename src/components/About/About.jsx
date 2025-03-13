import getImageUrl from "../../utils";

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div className="">
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
        <ul>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>Im a Frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
