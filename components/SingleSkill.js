export default function SingleSkill(props) {
  return (
      <div className="singleSkill_left_01 my-4 flex">
          <div className="skill_icon mt-2 mr-1 text-xl customLime">{props.iconSkill}</div>
          <div className="skillData">
              <h1 className="skill_head text-base text-white font-medium">{props.nameSkill}</h1>
              <h3 className="skill_acc  text-xs	textMouse ">{props.levelSkill}</h3>
          </div>
      </div>
  )
}
