import TagCloud from "TagCloud"
import { useEffect } from "react"

const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "Javascript",
        "React js",
        "Next js",
        "Vite js",
        "Postgresql",
        "Node js",
        "Express",
        "Sequelize",
        "Bootstrap",
        "Tailwind js",
        "Ant Design",
        "Scrum",
        "Firebase",
        "Rest Api",
        "Sass",
        "Less"
      ];

      const options = {
        radius: 150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div className="textSphere">
      <div className="tagcloud">

      </div>
    </div>
  )
}

export default TextSphere
