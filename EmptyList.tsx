export default function EmptyList({ label }: { label: string }) {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <img
        src='/assets/sammy-man-looking-into-an-empty-wallet.png'
        className='w-full max-w-md object-cover object-center'
        alt='Animated GIF illustrating a message being sent - GIF shown after contact form is successfully submitted'
      />
      <p className='text-base font-normal text-gray-600 text-center text-balance'>
        Looks empty in here. <br /> We searched far and wide but found no <strong className="text-gray-800">{label}</strong>!
      </p>
    </section>
  )
}
