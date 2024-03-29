import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBooking } from '../features/bookings/bookingSlice'

function BookingForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBooking({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Booking</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Booking
          </button>
        </div>
      </form>
    </section>
  )
}

export default BookingForm
