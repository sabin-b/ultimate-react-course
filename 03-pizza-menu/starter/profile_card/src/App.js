import "./index.css";
import { skills } from "./data";
export function App() {
  return (
    <div className="card">
      <Avatar avatar_image="avatar.jpg" />
      <Data profile_name="sabin.b" designation="developer" />
    </div>
  );
}

// * avatar
function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.avatar_image}
      alt={props.avatar_image.slice(0, 6)}
    />
  );
}

// * data
function Data(props) {
  let skillList = skills;

  return (
    <div className="data">
      <h1>{props.profile_name}</h1>
      <h4>{props.designation}</h4>
      {skillList.length > 0 && (
        <ul className="skill-list">
          {skillList.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </ul>
      )}
    </div>
  );
}

// * skillset
function Skill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "advanced" && "👌"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "beginner" && "👶"}
      </span>
    </li>
  );
}
