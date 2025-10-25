export default function Button({ children, ...props }) {
  return (
    <button className='py-2 px-4 font-semibold uppercase rounded-xl text-stone-900 bg-amber-400 hover:bg-amber-500'{...props}>{children}</button>
  )
}