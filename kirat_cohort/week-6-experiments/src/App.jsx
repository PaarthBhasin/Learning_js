import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms"

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ( {jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount}))</button>
      <button>Messaging ( {messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount}))</button>
      <button>Notifications ( {notificationNotificationCount >= 100 ? "99+" : notificationNotificationCount}))</button>
      <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App
