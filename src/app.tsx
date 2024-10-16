import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="mx-auto flex max-w-[1216px] flex-col py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
