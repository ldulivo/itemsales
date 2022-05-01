export default function FormError ({ err }) {
  return (
      <>
          {
              (err) ? <span>{err}</span> : null
          }
      </>
  )
}
