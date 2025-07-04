import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('username')
    if (!user) {
      router.push('/')
    } else {
      setUsername(user)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('username')
    router.push('/')
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <span>Welcome {username}</span>
        <button onClick={handleLogout} style={{ marginLeft: 10 }}>Logout</button>
      </div>
      {children}
    </div>
  )
}
