import navLogo from "../assets/images/app-tasks-notes-logo.png"

export default function Navbar() {
  return (
    <nav>
        <img className="logo-navbar" src={navLogo} alt="Logo"/>
        <span>Task Organiser</span>
    </nav>
  )
}
