import SideBar from "../components/sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow px-12 py-10">
        {children}
      </div>
    </div>
  )
}