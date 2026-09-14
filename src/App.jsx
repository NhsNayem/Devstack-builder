import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loader from './components/Loader.jsx'
import TechnologyGrid from './components/TechnologyGrid.jsx'
import YourStack from './components/YourStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  // Load the technology data from the local JSON file. useEffect is required
  // here because fetching is a side effect that must run after the component
  // mounts, not during render.
  useEffect(() => {
    let cancelled = false

    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setTechnologies(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          toast.error('Could not load technology data.')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  // Fast lookup of which technologies are already in the stack.
  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack])

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id) {
    const removed = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <TechnologyGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
          <div className="pb-10 lg:pt-10">
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
