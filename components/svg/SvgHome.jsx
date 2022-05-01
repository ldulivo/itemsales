export default function SvgHome ({ props, BgColor = 'none', color = '#000' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{'SvgHome'}</title>
      <path d="M0 0h24v24H0V0z" fill={BgColor} />
      <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill={color} />
    </svg>
  )
}
