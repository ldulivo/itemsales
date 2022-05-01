import { useRouter } from 'next/router'

export default function Test () {
  return (
    <div>
        <h1>test</h1>
        <p>tu ruta </p>
        <pre>{useRouter().pathname}</pre>
    </div>
  )
}
