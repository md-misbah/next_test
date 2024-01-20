export default function ContactCard(props) {
  return (
      <div className="contactCard text-center p-6 rounded-xl customBg shadow">
            <div className="contactCardWrapper">
                <div className="contactCardIcon w-fit mx-auto customLime text-3xl mb-2">{props.contactIcon}</div>
                <div className="contactCardTag font-medium text-lg text-white">{props.contactTag}</div>
                <div className="contactCardDesc t">{props.contactDesc}</div>
            </div>
      </div>
  )
}
